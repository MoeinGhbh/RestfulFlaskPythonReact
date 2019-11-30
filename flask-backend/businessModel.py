from flask import Flask, jsonify
from tinydb import TinyDB, Query

data = TinyDB("data.json")


class Data(data):

    def get_all_data():
        # return Book.query.all()
        return [Data.json(alldata) for alldata in Data.query.all()]
