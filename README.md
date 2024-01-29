# Training: Initial Project

Basic project dependencies
node 16.13.2
yarn 1.22.19
webpack 5.73.0

Building and running
See package.json for the details of the commands below.

## This project contains a call to the Giphy Gif Api and requires an api key.

You can get your own Giphy api key at : [https://developers.giphy.com/docs/api#quick-start-guide](https://developers.giphy.com/docs/api#quick-start-guide)


## To run the API that serves Sailor Moon universe data

+ In the CLI,  `$ yarn sailorserver`
+ The endpoint can be found at [http://localhost:3001/](http://localhost:3001/)

## To run client side rendering (csr):

+ To build the project in csr mode: `$ yarn build:csr`

+ To build the project in csr mode for development: `$ yarn watch:csr`

+ To deliver the project in csr mode: `$ yarn start:csr`


## To run server side rendering (ssr):

+ To build the project in ssr mode: `$ yarn build:csr`

+ To deliver the project in ssr mode: `$ yarn start:csr`


## Redis and redis-cli
### KSM-3867 Deliverables

Redis is an open source, in-memory data structure store.

**redis-cli** is a terminal program that has two main modes: 
- Read Eval Print Loop (REPL) mode
- Command mode

On the command line:

to run Redis in the foreground: 
    `redis-server` (starts redis)
    `CTL-C` (stops the service)

to run Redis in the background: 
    `brew services start redis` (starts redis)
    `brew services info redis` (checks the status)
    `brew services stop redis` (stops the service)

once Redis is running:
    `redis-cli` (opens the Redis REPL) 

an overview of some redis-cli commands: https://redis.io/docs/manual/cli/

the Redis data types tutorial: https://redis.io/docs/data-types/tutorial/

add data: `set nameofkey "TheKey\'sValue"`
delete data: `del nameofkey`


An instance of Redis supports 16 databases numbered 0 to 15. When connecting to a Redis instance, you connect to datatbase 0 by default.

To switch to a different database, use the keyword `select`: `select 15`


