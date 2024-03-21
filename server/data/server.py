from flask import Flask, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

@app.route("/travel")
def helloWord():
    with open("data.json") as file:
        data = json.load(file)
    return jsonify(data)


