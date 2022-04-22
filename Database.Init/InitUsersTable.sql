CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR NOT NULL,
    firstname VARCHAR NOT NULL,
    lastname VARCHAR,
    email VARCHAR,
    mobile VARCHAR,
    hashedpassword VARCHAR
);