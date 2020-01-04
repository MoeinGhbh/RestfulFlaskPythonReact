import openpyxl


# newitems = [{"group": "Lamp", "itemId": 2, "itemName": "\u0647\u0627\u0644\u0648\u0698\u0646", "status": True},
#             {"group": "Socket", "itemId": 6, "itemName": "\u0631\u0627\u0633\u062a", "status": False}]


class makeExcellFile():

    def makeFile(zoneId, zoneName, newitems):

        print(newitems)
        print(zoneName)
        print(zoneId)

        flag = False
        wb = openpyxl.load_workbook('List.xlsx')
        sheet = wb['List']



        for row in sheet.iter_rows():
            for cell in row:
                if cell.value == None:

                    sheet.cell(row=cell.row, column=2).value = zoneId
                    sheet.cell(row=cell.row, column=3).value = zoneName

                    for item in newitems:
                        if (item['group'] == 'Aircondition') and ((item['speedType'] == 'Fast') \
                                                                  or (item['speedType'] == 'Normal')):
                            sheet.cell(row=cell.row, column=1).value = cell.row
                            sheet.cell(row=cell.row, column=4).value = item['itemId']
                            sheet.cell(row=cell.row, column=5).value = item['itemName']
                            sheet.cell(row=cell.row, column=6).value = item['group']
                            sheet.cell(row=cell.row, column=7).value = item['speedType']

                        if ((item['group'] == 'Aircondition') and (item['speedType'] == 'Slow') or (
                                item['group'] != 'Aircondition')):
                            sheet.cell(row=cell.row, column=1).value = cell.row+17
                            sheet.cell(row=cell.row, column=4).value = item['itemId']
                            sheet.cell(row=cell.row, column=5).value = item['itemName']
                            sheet.cell(row=cell.row, column=6).value = item['group']
                            if (item['group'] == 'Aircondition'):
                                sheet.cell(row=cell.row, column=7).value = item['speedType']
                            else:
                                sheet.cell(row=cell.row, column=7).value = ''
                    flag = True
                    break
            if flag:
                break
            else:
                continue
        wb.save("List.xlsx")