const TNSRegistry = artifacts.require("./TNSRegistry.sol");
const TNSRegistrar = artifacts.require('./TNSRegistrar.sol');
const TNSResolver = artifacts.require('./TNSResolver.sol');

const web3 = new (require('web3'))();
const namehash = require('eth-ens-namehash');

const TOMO = 'tomo';

module.exports = async (deployer) => {
  // deploy registry
  let tnsResgirty = await deployer.deploy(TNSRegistry);
  // deploy registrar
  let tnsRegistrar = await deployer.deploy(TNSRegistrar, TNSRegistry.address, namehash.hash(TOMO));
  // deploy resolver
  let tnsResolver = await deployer.deploy(TNSResolver, TNSRegistry.address);
  TNSRegistry.at(TNSRegistry.address).setSubnodeOwner('0x0', web3.sha3(TOMO), TNSRegistrar.address);
};
