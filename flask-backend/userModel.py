from flask_sqlalchemy import SQLAlchemy
from settings import app


db = SQLAlchemy(app)


class User(db.Model):
    __tableName__ = "users"
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(80), nullable=False)
    role     = db.Column(db.String(80), nullable=False)

    # terminal
    # python (enter)
    # from userModel import *
    # db.create_all()
    # cat database.db  --show databases

    def __repr__(self):
        return str({
            "username": self.username,
            "password": self.password,
            "role":self.role
        })

    def username_password_match(_username, _password):
        user = User.query.filter_by(username=_username).filter_by(password=_password).first()
        if user is None:
            return False
        else:
            return True

    def getAllUsers():
        return User.query.all()

    def createUser(_username, _password,_role):
        new_user = User(username=_username, password=_password, role=_role)
        db.session.add(new_user)
        db.session.commit()
