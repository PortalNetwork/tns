# TNS

Implementations for smart contracts for the Quarkchain Name Service.

## Techincal Stack
- Use `truffle` to create, compile, deploy and test smart contract.
- Use `open zeppelin` for smart contract security.
- Use `ganache-cli` for local testing.

## Install the project dependency

Install `truffle` and `ganache-cli`
```
npm install -g truffle
npm install -g ganache-cli
```

## Local testing

Testing with `truffle`
```
truffle test
```

## QCNSRegistry.sol
Implementation of the QCNS registry, the central contract used to look up resolvers and owners for domains.

## QCNSRegistrar.sol
Implementation of the QCNS registrar, which issues (sub-)domains to the first account to request them.

## QCNSResolver.sol
Implementation of the QCNS resolver that allows the owner of any domain to configure how its name should resolve.

