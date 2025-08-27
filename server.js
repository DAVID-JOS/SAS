const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// User model
const User = mongoose.model('User', new mongoose.Schema({
    username: String,
    balanceDC: { type: Number, default: 0 },
    balanceNGN: { type: Number, default: 0 }
}));

// Mining endpoint
app.post('/mine', async (req, res) => {
    const { username, amount } = req.body;
    let user = await User.findOne({ username });
    if(!user) user = new User({ username });
    user.balanceDC += amount;
    await user.save();
    res.json({ message: 'DavCoins mined', balanceDC: user.balanceDC });
});

// Withdraw to Moniepoint
app.post('/withdraw', async (req, res) => {
    const { username, amountNGN, recipientAccount } = req.body;
    let user = await User.findOne({ username });
    if(!user) return res.status(404).json({ error: 'User not found' });

    if(user.balanceNGN < amountNGN) return res.status(400).json({ error: 'Insufficient funds' });

    try {
        const response = await axios.post('https://sandbox.moniepoint.com/api/v1/transfer', {
            amount: amountNGN,
            recipient: recipientAccount,
        }, {
            headers: {
                'Authorization': `Bearer ${config.moniepointAPIKey}`,
                'Secret-Key': config.moniepointSecret,
            }
        });

        user.balanceNGN -= amountNGN;
        await user.save();
        res.json({ message: 'Withdrawal successful', transaction: response.data });
    } catch (err) {
        res.status(500).json({ error: 'Moniepoint transfer failed', details: err.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
