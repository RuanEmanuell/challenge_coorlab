from flask import Flask, jsonify
from flask_cors import CORS, cross_origin
import json

app = Flask(__name__)

@app.route("/travel")
@cross_origin()
def helloWord():
    with open("data.json") as file:
        data = json.load(file)
    return jsonify(data)

