const ETHSwapAgentImpl = artifacts.require("ETHSwapAgentImpl");
const ERC20ABC = artifacts.require("ERC20ABC");
const ERC20DEF = artifacts.require("ERC20DEF");

module.exports = async function(deployer) {
  const erc20abc = await ERC20ABC.deployed();
  const erc20def = await ERC20DEF.deployed();
  const swapAgent = await ETHSwapAgentImpl.deployed();
  await erc20abc.increaseAllowance(swapAgent.address, '1000000000000000000');
  await swapAgent.swapETH2BSC(erc20abc.address, '1000000000000000000');
  await erc20def.increaseAllowance(swapAgent.address, '2000000000000000000');
  await swapAgent.swapETH2BSC(erc20def.address, '2000000000000000000');
};
