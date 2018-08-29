# Resolver
Resolvers are responsible for the actual process of translating names into addresses. Any contract that implements the relevant standards may act as a resolver in TNS. General-purpose resolver implementations are offered for users whose requirements are straightforward, such as serving an infrequently changed address for a name.

Each record type - Tomochain address, IPFS content hash, and so forth - defines a method or methods that a resolver must implement in order to provide records of that kind. 
