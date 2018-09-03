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

## TNSRegistry.sol
Implementation of the TNS registry, the central contract used to look up resolvers and owners for domains.

## TNSRegistrar.sol
Implementation of the TNS registrar, which issues (sub-)domains to the first account to request them.

## TNSResolver.sol
Implementation of the TNS resolver that allows the owner of any domain to configure how its name should resolve.

