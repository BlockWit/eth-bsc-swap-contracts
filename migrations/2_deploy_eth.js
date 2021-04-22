const ETHSwapAgentImpl = artifacts.require("ETHSwapAgentImpl");
const ERC20ABC = artifacts.require("ERC20ABC");
const ERC20DEF = artifacts.require("ERC20DEF");

module.exports = async function(deployer) {
  await deployer.deploy(ERC20ABC);
  await deployer.deploy(ERC20DEF);
  await deployer.deploy(ETHSwapAgentImpl);
};
