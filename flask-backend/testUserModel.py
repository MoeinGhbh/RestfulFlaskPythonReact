import unittest
from userModel import Role
from userModel import User
import random, string


def make_suite():
    class roleTest(unittest.TestCase):
        strName = ''

        def randomString(stringLength=10):
            """Generate a random string of fixed length """
            letters = string.ascii_lowercase
            return ''.join(random.choice(letters) for i in range(stringLength))

        def test_createrole(self):
            strName = roleTest.randomString()
            response = Role.createnewrole(strName)
            self.assertEqual(response, 200)

        def test_delrole(self):
            response = Role.delrole(roleTest.strName)
            self.assertEqual(response, 200)

    class userTest(unittest.TestCase):
        username = ''

        def randomString(stringLength=10):
            """Generate a random string of fixed length """
            letters = string.ascii_lowercase
            return ''.join(random.choice(letters) for i in range(stringLength))

        def testMatchUsernamePassword(self):
            response = User.username_password_match('admin', '12345')
            self.assertEqual(response, True)

        def test_createUser(self):
            userTest.username = userTest.randomString()
            response = User.createUser(userTest.username, userTest.randomString(), 1)
            self.assertEqual(response, 200)

        def test_getRolePerUser(self):
            response = User.getRole(userTest.username)
            self.assertEqual(response, 'admin')

        def test_delUser(self):
            response = User.deleteUser(userTest.username)
            self.assertEqual(response, 200)

    suite = unittest.TestSuite()
    suite.addTest(roleTest('test_createrole'))
    suite.addTest(roleTest('test_delrole'))
    suite.addTest(userTest('testMatchUsernamePassword'))
    suite.addTest(userTest('test_createUser'))
    suite.addTest(userTest('test_getRolePerUser'))
    suite.addTest(userTest('test_delUser'))
    return suite


suite = make_suite()


class T(unittest.TestCase):
    counter = 0

    def __call__(self, *args, **kwargs):
        res = suite._tests[T.counter](*args, **kwargs)
        T.counter += 1
        return res


for t in suite._tests:
    name = "{}${}".format(t._testMethodName, t.__class__.__name__)
    setattr(T, name, t)
