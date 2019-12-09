import datetime
import flask
import jwt
from flask import jsonify, request, Response
from flask_cors import CORS
from settings import app
from tinydb import TinyDB, Query
from functools import wraps

from userModel import User

data = TinyDB("data.json")
smQuery = Query()
table = data.table("Zone")
# table.insert({"id": 1, "name": "TVRoom", "accessLevel": "Parent", "items": [{"id": 1, "group": "lamp",
#                                                                              "name": "Halogen", "status": "true"}]})
table = table.all()

CORS(app)

app.config["SECRET_KEY"] = 'meow'


@app.route("/api/login", methods=["GET", "POST"])
def get_token():
    request_data = request.get_json()
    print(request_data)
    username = str(request_data["username"])
    password = str(request_data["password"])
    match = User.username_password_match(username, password)
    if match:
        expiration_date = datetime.datetime.utcnow() + datetime.timedelta(seconds=100)
        token: object = jwt.encode({"exp": expiration_date}, app.config["SECRET_KEY"], algorithm="HS256")
        return token
    else:
        return Response('', 401, mimetype='applicatio/json')


def token_required(f):
    @wraps(f)
    def wrapper(*args, **kwargs):
        token = request.args.get("token")
        try:
            jwt.decode(token, app.config["SECRET_KEY"])
            return f(*args, **kwargs)
        except:
            return jsonify({"error": "Need to token to show this page"}), 401

    return wrapper


@app.route("/api/v1.0/getRole", methods=["GET", "POST"])
@token_required
def getRolePerUser():
    request_data = request.get_json()
    print(request_data)
    username = str(request_data["username"])
    print("main: " + User.getRole(username))
    aaa = User.getRole(username)
    return jsonify({"MineUserRole": aaa})


@app.route("/api/v1.0/allHome", methods=["GET", "POST"])
@token_required
def my_index():
    table = data.table("Zone")
    table = table.all()
    return jsonify({"data": table})


@app.route("/api/v1.0/update", methods=["POST"])
@token_required
def update_status():
    request_data = request.get_json()
    print(request_data)
    table = data.table("Zone")
    table = table.all()
    db = Query()
    # db.search(table.)
    print(table)
    return jsonify(dict(data='a'))


@app.errorhandler(404)
def page_not_found(e):
    return flask.render_template('index.html'), 404


if __name__ == '__main__':
    app.run(debug=True)
# else:
#     app.config.update(
#         SERVER_NAME='localhost:5000',
#         APPLICATION_ROOT='/',
#     )
