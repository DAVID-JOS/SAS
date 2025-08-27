# SAS
Mine and transfer real coins 
# Mine App

The **Mine App** is a global airdrop and mining platform with its own wallet infrastructure (**SkyWallet**).  
It allows unlimited users worldwide to mine and hold tokens, convert them into fiat currencies, and transfer securely to **Moniepoint** accounts.  

---

## 🌍 Key Features

- **Token Supply**: 21,000,000 tokens available for mining  
- **Mining System**: Users mine tokens per second, earning based on activity and engagement  

### Monetization:
- Clicks inside the app  
- Time spent in the app  
- Data usage and subscriptions  
- Mining rate per second  

### SkyWallet Integration:
- Stores mined tokens securely  
- Converts **SkyCoin (SKD)** into **USD** or **NGN**  
- Transfers only to **Moniepoint** accounts  

### App Size & Usage:
- App Size: **360 MB**  
- Required Space: **20 MB**  
- Data Usage: **5 MB per minute**  

✅ Cross-Platform: Available for **Android** and **iPhone**  

---

## 🔒 Transactions

- All transactions are handled **only through SkyWallet**  
- Conversion from **SKD → USD → NGN** before transfer  
- Secure API integration with **Moniepoint** using personal API keys  

---

## 📲 Installation

1. Download the **Mine App** (Android APK / iOS release).  
2. Create an account and get a unique wallet address.  
3. Start mining tokens immediately.  

---

## ⚡ Usage

1. Open the app and begin mining  
2. Monitor mined tokens in **SkyWallet**  
3. Convert tokens into **USD/NGN** when ready  
4. Withdraw to **Moniepoint**  

---

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript  
- **Backend**: Node.js / Express (with MongoDB for user & wallet storage)  
- **Wallet**: SkyWallet (custom integration)  
- **Payments**: Moniepoint API  

---

## 📡 API

The app connects to backend APIs for:  
- Mining tracking  
- Wallet balance updates  
- Conversion rates (**SKD → USD → NGN**)  
- Transfers to Moniepoint  

⚠️ **Note**: You must provide your own Moniepoint API and secret keys in order to activate transfers.  

---

### 📌 Example API Requests

#### 1. Start Mining
```http
POST /api/mine
Content-Type: application/json

{
  "userId": "USER12345"
}
