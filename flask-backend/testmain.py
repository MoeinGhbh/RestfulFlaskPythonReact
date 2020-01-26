import unittest
import main


class flaskmaintest(unittest.TestCase):

    # def testIndex(self):
    #     tester = main.get_token()
    #     response = tester.get('/login', content_type='html/text')
    #     self.assertEqual(response.status_code, 200)

    def testIndex(self):
        tester = main.get_token()
        response = tester.post('/api/login', data=dict(username='admin', password='12345'), follow_redirects=True)
        self.assertIn('Hello', response.data)

    # def test_createnewrole(self):
    #     test_param = 'admin'
    #     result = main.createnewrole(test_param)
    #     self.assertEqual(result, 200)
    #
    # def test_delrole(self):
    #     test_param = 'admin'
    #     result = main.delrole(test_param)
    #     self.assertEqual(result, 200)
    #
    # def test_delZone(self):
    #     test_param = 'ASDasdAS'
    #     result = main.delZone(test_param)
    #     self.assertEqual(result, ValueError)
    #
    # def test_delZone(self):
    #     test_param = 8
    #     result = main.delZone(test_param)
    #     self.assertEqual(isinstance(result, 200))


if __name__ == '__name__':
    unittest.main()
