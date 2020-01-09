import openpyxl
from xlsxwriter.utility import xl_rowcol_to_cell
from xlrd import open_workbook


class makeExcellFile():

    @staticmethod
    def findCell(mySheet, zoneName, itemId):
        print(mySheet)
        print(zoneName)
        print(itemId)
        book = open_workbook('List.xlsx')
        for sheet in book.sheets():
            if sheet.name == mySheet:
                print(sheet)
                for rowidx in range(sheet.nrows):
                    zoneFlag = False
                    itemFlag = False
                    print(rowidx)
                    row = sheet.row(rowidx)
                    print(row)
                    for colidx, cell in enumerate(row):
                        if sheet.cell(rowidx, 2).value == zoneName and sheet.cell(rowidx, 3).value == itemId:
                            return False
        return True

    @staticmethod
    def makeFile(zoneId, zoneName, newitems):
        print(newitems)
        print(zoneName)
        print(zoneId)
        # main.update_status()

        wb = openpyxl.load_workbook('List.xlsx')
        HighAmper = wb['HighAmper']
        for item in newitems:
            if makeExcellFile.findCell('HighAmper', zoneName, item['itemId']):
                if (item['group'] == 'Aircondition') and (
                        (item['speedType'] == 'Fast') or (item['speedType'] == 'Normal')):
                    flag = False
                    for row in HighAmper.iter_rows():
                        print(row)
                        for cell in row:
                            print(cell)
                            if cell.value == None:
                                print(cell.value)
                                print(cell.row)
                                HighAmper.cell(row=cell.row, column=1).value = (cell.row - 1)
                                HighAmper.cell(row=cell.row, column=2).value = zoneId
                                HighAmper.cell(row=cell.row, column=3).value = zoneName
                                HighAmper.cell(row=cell.row, column=4).value = item['itemId']
                                HighAmper.cell(row=cell.row, column=5).value = item['itemName']
                                HighAmper.cell(row=cell.row, column=6).value = item['group']
                                HighAmper.cell(row=cell.row, column=7).value = item['speedType']
                                flag = True
                                break
                        if flag:
                            break
                        else:
                            continue
            wb.save('List.xlsx')
            # wb.close()

        wb = openpyxl.load_workbook('List.xlsx')
        LowAmper = wb['LowAmper']
        for item in newitems:
            if makeExcellFile.findCell('LowAmper', zoneName, item['itemId']):
                if item['group'] != 'Aircondition' or ((item['group'] == 'Aircondition') and (item['speedType'] == 'Slow')):
                    print(item)
                    print("as hole 2")
                    flag = False
                    for row in LowAmper.iter_rows():
                        for cell in row:
                            if cell.value == None:
                                LowAmper.cell(row=cell.row, column=1).value = (cell.row - 1)
                                LowAmper.cell(row=cell.row, column=2).value = zoneId
                                LowAmper.cell(row=cell.row, column=3).value = zoneName
                                LowAmper.cell(row=cell.row, column=4).value = item['itemId']
                                LowAmper.cell(row=cell.row, column=5).value = item['itemName']
                                LowAmper.cell(row=cell.row, column=6).value = item['group']
                                if item['group'] == 'Aircondition':
                                    LowAmper.cell(row=cell.row, column=7).value = item['speedType']
                                else:
                                    LowAmper.cell(row=cell.row, column=7).value = 'null'
                                flag = True
                                break
                        if flag:
                            break
                        else:
                            continue
            wb.save('List.xlsx')
            # wb.close()
