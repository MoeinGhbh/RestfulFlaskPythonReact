import flask
from flask import jsonify, request, Response
from flask_cors import CORS
import tinydb
from tinydb import TinyDB, Query
import json

data = TinyDB("data.json")
table = data.table("navigator")
# table.insert_multiple([{"key": 0, "name": "TV Room", "items": [{"LAMP1": 0, "LAMP2": 1}, {"a/c": 1}, {"socket": 1}]}])
# table.insert_multiple([{"key": 0, "name": "TV Room", "items": [
#     {
#         "Lamp": {
#             "Halojen": "on",
#             "Lostr": "off",
#             "LED": "on"
#         }
#     },
#     {
#         "Curtains": {
#             "Right": "open",
#             "Left": "close"
#         }
#     },
#     {
#         "AirCondition": {
#             "Fan 1": "on",
#             "Fan 2": "off",
#             "Fan 3": "off"
#         }
#     },
#     {
#         "Socket": {
#             "Socket 1": "on",
#             "Soket 2": "off"
#         }
#     }
# ]
#                         }]
#                       )

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
