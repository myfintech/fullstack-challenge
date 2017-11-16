## Dependencies

This project uses yarn. If you don't have yarn, you will need to run `nmp install -g yarn` to install the node-modules folder. You can then run `yarn install` to install dependencies.

Postgres will need to be installed in your machine.

You only need to do this the first time you install!

Create user first (use password fullstack_challenge by default):

`createuser --pwprompt fullstack_challenge`

Then create a database:

` createdb -O fullstack_challenge fullstack_challenge`

Create a test database so that you can run the tests:

`createdb -O fullstack_challenge fullstack_challenge_test`


## Running tests

To run the test, make sure you have created a test db by running:

`createdb -O fullstack_challenge fullstack_challenge_test`

and then that you have run the test migrations with:

`yarn migrate:test`

and then run:

`yarn test`
