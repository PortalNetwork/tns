const TNSRegistrar = artifacts.require('TNSRegistrar.sol');
const TNSRegistry = artifacts.require('TNSRegistry.sol');
const TNSResolver = artifacts.require('TNSResolver.sol');
const namehash = require('eth-ens-namehash');
const Web3 = require('web3');
let web3 = new Web3();

contract('TNS', function (accounts) {
  beforeEach(async () => {
    console.log('tomo sha3', web3.sha3('tomo'));
    console.log('tomo namehash', namehash.hash('tomo'));
    registry = await TNSRegistry.new();
    registrar = await TNSRegistrar.new(registry.address, 0);
    resolver = await TNSResolver.new(registry.address);

    await registry.setOwner(0, registrar.address, {from: accounts[0]});
  });

  it('should allow registration of names', async () => {
    await registrar.register(web3.sha3('tomo'), accounts[0], {from: accounts[0]});
    assert.equal(await registry.owner(0), registrar.address);
    assert.equal(await registry.owner(namehash.hash('tomo')), accounts[0]);
  });

  it('register a domain', async () => {
    await registrar.register(web3.sha3('tomo'), accounts[1], {from: accounts[1]});
    assert.equal(await registry.owner(namehash.hash('tomo')), accounts[1]);
    // register a subdomain
    await registry.setSubnodeOwner(namehash.hash('tomo'), web3.sha3('subdomain'), accounts[1], {from: accounts[1]});
    assert.equal(await registry.owner(namehash.hash('subdomain.tomo')), accounts[1]);
  });

});
