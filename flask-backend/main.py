import datetime
import flask
import jwt
from flask import jsonify, request, Response
from flask_cors import CORS
from settings import app
from tinydb import TinyDB, Query
from functools import wraps
import json
from userModel import *

# data = TinyDB("data.json")
# table = data.table("Zone")
# table.insert({"id": 1, "name": "TVRoom", "accessLevel": "Parent", "items": [{"id": 1, "group": "lamp",
#                                                                              "name": "Halogen", "status": "true"}]})
# table = table.all()

CORS(app)

app.config["SECRET_KEY"] = 'meow'


@app.route("/api/login", methods=["GET", "POST"])
def get_token():
    request_data = request.get_json()
    username = str(request_data["username"])
    password = str(request_data["password"])
    match = User.username_password_match(username, password)
    if match:
        expiration_date = datetime.datetime.utcnow() + datetime.timedelta(seconds=300)
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


@app.route("/api/v1.0/addrole", methods=["GET", "POST"])
@token_required
def createnewrole():
    request_data = request.get_json()
    role = str(request_data["role"])
    msm = Role.createnewrole(role)
    print(msm)
    if msm == 200:
        return jsonify("Role Added"), 200
    else:
        return jsonify("The role is exist"), 500


@app.route("/api/v1.0/delrole", methods=["GET", "POST"])
@token_required
def deleterole():
    request_data = request.get_json()
    role = str(request_data["role"])
    msm = Role.delrole(role)
    print(msm)
    if msm == 200:
        return jsonify("Role Added"), 200
    else:
        return jsonify("The role is exist"), 500


@app.route("/api/v1.0/createuser", methods=["POST"])
@token_required
def createUser():
    request_data = request.get_json()
    username = str(request_data["username"])
    password = str(request_data["password"])
    roleId = str(request_data["roleId"])
    msm = User.createUser(username, password, roleId)
    if msm == 200:
        return jsonify({"response": "User successfully added"}), 200
    else:
        return jsonify({"response": "add User failed"}), 500


@app.route("/api/v1.0/deleteuser", methods=["POST"])
@token_required
def deleteUser():
    request_data = request.get_json()
    username = str(request_data["username"])
    # msm = User.deleteUser(int(id))
    # if msm == 200:
    return jsonify({"data": User.deleteUser(username)})
    # else:
#     return jsonify({"data": "delete User failed"}), 500


@app.route("/api/v1.0/getallusers", methods=["GET", "POST"])
@token_required
def getallusers():
    # try:
    return jsonify({"data": User.GetAllUsers()}), 200


# except:
#     return jsonify({"response": "delete User failed"}), 500


@app.route("/api/v1.0/GetAllroles", methods=["GET", "POST"])
# @token_required
def GetAllroles():
    return jsonify({"data": Role.showall()})


@app.route("/api/v1.0/getRole", methods=["GET", "POST"])
@token_required
def getRolePerUser():
    request_data = request.get_json()
    username = str(request_data["username"])
    return jsonify({"MineUserRole": User.getRole(username)})


@app.route("/api/v1.0/allHome", methods=["GET", "POST"])
@token_required
def my_index():
    data = TinyDB("data.json")
    data = data.table("Zone")
    return jsonify({"data": data.all()})


@app.route("/api/v1.0/perRoleHome", methods=["GET", "POST"])
@token_required
def perRoleHome():
    request_data = request.get_json()
    role = str(request_data["role"])
    data = TinyDB("data.json")
    data = data.table("Zone")
    query = Query()
    # print(data.search(query.accessLevel == role))
    if role == "admin":
        return jsonify({"data": data.all()})
    else:
        return jsonify({"data": data.search(query.accessLevel == role)})


@app.route("/api/v1.0/update", methods=["POST"])
@token_required
def update_status():
    request_data = request.get_json()
    zoneIndex = request_data["zoneIndex"]
    dataitem = request_data["dataitem"]
    zoneId = request_data["zoneId"]
    # print(zoneIndex)
    # print(dataitem)
    data1 = TinyDB("data.json")
    data1 = data1.table("Zone")
    data1.all()
    query = Query()
    data1.update({"items": dataitem}, query.zoneId == zoneId)
    return jsonify({"data": data1.all()})


@app.route("/api/v1.0/addZone", methods=["POST"])
@token_required
def addZone():
    request_data = request.get_json()
    newZone = request_data["newZone"]
    role = request_data["role"]
    data1 = TinyDB("data.json")
    data1 = data1.table("Zone")
    query = Query()
    # print((data1.search(query.zoneName)))
    if data1.count(query.zoneName == newZone) > 0:
        return "the Zone is exist", 500
    else:
        counter = len(data1) + 1
        data1.insert({"zoneId": counter, "zoneName": newZone, "accessLevel": role, "items": []})
        return "The zone successfully Added", 200


@app.route("/api/v1.0/additems", methods=["GET", "POST"])
@token_required
def addIthems():
    request_data = request.get_json()
    zoneId = request_data["zoneId"]
    newitems = request_data["eachZone.items"]
    print(newitems)
    print(zoneId)
    data = TinyDB("data.json")
    data = data.table("Zone")
    query = Query()
    try:
        data.update({"items": newitems}, query.zoneId == zoneId)
        return "ok", 200
    except:
        return "not ok", 500


@app.route("/api/v1.0/changePassword", methods=["GET", "POST"])
@token_required
def changePassword():
    request_data = request.get_json()
    username = str(request_data["username"])
    oldPassword = str(request_data["oldPassword"])
    newPassword = str(request_data["newPassword"])
    # print(username)
    # print(oldPassword)
    # print(newPassword)
    msg = User.changePassword(username, oldPassword, newPassword)
    return msg


@app.errorhandler(404)
def page_not_found(e):
    return flask.render_template('index.html'), 404


if __name__ == '__main__':
    app.run('127.0.0.1', port=5000, debug=True)
# else:
#     app.config.update(
#         SERVER_NAME='localhost:5000',
#         APPLICATION_ROOT='/',
#     )

# netstat -tulpn
# kill 9
