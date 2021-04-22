const ETHSwapAgentImpl = artifacts.require("ETHSwapAgentImpl");
const ERC20ABC = artifacts.require("ERC20ABC");
const ERC20DEF = artifacts.require("ERC20DEF");

module.exports = async function(deployer) {
  const erc20abc = await ERC20ABC.deployed();
  const erc20def = await ERC20DEF.deployed();
  const swapAgent = await ETHSwapAgentImpl.deployed();
  await swapAgent.registerSwapPairToBSC(erc20abc.address);
  await swapAgent.registerSwapPairToBSC(erc20def.address);
};
