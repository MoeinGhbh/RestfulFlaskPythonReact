from tinydb import TinyDB, Query


data1 = TinyDB("data.json")
data1 = data1.table("Zone")
data1.all()

# for item in data1:
#     print(item)

fruit = Query()
print(data1.search(fruit.name == "Room"))