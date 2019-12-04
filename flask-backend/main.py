import flask
from flask import jsonify, request, Response
from flask_cors import CORS
import tinydb
from tinydb import TinyDB, Query
import json

data = TinyDB("data.json")
table = data.table("Zone")
# table.insert({"id": 1, "name": "TVRoom", "items": [{"id": 1, "group": "lamp", "name": "Halogen", "status": "on"}]})

table = table.all()
app = flask.Flask("__main__")

CORS(app)


@app.route("/api/v1.0/allHome", methods=["GET", "POST"])
def my_index():
    return jsonify({"data": table})


@app.errorhandler(404)
def page_not_found(e):
    return flask.render_template('index.html'), 404


app.run(debug=True)
# if __name__ == '__main__':
#     app.run(debug=True)
# else:
#     app.config.update(
#         SERVER_NAME='localhost:5000',
#         APPLICATION_ROOT='/',
#     )
