import os

from flask import Flask, request
from flask_cors import CORS

import pymysql.cursors
import json

RESULT_CODE_SUCESS = 'sucess'

app = Flask(__name__)
CORS(app)


def db_connection():
    conn = pymysql.connect(
        host='db',
        port=3306,
        user=os.environ.get('MYSQL_USER'),
        password=os.environ.get('MYSQL_PASSWORD'),
        db=os.environ.get('MYSQL_DATABASE'),
        cursorclass=pymysql.cursors.DictCursor
    )

    return conn


@app.route("/", methods=["GET"])
def test():
    return "Hello World"


RESULT_CODE_SUCESS


@app.route('/mariadb')
def mariadb():
    conn = db_connection()
    with conn.cursor() as cur:
        sql = "SELECT * FROM user"
        cur.execute(sql)
        results = cur.fetchall()

    return results[0]


@app.route('/markdown', methods=["POST"])
def post_markdown():
    url = request.json["url"]
    title = request.json["title"]
    body = request.json["body"]

    conn = db_connection()
    with conn.cursor() as cur:
        cur.execute(
            f"INSERT INTO markdown (url, title, body) values('{url}','{title}','{body}')")
        conn.commit()

    return RESULT_CODE_SUCESS


@app.route('/markdown<path:path>', methods=["PUT"])
def put_markdown(path):
    title = request.json["title"]
    body = request.json["body"]

    conn = db_connection()
    with conn.cursor() as cur:
        cur.execute(
            f"UPDATE markdown SET title = '{title}', body = '{body}' WHERE url = '{path}' ")
        conn.commit()

    return RESULT_CODE_SUCESS


@app.route('/markdown', methods=["GET"])
def get_markdown():
    conn = db_connection()
    with conn.cursor() as cur:
        cur.execute(f"SELECT * FROM test.markdown")
        results = cur.fetchall()

    return json.dumps(results, indent=2)


@app.route('/markdown/<path:path>', methods=["GET"])
def get_markdown_url(path):
    conn = db_connection()
    with conn.cursor() as cur:
        cur.execute(f"SELECT * FROM markdown WHERE url = '{path}'")
        results = cur.fetchall()

    if not results:
        return json.dumps({}, indent=2)
    return json.dumps(results[0], indent=2)
