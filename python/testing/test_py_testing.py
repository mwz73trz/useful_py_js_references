import unittest
from py_testing import *

class TestPythonExamples(unittest.TestCase):
    def test_sum_of_nums(self):
        self.assertEqual(sum_of_nums(4, 8), 12)

    def test_difference_of_nums(self):
        self.assertEqual(difference_of_nums(12, 8), 4)

    def test_product_of_nums(self):
        self.assertEqual(product_of_nums(10, 89), 890)

    def test_quotient_of_nums(self):
        self.assertEqual(quotient_of_nums(890, 10), 89)

    def test_upper_name(self):
        self.assertEqual(upper_name("michael"), "MICHAEL")

if __name__ == '__main__':
    unittest.main()