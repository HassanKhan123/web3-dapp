const { PRIVATE_KEY } = require("./secret");

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/FLr_rS1arer-acPtHw_oCwnCWxyEKxF_",
      accounts: [PRIVATE_KEY],
    },
  },
};
