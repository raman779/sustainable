### Respect following guidelines while writing any code (this list may be updated as per requirements)

1. always use resource routes, and define only required methods in Controllers. see ex. `controllers/ToDoController.js (all routes)`, `controllers/MeController.js (only index route)`

2. Controllers should contain logic related to request and validation, ie. validation, sanitization and conditions, use service layer to perform complex logic and db operations.

3. We are using knex to peform db queries, transactions & db modifications using migrations read more here `https://knexjs.org/`

-- use command `npm run knex <any knex cli command like migrate:make>` etc to use knex cli.

4. Do not write any manual sql queries, unless use `knex` query builder is not able to perform that query.

5. This repo contains both `fe` (frontend) and `be` (backend) don't mess with any folder unless you know what you are doing.

6. any secrets or config should be defined in .env and present by config files under `src/config` folder as done in `src/config/database.js`

7. put any helpers or utility functions in `utils` folder.

8. avoid duplicate code if any recurrence is happening two or more places make sure to abstract it out at proper places in respective folders.


any questions?? connect with the repo owner directly.

