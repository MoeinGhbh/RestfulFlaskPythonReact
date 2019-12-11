import flask
from tinydb import TinyDB, Query, where

data1 = TinyDB("data.json")
data1 = data1.table("Zone")
data1.all()
query = Query()

# print(data1.search((where("zoneId") == 1)))

# data1.update({'accessLevel': "sadfasd"}, query.where("zoneName") == "moein")


el = data1.get(where('zoneName') == "moein")
print(el)
