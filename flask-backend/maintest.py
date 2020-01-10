import unittest
import main


class maintest(unittest.TestCase):
    def test_createnewrole(self):
        test_param = 'admin'
        result = main.createnewrole(test_param)
        self.assertEqual(result, 200)

    def test_delrole(self):
        test_param = 'admin'
        result = main.delrole(test_param)
        self.assertEqual(result, 200)

    def test_delZone(self):
        test_param = 'ASDasdAS'
        result = main.delZone(test_param)
        self.assertEqual(result, ValueError)

    def test_delZone(self):
        test_param = 8
        result = main.delZone(test_param)
        self.assertEqual(isinstance(result, 200))

unittest.main()
