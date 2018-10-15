# TNS Deploy

## TNS Contract Info

#### Source code
- [TNSRegistrar.sol](../tns/TNSRegistrar.sol)
- [TNSRegistry](../tns/TNSRegistry.sol)
- [TNSResolver](../tns/TNSResolver.sol)


#### Contract address
TNSResolver: [0x89e77b691c8e3718b808015dbca094d35d7c37cc](https://scan.testnet.tomochain.com/address/0x89e77b691c8e3718b808015dbca094d35d7c37cc)

TNSRegistrar: [0xb4cc8deec867c8352ec8f86afc945590629ae260](https://scan.testnet.tomochain.com/address/0xb4cc8deec867c8352ec8f86afc945590629ae260)

TNSRegistry: [0xdf9e5ce912412ab6af0dd46acff0ffc112bbe36e](https://scan.testnet.tomochain.com/address/0xdf9e5ce912412ab6af0dd46acff0ffc112bbe36e)

## How To Deploy TNS On TomoChain

First, we need to deploy the Registry first.

Tx:[0x971c1ae1ccc10bf97bdebf24deb455362d847011d3cccb6fd517dd0e974ec490](https://scan.testnet.tomochain.com/txs/0x971c1ae1ccc10bf97bdebf24deb455362d847011d3cccb6fd517dd0e974ec490)

Then Registrar with two parameters:

TNS Registry node: 0xdf9e5ce912412ab6af0dd46acff0ffc112bbe36e

TNS rootNode = 0xee7289196899d8c5bc40150453f87a5ebf33e301b7ed2537d6cc0ba5caeadcd5

And the last deploy resovler contract

TX :[0xd66e858bbde4f95e30886c1d4d9dbaa76ea14d85628db4dcb50d087a8a86de22](https://scan.testnet.tomochain.com/txs/0xd66e858bbde4f95e30886c1d4d9dbaa76ea14d85628db4dcb50d087a8a86de22)

## How to Initialized TNS Contract

We need to transfer the ownership TLD domain ( tomo ) to Registrar first, before registrar can begin to obtain domain.

Method:  `SetSubdomain(0x0000000000000000000000000000000000000000, sha3('tomo'), 0xb4cc8deec867c8352ec8f86afc945590629ae260)`

Tx:[0xbd46c107527c7575fb4bfd17f76d51ec310d52c109cc951135bea5a2be01ba39](https://scan.testnet.tomochain.com/txs/0xbd46c107527c7575fb4bfd17f76d51ec310d52c109cc951135bea5a2be01ba39)

Then we can check to see if the 'tomo' TLD domain has already been transfered to Registrar.

Method: 

`owner(namehash('tomo'))`

Return 0xb4cc8deec867c8352ec8f86afc945590629ae260

After we setsubdomain and check the owner of namehash : 'tomo' is Registrar, we are good to go.

## Get Domain from Registrar

So far this contract has only function is register, you can call this function with two parameters  `[sha3('domain_name'), address_owner]`

And you can check by `owner` function to see if this transaction is success.

## Set Up multihash

As soon as you get the ownership of the domain you want, you can begin to set up multihash for you domain. Such as IPFS hash.

Before you can set multihash on your domain, you need go to Registry to set Up resolver first.

`setResolver(node, resolver)` 

After set up Resolver we can now using resolver to bind our domain with IPFS hash

`setMultihash(node, key, hash)`

 IPFS hash need to tranfer into byte, put your IPFS 

This website can help you to transfer your IPFS hash into byte

https://gist.github.com/PhyrexTsai/cffcbfa1d752b9cf817d920dfcd1ec9f

Now we can check `multihash(node, key)` and get back the byte transfer from IPFS.
