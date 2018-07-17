#! /bin/bash

yarn build:server
docker build -t kofikyei/abb:latest .
docker push kofikyei/abb:latest
ssh root@138.197.180.97 "docker pull kofikyei/abb:latest && docker tag kofikyei/abb:latest dokku/abb:latest && dokku tags:deploy abb latest"
