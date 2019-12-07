from flask import Flask
from tinydb import TinyDB


app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:////Users//Rose//Desktop//SmartHome//flask-backend//database.db "
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
# app.config["SERVER_NAME"] = "localhost:8888"


