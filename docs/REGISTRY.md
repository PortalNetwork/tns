# Registry

The Quarkchain registry consists of a single smart contract that maintains a list of all domains and subdomains, and stores three critical pieces of information about each:
- The owner of the domain
- The resolver for the domain
- The time-to-live for all records under the domain

The owner of a domain may be either an external account (a user) or a smart contract. A registrar is simply a smart contract that owns a domain, and issues subdomains of that domain to users that follow some set of rules defined in the contract.

Owners of domains in the Quarkchain registry may:
- Set the resolver and TTL for the domain
- Transfer ownership of the domain to another address
- Change the ownership of subdomains

The Quarkchain registry is deliberately straightforward, and exists only to map from a name to the resolver responsible for it.
