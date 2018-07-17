#! /bin/bash

yarn build:server
heroku container:push --app=aqueous-ocean-70161 web
heroku container:release web
