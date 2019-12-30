import serial

# port = serial.Serial(
#     port='/dev/ttyAMA0',
#     baudrate=9600,
#     parity=serial.PARITY_NONE,
#     stopbits=serial.STOPBITS_ONE,
#     bytesize=serial.EIGHTBITS,
#     timeout=1)


# class UART(port):
class UART():
    def sendtoBoard(zoneId, group, itemId, status):
        print(str(zoneId) + group + str(itemId) + str(status))

        # status  1   on
        # status  0   off

        groupID = 0
        if group == 'Lamp':
            groupID = 1
        if group == 'Socket':
            groupID = 2
        if group == 'Curtain':
            groupID = 3
        if group == 'Aircondition':
            groupID = 4

        # print(bin(zoneId))
        # port.write(b'hello world\n')
