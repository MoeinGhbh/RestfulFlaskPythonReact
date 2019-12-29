from flask_sqlalchemy import SQLAlchemy
from settings import app
import json
from sqlalchemy.orm import relationship, backref

db = SQLAlchemy(app)


class Role(db.Model):
    __tableName__ = "role"
    id = db.Column(db.Integer, primary_key=True)
    role = db.Column(db.String(120), nullable=False)

    def json(self):
        return {'id': self.id, 'role': self.role}

    def __repr__(self):
        json_role_table = {
            "id": self.id,
            "role": self.role
        }
        return json.dumps(json_role_table)

    def createnewrole(_newRole):
        if Role.query.filter_by(role=_newRole).count() == 0:
            try:
                new_role = Role(role=_newRole)
                db.session.add(new_role)
                db.session.commit()
                return 200
            except:
                return 500
        else:
            return 500

    def delrole(_Role):
        if Role.query.filter_by(id=_Role).count() > 0:
            try:
                Role.query.filter_by(id=_Role).delete()
                db.session.commit()
                return 200
            except:
                return 500
        else:
            return 500

    # def showallroles():
    #     p = (db.session.query(User)
    #          .options(db.eagerload(User.role))
    #          .get(1)
    #          )
    #     print(p.role.role)
    #     # tmp = Role.query.all()
    #     # return tmp

    def showall():
        return [Role.json(roles) for roles in Role.query.all()]


class User(db.Model):
    __tableName__ = "user"
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(80), nullable=False)
    role = db.relationship('Role', backref='user', lazy=True)
    role_id = db.Column(db.Integer, db.ForeignKey('role.id'))

    # terminal
    # python (enter)
    # from userModel import *
    # db.create_all()
    # cat database.db  --show databases

    def __repr__(self):
        return str({
            "username": self.username,
            "password": self.password,
            "role": self.role
        })

    def json(self):
        return {
            'id': self.id,
            'username': self.username,
            'password': self.password,
            'role': self.role,
            'role': self.role_id
        }

    def username_password_match(_username, _password):
        user = User.query.filter_by(username=_username).filter_by(password=_password).first()
        if user is None:
            return False
        else:
            return True

    def createUser(_username, _password, _role):
        new_user = User(username=_username, password=_password, role_id=_role)
        try:
            db.session.add(new_user)
            db.session.commit()
            return 200
        except:
            return 500

    # def deleteUser(_username):
    #     user = User.query.filter_by(username=_username).first()
    #     print(user)
    #     db.delete(user)
    #     db.session.commit()

    def deleteUser(_username):
        if User.query.filter_by(username=_username).count() > 0:
            try:
                User.query.filter_by(username=_username).delete()
                db.session.commit()
                return 200
            except:
                return 500
        else:
            return 500

    def GetAllUsers():
        return [User.json(user) for user in User.query.all()]

    def getRole(_username):
        user = User.query.filter_by(username=_username).first()
        if user is not None:
            return user.role.role

    # def getAllRole():
    #     user = User.query.all(db.column[3])
    #     if user is not None:
    #         return user.role

    def changePassword(_username, _oldPassword, _newPassword):
        try:
            aa = User.query.filter_by(username=_username, password=_oldPassword).first()
            aa.password = _newPassword
            db.session.commit()
            return "tha password successfully changed"
        except:
            return "user or password is wrong"

    # def deleteUser(_username):
    #     User.query.filter_by(username=_username).delete()
