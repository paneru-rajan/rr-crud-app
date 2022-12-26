from flask import Flask, request
from flask_cors import cross_origin, CORS

import db

app = Flask(__name__)
cors = CORS(app)


@app.get('/student')
@cross_origin()
def read_student():
    return db.get_all_student()


@app.get('/student/<int:student_id>')
@cross_origin()
def read_one_student(student_id: int):
    return db.get_one_student(student_id)


@app.post('/student')
@cross_origin()
def create_student():
    payload = request.get_json()
    return db.add_student(**payload)


@app.put('/student/<int:student_id>')
@cross_origin()
def update_student(student_id):
    payload = request.get_json()
    name, email = payload.get('name'), payload.get('email')
    if name:
        db.update_name(student_id, name)

    if email:
        db.update_email(student_id, email)
    return read_one_student(student_id)


@app.delete('/student/<int:student_id>')
@cross_origin()
def delete_student(student_id):
    payload = read_one_student(student_id)
    db.delete_student(student_id)
    return payload
