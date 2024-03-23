from flask import Flask, send_from_directory
from flask_cors import CORS
import mimetypes

app = Flask(__name__)
CORS(app)

mimetypes.add_type('application/javascript', '.js')

@app.route('/client/pages/login/<path:filename>')
def login_files(filename):
    return send_from_directory('../../client/pages/login', filename)

@app.route('/client/pages/travel/<path:filename>')
def travel_files(filename):
    return send_from_directory('../../client/pages/travel', filename)

@app.route('/client/utils/<path:filename>')
def utils_files(filename):
    return send_from_directory('../../client/utils', filename)

@app.route('/client/images/<path:filename>')
def images_files(filename):
    return send_from_directory('../../client/images', filename)
