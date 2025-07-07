# 💧 ERC20 Token Faucet dApp (Hardhat + React)

A decentralized application showcasing how to create and deploy an ERC20 token smart contract using **Solidity + Hardhat**, then interact with it via a **React frontend** using **Ethers.js + MetaMask**.

---

## ⚙️ Quick Start Guide

```bash
# 1. Clone the repository
git clone https://github.com/your-username/token-faucet-dapp.git
cd token-faucet-dapp

# 2. Install backend dependencies
npm install

# 3. Set up environment variables
touch .env
# Open .env in your editor and add the following:
# -----------------------------------------------
# INFURA_API_KEY=your_infura_project_id
# SEPOLIA_PRIVATE_KEY=your_metamask_private_key
# (Use test accounts only — never expose real keys)
# -----------------------------------------------

# 4. Deploy the ERC20 Token Smart Contract

# a. Local Network (start node in one terminal)
npx hardhat node

# b. In a new terminal (deploy locally)
npx hardhat run scripts/deploy.js --network localhost

# OR

# Deploy to Sepolia Testnet (make sure .env is set)
npx hardhat run scripts/deploy.js --network sepolia

# 5. Run Tests (optional)
npx hardhat test

# 6. Launch the Frontend App
cd frontend
npm install
npm run start
# Visit http://localhost:3000 in your browser
# Make sure MetaMask is connected to the appropriate network (localhost or Sepolia)

# 7. Using the Faucet (local network only)
# npx hardhat --network localhost faucet <your_address>

