# Headless dApp

This is a simple, from scratch boilerplate project for a backend service that interacts with the ethereum blockchain. There are many like it, but this one is mine. 


## Composition

Docker compose spins up three containers. One for the Server, one for the database, one for the Geth node.


## Running
`lerna start`

## Interacting

It uses graphql as the API, use the graphiql interface to explore and interact with the service. (Or Postman)

## Tests

`lerna test`


# Project Goals

1) Build a service composed of multiple parts
2) Setup unit tests that run against each project
3) Create an integration test suite that runs multiple instances of the service
4) Setup deployment configurations
5) Add logging and telemetry 