import unittest
from userModel import Role


class roleTest(unittest.TestCase):
    def test_something(self):

        addRole = Role()
        response = Role.createnewrole('ABddddddddReza')
        self.assertEqual(response, 200)


if __name__ == '__main__':
    unittest.main()
