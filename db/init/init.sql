CREATE DATABASE IF NOT EXISTS test;

CREATE TABLE IF NOT EXISTS test.user (id int, name varchar(10));

REPLACE INTO test.user  VALUES (1, 'TAROU');


CREATE TABLE IF NOT EXISTS test.markdown (body text);