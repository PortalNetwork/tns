const TNSRegistrar = artifacts.require('TNSRegistrar.sol');
const TNSRegistry = artifacts.require('TNSRegistry.sol');
const TNSResolver = artifacts.require('TNSResolver.sol');
const namehash = require('eth-ens-namehash');
const Web3 = require('web3');
let web3 = new Web3();

contract('TNS', function (accounts) {

  let registry, registrar, resolver;

  beforeEach(async () => {
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

  it('should register a domain', async () => {
    await registrar.register(web3.sha3('tomo'), accounts[1], {from: accounts[1]});
    assert.equal(await registry.owner(namehash.hash('tomo')), accounts[1]);
    // register a subdomain
    await registry.setSubnodeOwner(namehash.hash('tomo'), web3.sha3('subdomain'), accounts[1], {from: accounts[1]});
    assert.equal(await registry.owner(namehash.hash('subdomain.tomo')), accounts[1]);
  });

  it('should check resolver interfaces', async () => {
    assert.equal(await resolver.supportsInterface('0x3b3b57de'), true);
    assert.equal(await resolver.supportsInterface('0xd8389dc5'), true);
    assert.equal(await resolver.supportsInterface('0x691f3431'), true);
    assert.equal(await resolver.supportsInterface('0xe89401a1'), true);
    assert.equal(await resolver.supportsInterface('0x59d1d43c'), true);
  });

  it('should not support a random interface', async () => {
    assert.equal(await resolver.supportsInterface('0x3b3b57df'), false);
  });

  it('should set resolver for node', async () => {
    await registrar.register(web3.sha3('tomo'), accounts[1], {from: accounts[1]});
    await registry.setSubnodeOwner(namehash.hash('tomo'), web3.sha3('subdomain'), accounts[1], {from: accounts[1]});
    await registry.setResolver(namehash.hash('tomo'), resolver.address, {from: accounts[1]});
    assert.equal(await registry.resolver(namehash.hash('tomo')), resolver.address);
  });

  it('should set text', async () => {
    await registrar.register(web3.sha3('tomo'), accounts[1], {from: accounts[1]});
    await registry.setSubnodeOwner(namehash.hash('tomo'), web3.sha3('subdomain'), accounts[1], {from: accounts[1]});
    await registry.setResolver(namehash.hash('tomo'), resolver.address, {from: accounts[1]});
    await resolver.setText(namehash.hash('tomo'), 'TNS', 'TomoChain Name Service', {from: accounts[1]});
    assert.equal(await resolver.text(namehash.hash('tomo'), 'TNS'), 'TomoChain Name Service');
  }); 

  it('should set address', async () => {
    await registrar.register(web3.sha3('tomo'), accounts[1], {from: accounts[1]});
    await registry.setSubnodeOwner(namehash.hash('tomo'), web3.sha3('subdomain'), accounts[1], {from: accounts[1]});
    await registry.setResolver(namehash.hash('tomo'), resolver.address, {from: accounts[1]});
    await resolver.setAddr(namehash.hash('tomo'), accounts[1], {from: accounts[1]});
    assert.equal(await resolver.addr(namehash.hash('tomo')), accounts[1]);
  });

  it('should set multihash', async () => {
    await registrar.register(web3.sha3('tomo'), accounts[1], {from: accounts[1]});
    await registry.setSubnodeOwner(namehash.hash('tomo'), web3.sha3('subdomain'), accounts[1], {from: accounts[1]});
    await registry.setResolver(namehash.hash('tomo'), resolver.address, {from: accounts[1]});
    await resolver.setMultihash(namehash.hash('tomo'), 'IPFS', '0x0000000000000000000000000000000000123456', {from: accounts[1]});
    assert.equal(await resolver.multihash(namehash.hash('tomo'), 'IPFS'), '0x0000000000000000000000000000000000123456');
  });
});
