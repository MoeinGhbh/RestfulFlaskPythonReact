import openpyxl
from xlsxwriter.utility import xl_rowcol_to_cell
from xlrd import open_workbook


class makeExcellFile():

    @staticmethod
    def findCellDelete(zoneId, itemId):
        flag = False
        book = open_workbook('List.xlsx')
        print(book.sheets())
        for sheet in book.sheets():
            print(sheet)
            print(sheet.name)
            print(range(sheet.nrows))
            for rowidx in range(sheet.nrows):
                print(rowidx)
                row = sheet.row(rowidx)
                for colidx, cell in enumerate(row):
                    print(row)
                    # HighAmper.cell(row=10, column=10).value = 'None'
                    # LowAmper.cell(row=10, column=10).value = 'None'
                    if sheet.cell(rowidx, 1).value == zoneId and sheet.cell(rowidx, 3).value == itemId:
                        print('ssssssssss')
                        for i in range(6):
                            print(rowidx)
                            print('sdfadfas')
                            sheet.cell(row=rowidx, column=(i + 1)).value = None
                            sheet.cell(row=rowidx, column=(i + 1)).value = 'None'
                            sheet.cell(row=10, column=10).value = 'None'
                        book.save('List.xlsx')
                        flag = True
                        break
            if flag:
                break
            else:
                continue

    @staticmethod
    def findCell(mySheet, zoneName, itemId):
        book = open_workbook('List.xlsx')
        for sheet in book.sheets():
            if sheet.name == mySheet:
                for rowidx in range(sheet.nrows):
                    zoneFlag = False
                    itemFlag = False
                    row = sheet.row(rowidx)
                    for colidx, cell in enumerate(row):
                        if sheet.cell(rowidx, 2).value == zoneName and sheet.cell(rowidx, 3).value == itemId:
                            return False
        return True

    @staticmethod
    def makeFile(zoneId, zoneName, newitems):
        wb = openpyxl.load_workbook('List.xlsx')
        HighAmper = wb['HighAmper']
        for item in newitems:
            if makeExcellFile.findCell('HighAmper', zoneName, item['itemId']):
                if (item['group'] == 'Aircondition') and (
                        (item['speedType'] == 'Fast') or (item['speedType'] == 'Normal')):
                    flag = False
                    for row in HighAmper.iter_rows():
                        for cell in row:
                            if cell.value == None:
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
                if item['group'] != 'Aircondition' or (
                        (item['group'] == 'Aircondition') and (item['speedType'] == 'Slow')):
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
