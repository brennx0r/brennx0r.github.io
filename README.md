# brennx0r.com site!

## Running in development
`gatsby develop`

## Deploying

`npm run-script deploy`

## Troubleshooting

If you cannot deploy and get an error message like this:

> bash
> fatal: A branch named 'master' already exists.

... what is going on is that the cache for gh-pages needs to be cleared. (Remove files
from ```node_modules/gh_pages/.cache```).