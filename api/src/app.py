import os

from flask import Flask, request
from flask_cors import CORS

import pymysql.cursors
import json 

RESULT_CODE_SUCESS = 'sucess'

app = Flask(__name__)
CORS(app) 

@app.route("/", methods=["GET"])
def test():  
    return "Hello World"

RESULT_CODE_SUCESS
@app.route('/mariadb')
def mariadb():
    conn = pymysql.connect(
        host='db',
        port=3306,
        user=os.environ.get('MYSQL_USER'),
        password=os.environ.get('MYSQL_PASSWORD'),
        db=os.environ.get('MYSQL_DATABASE'),
        cursorclass=pymysql.cursors.DictCursor
    )

    with conn.cursor() as cur:
        sql = "SELECT * FROM user"
        cur.execute(sql)
        results = cur.fetchall()

    return results[0]

@app.route('/markdown', methods=["POST"])
def post_markdown():
    conn = pymysql.connect(
        host='db',
        port=3306,
        user=os.environ.get('MYSQL_USER'),
        password=os.environ.get('MYSQL_PASSWORD'),
        db=os.environ.get('MYSQL_DATABASE'),
        cursorclass=pymysql.cursors.DictCursor
    )

    cur = conn.cursor() 

    markdown = request.json["body"] 
    cur.execute(f"INSERT INTO markdown(body) values('{markdown}')")
    conn.commit()

    return RESULT_CODE_SUCESS

@app.route('/markdown', methods=["GET"])
def get_markdown():
    conn = pymysql.connect(
        host='db',
        port=3306,
        user=os.environ.get('MYSQL_USER'),
        password=os.environ.get('MYSQL_PASSWORD'),
        db=os.environ.get('MYSQL_DATABASE'),
        cursorclass=pymysql.cursors.DictCursor
    )

    with conn.cursor() as cur:
        sql = "SELECT * FROM test.markdown"
        cur.execute(sql)
        results = cur.fetchall()

    return json.dumps(results, indent=2)

@app.route('/markdown/<path:path>', methods=["GET"])
def get_markdown_url(path):
    conn = pymysql.connect(
        host='db',
        port=3306,
        user=os.environ.get('MYSQL_USER'),
        password=os.environ.get('MYSQL_PASSWORD'),
        db=os.environ.get('MYSQL_DATABASE'),
        cursorclass=pymysql.cursors.DictCursor
    )

    with conn.cursor() as cur:
        sql = "SELECT * FROM test.markdown WHERE url = '" + path + "'"
        cur.execute(sql)
        results = cur.fetchall()

    return json.dumps(results[0], indent=2)

