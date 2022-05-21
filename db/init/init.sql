-- 疎通確認用
-- CREATE DATABASE IF NOT EXISTS test;
-- CREATE TABLE IF NOT EXISTS test.user (id int, name varchar(10));
-- REPLACE INTO test.user  VALUES (1, 'TAROU');

-- Markdownアプリ初期確認用
-- CREATE TABLE IF NOT EXISTS test.markdown (body text);

-- Markdown複数管理用 (Markdownアプリ)

CREATE TABLE IF NOT EXISTS test.markdown (url varchar(500), title varchar(250), body text);

REPLACE INTO test.markdown (url, title, body) VALUES ('test/test', 'test', '# TEST');
REPLACE INTO test.markdown (url, title, body) VALUES ('test/test2', 'test2', '# TEST2');
