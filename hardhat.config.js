require('@nomiclabs/hardhat-ethers');

const dotenv = require('dotenv');

dotenv.config();

const mainnetFork = {
  url: `${process.env.JSON_RPC_PROVIDER_HARMONY}`,
};

module.exports = {
  networks: {
    hardhat: {
      chainId: 1666600000,
      blockGasLimit: 30_000_000,
      forking: mainnetFork,
      accounts: {
        count: 2,
      },
    },
  },
};
