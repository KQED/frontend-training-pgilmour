# Training: Initial Project

Basic project dependencies
node 16.13.2
yarn 1.22.19
webpack 5.73.0

Building and running
See package.json for the details of the commands below.

To run without SSR:
To run express app only: `$ yarn node ./server/index.js` or `yarn server`

To build entire project, express to deliver react: `$ yarn build`
To start entire project, express server delivers react frontend: `$ yarn start`

## How the Codebase is Structured

### Summary

The root of the project is `App.js` and will evetually house the main routes.

The `components` directory will keep global elements of the site, including visual parts like the header which includes the masthead and navigation bar, and the footer.

The `slices` directory will house the Redux slices, which contain the data stores and api calls

#### Diagram of the file system

```
|-- src
|    |-- components
|    |  |-- keep global components here, like nav bar, masthead, header, footer
|    |
|    |-- slices
|    |  |-- keep Redux slices of state here, data stores and api calls
|    |
|
|-- App.js, import routes here
|
|-- api
|    |-- our api server
|
|-- server
|    |-- keeps `index.js` which serves out React app.
|
|-- dist
    |-- transpiled files are kept here
...

```

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


