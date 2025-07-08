require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config(); 

const INFURA_API_KEY = process.env.INFURA_API_KEY;
const ALCHEMY_API_KEY=process.env.ALCHEMY_API_KEY;
const SEPOLIA_PRIVATE_KEY = process.env.SEPOLIA_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY],
    },
  alchemy: {
    url:`https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
    accounts: [SEPOLIA_PRIVATE_KEY],
  }
  },
};
