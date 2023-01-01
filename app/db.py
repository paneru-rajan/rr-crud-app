import pymysql

connection = pymysql.connect(host='0.0.0.0',
                             user='root',
                             password='root',
                             port=3310,
                             database='third_sem',
                             cursorclass=pymysql.cursors.DictCursor)
cursor = connection.cursor()


def add_student(name: str, email: str):
    sql = 'insert into `student` (`name`, `email`) values (%s, %s)'
    cursor.execute(sql, (name, email))
    data = {'id': connection.insert_id(), 'name': name, 'email': email}
    connection.commit()
    return data or []


def get_all_student():
    sql = "SELECT * FROM student order by id asc"
    cursor.execute(sql)
    result = cursor.fetchall()
    return result


def get_one_student(student_id: int):
    sql = "SELECT * FROM student where id=%s"
    cursor.execute(sql, (student_id,))
    result = cursor.fetchone()
    return result


def update_name(student_id: int, name: str):
    sql = "UPDATE student set name=%s where id = %s"
    cursor.execute(sql, (name, student_id))
    connection.commit()


def update_email(student_id: int, email: str):
    sql = "UPDATE student set email=%s where id = %s"
    cursor.execute(sql, (email, student_id))
    connection.commit()


def delete_student(student_id: int):
    sql = "DELETE FROM student where id = %s"
    cursor.execute(sql, (student_id,))
    connection.commit()
