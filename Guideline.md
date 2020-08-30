# Initialize Angular App

npx @angular/cli new local-weather-app

## Alternative with anstalling NG globally

ng new local-weather-app

# Build the App

ng run build

# GIT commends

git status
git add --all
git commit -m ":emoji: here is the message"
git push

# Routers

npm install @angular/router

# dev-norms : generates markdown file

npm install dev-norms --save-dev --save-exact

--save-exact to install the exact version

npx dev-norms create

# Security

npm audit

# just a cmd

git commit -m ":package: "


# create a component

npx ng generate component current-weather

# create an interface

npx ng generate interface ICurrentWeather

# Angular Service

npx ng g s weather --flat false

# Testing Angular App

HttpClientTestingModule  // provider??

fake.ts ???

# Docker

> Add this to package json:

  "config": {
    "imageRepo": "tennakdi23/myweatherstation",
    "imageName": "localcast-weather",
    "imagePort": "8080"
  },

  > and this

  https://gist.github.com/duluca/d13e501e870215586271b0f9ce1781ce#file-npm-scripts-for-docker-md

> then run

npm run docker:build
npm run docker:run

npm run docker:publish

# Solutions

npm i -D cross-conf-env npm-run-all