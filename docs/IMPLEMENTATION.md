# Implementation

## TNS Smart Contracts

The link of TNS smart contract as below:
- [TNSRegsitry.sol](../TNS/TNSRegistry.sol)
- [TNSRegistrar.sol](../TNS/TNSRegistrar.sol)
- [TNSResolver.sol](../TNS/TNSResolver.sol)

- namehash.hash('tomo'): 0xee7289196899d8c5bc40150453f87a5ebf33e301b7ed2537d6cc0ba5caeadcd5
- tomo sha3: 0x5513f0729608beb3f5df42dd873abcfa95e225f4869d2a2a1e42b264790e0238

## TNS Spec

The internet HTTP protocol is using the URL below:

```
<protocol>://<subdomain>.<domain>.<top-level domain>/<path>
```

Example:
```
https://www.portal.tomo/path
```

#### Spec
- http: The TNS and protocol will be passed separately when the service requests.
- www.portal.tomo: The content of the TNS is used when user requests to the browser.
- path: The path is not processed at the DNS level, the same as TNS, if there is a path, it is handled by other way or method.

## Resolving Names
Resolving names in TNS is a three step process:
1. Normalise and hash the name you want to resolve (see [Namehash](#namehash)).
2. Query the TNS registry for the address of the resolver responsible for the name.
3. Query the resolver for the resource you want to look up.

## Updating TNS Records
Your application may wish to provide users with a means of updating names they own to point to resources your application provides or manages. Doing so follows a similar process to [Resolving Names](#resolving-names):

- Normalise and hash the name you want to resolve (see [Namehash](#namehash)).
- Query the TNS registry for the address of the resolver responsible for the name.
- Call the appropriate update method on the resolver.

## Namehash
Names in TNS are represented as 32 byte hashes, rather than as plain text. This simplifies processing and storage, while permitting arbitrary length domain names, and preserves the privacy of names onchain. The algorithm used to translate domain names into hashes is called namehash. The Namehash algorithm is defined in [EIP137](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-137.md).

In order to preserve the hierarchal nature of names, namehash is defined recursively, making it possible to derive the hash of a subdomain from the namehash of the parent domain and the name or hash of the subdomain label.

### Terminology
- domain - the complete, human-readable form of a name; eg, `wallet.portal.tomo`.
- label - a single component of a domain; eg, `portal`, `wallet`, or `tomo`. A label may not contain a period ('.').
- label hash - the output of the keccak-256 function applied to a label.
- node - the output of the namehash function, used to uniquely identify a name in TNS.
