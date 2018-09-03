![TomoChain Name Service](./assets/title.jpg)

> 📖🔍 Documents of the TomoChain Name Service.

## 💡 What is TomoChain?
TomoChain is a public blockchain for dApps. The mission is to be a leading force in building the Internet of Value, designing its infrastructure and working to create an alternative financial system which is more secure, transparent, efficient, inclusive and equitable for everyone.

## 💡 What is BNS?
BNS – or blockchain name system – is the protocol on the internet that turns human-comprehensible decentralized website names such as ‘website.perl’ or ‘mywebsite.eth’ into addresses understandable by decentralized network machines.

## 📝 Description

TNS is the TomoChain Name Service, a distributed, open, and extensible naming system based on the TomoChain blockchain.

## 📚 Documents

#### Table of Contents
- [Introduction](./docs/INTRODUCTION.md)
- [Implementation](./docs/IMPLEMENTATION.md)
    - [Registry](./docs/REGISTRY.md)
    - [Registrar](./docs/REGISTRAR.md)
    - [Resolver](./docs/RESOLVER.md)
- [Integration](./docs/INTEGRATION.md)

## 📝 Guideline
- [Smart Contract Testing](./tns/README.md)
- [Smart Contract Design Principle](./docs/SMART_CONTRACT_DESIGN_PRINCIPLE.md)

## ⚙️ TNS smart contract test coverage
__Continuous updating__
- [Coverage Report](./tns/coverage/)

![Coverage](./assets/coverage.png)

```
Launched testrpc on port 8555
Running: truffle test
(this can take a few seconds)...
Using network 'development'.



  Contract: TNS
    ✓ should allow registration of names (103ms)
    ✓ should register a domain (125ms)
    ✓ should check resolver interfaces (99ms)
    ✓ should not support a random interface
    ✓ should set resolver for node (138ms)
    ✓ should set text (207ms)
    ✓ should set address (185ms)
    ✓ should set multihash (200ms)


  8 passing (3s)

-------------------|----------|----------|----------|----------|----------------|
File               |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
-------------------|----------|----------|----------|----------|----------------|
 contracts/        |       75 |       50 |       76 |     77.5 |                |
  TNS.sol          |      100 |      100 |      100 |      100 |                |
  TNSRegistrar.sol |      100 |       50 |      100 |      100 |                |
  TNSRegistry.sol  |    78.57 |       50 |    77.78 |       80 |       68,69,96 |
  TNSResolver.sol  |    66.67 |       50 |    69.23 |    68.42 |... ,99,130,141 |
-------------------|----------|----------|----------|----------|----------------|
All files          |       75 |       50 |       76 |     77.5 |                |
-------------------|----------|----------|----------|----------|----------------|

Istanbul coverage reports generated
Cleaning up...
Shutting down testrpc-sc (pid 83549)
Done.
```

## 🗃 Changelog
See [CHANGELOG.md](./CHANGELOG.md).

## 📣 Contributing
See [CONTRIBUTING.md](./CONTRIBUTING.md) for how to help out.

## 🗒 Licence
See [LICENSE](./LICENSE) for details.
