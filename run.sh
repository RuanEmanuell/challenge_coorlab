#!/bin/bash

pip install python-dotenv
pip install Flask
pip install Flask-Cors

cd server/data
flask --app server run &
cd ..

sleep 2

cd files
flask --app static run &

sleep 2

xdg-open http://localhost:8080/client/pages/login/index.html

