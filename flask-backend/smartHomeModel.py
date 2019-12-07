from flask import Flask
from tinydb import TinyDB

data = TinyDB("data.json")


# table = data.table("Zone")
#  table = table.all()

class SmartHome(data):


    # def json(self):
    #     return {"name": self.name, "price": self.price, "isbn": self.isbn}

    def get_all_things():
        # data = TinyDB("data.json")
        table = data.table("Zone")
        return [SmartHome.json(thing) for thing in table.all()]
