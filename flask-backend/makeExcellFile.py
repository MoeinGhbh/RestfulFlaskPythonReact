import openpyxl

newitems = [{"group": "Lamp", "itemId": 2, "itemName": "\u0647\u0627\u0644\u0648\u0698\u0646", "status": True},
            {"group": "Socket", "itemId": 6, "itemName": "\u0631\u0627\u0633\u062a", "status": False}]


class makeExcellFile():

    def makeFile(newitems):
        print(newitems)
        flag = False
        wb = openpyxl.load_workbook('List.xlsx')
        sheet = wb['List']
        for row in sheet.iter_rows():
            for cell in row:
                if cell.value == None:
                    print(cell.value)
                    print(cell.row)
                    print(cell)
                    print(cell)
                    # sheet.insert_rows(cell.row)

                    sheet.cell(row=cell.row, column=1).value = 111
                    sheet.cell(row=cell.row, column=2).value = 222
                    sheet.cell(row=cell.row, column=3).value = 333
                    sheet.cell(row=cell.row, column=4).value = 444
                    sheet.cell(row=cell.row, column=5).value = 555


                    flag = True
                    break
            if flag:
                break
            else:
                continue
        wb.save("List.xlsx")
