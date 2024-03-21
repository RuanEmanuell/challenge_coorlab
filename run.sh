#!/bin/bash

pip install Flask

pip install Flask-Cors

cd server

flask --app server run

sleep 1

xdg-open http://localhost:5000/client/pages/login/index.html
