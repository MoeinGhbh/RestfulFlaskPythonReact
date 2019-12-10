from tinydb import TinyDB, Query

db = TinyDB('db.json')
# db.insert({'type': 'apple', 'count': 7})
# db.insert({'type': 'peach', 'count': 3})

db.all()

# for item in db:
#     print(item)

Fruit = Query()
# print(db.search(Fruit.type == 'peach'))
# print(db.search(Fruit.count > 5))
#
db.update({'count': 10}, Fruit.type == 'apple')
db.all()
#
# db.remove(Fruit.count < 5)
# db.all()
