# Connect to the database
import pymysql

connection = pymysql.connect(host='0.0.0.0',
                             user='root',
                             password='root',
                             database='first-sem',
                             cursorclass=pymysql.cursors.DictCursor)
with connection:
    with connection.cursor() as cursor:
        # Read a single record
        sql = "SELECT * FROM student"
        cursor.execute(sql)
        result = cursor.fetchone()
        print(result)
