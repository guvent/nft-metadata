require("@nomicfoundation/hardhat-toolbox");
require('@openzeppelin/hardhat-upgrades');
require("dotenv").config();


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.22",
  networks: {
    bsc: {
      url: process.env.BSC_URL,
      chainId: 97,
      gasPrice: 20000000000,
      accounts: {
        mnemonic: process.env.BSC_MNEMONIC
      }
    },
    mumbai: {
      url: process.env.POLYGON_URL,
      accounts: [process.env.POLYGON_ACCOUNT]
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_KEY
  }
};

/*

npx hardhat clean

npx hardhat run scripts/deployMarket.js --network mumbai

npx hardhat verify --network mumbai 0xC32093e1f3a1d20E48af77D282f76B42Fb35d45b

Proxy contract address: 0xbFF3B67d80dD0545DE3d8C5bE0415204e52Bf475
Implementation contract address: 0xC32093e1f3a1d20E48af77D282f76B42Fb35d45b

---

Proxy contract address: 0x626ed769d44F06484f38C05EB9a4ac14C3fD4dC6
Implementation contract address: 0xC32093e1f3a1d20E48af77D282f76B42Fb35d45b


0x70b4AC449D78ae2cC1962e52BDb47339053f9313
0xF112d7538E6791F4227c7100Ca2ffC8916C3B88F
0x1689F6DFAE45679cd91fB90428dfD3B9283519b5


-------

npx hardhat run scripts/deploy.js --network mumbai

npx hardhat verify --network mumbai 0xbD79C15d89f3D46b6f906b31d70CB7f112b1D859

Proxy contract address: 0xCAdE76222Bc183A9352C3828ec34bEb097Da088b
Implementation contract address: 0xbD79C15d89f3D46b6f906b31d70CB7f112b1D859


*/
