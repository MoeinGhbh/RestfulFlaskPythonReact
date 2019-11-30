from flask import Flask
from tinydb import TinyDB, Query


# app = Flask(__name__)

def data_base():
    return TinyDB("data.json")


class connection:
    pass

# app= TinyDB("data.json")


# User = Query()

# Sample of data
# tmp = {"key":"0","name": "TV Room", "items": [ {"LAMP1": "0","LAMP2": "1"},{"a/c":"0","a/c": "1" },{"socket": "0"}]}

# db.insert(
#     {"key": 15, "name": "Room 2", "items": [{"LAMP1": 0, "LAMP2": 1}, {"a/c": 0, "a/c": 1}, {"socket": 0}]})


