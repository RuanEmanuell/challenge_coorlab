#!/bin/bash

killall flask

pip install python-dotenv
pip install Flask
pip install Flask-Cors

sudo apt install python3-flask

cd server/data
gnome-terminal -- flask --app server run &
cd ..

sleep 2

cd files
gnome-terminal -- flask --app static run

sleep 2

firefox http://localhost:8080/client/pages/login/index.html

