import json

class JsonUpdate():
    def UpdateStaticCode(zoneId, ItemId, Code):
        output_file = open("data.json").read()
        output_json = json.loads(output_file)

        for tmp in output_json["Zone"][str(zoneId)]['items']:
            if tmp['itemId'] == ItemId:
                tmp['code'] = Code

        with open("data.json", "w") as jsonFile:
                json.dump(output_json, jsonFile)

