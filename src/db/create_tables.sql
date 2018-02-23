CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(100),
    password VARCHAR(100)
)

CREATE TABLE properties (
    property_id SERIAL PRIMARY KEY,
    property_name VARCHAR (100),
    description VARCHAR (500),
    address VARCHAR (100),
    city VARCHAR (100),
    state VARCHAR (2),
    zip VARCHAR (5),
    url TEXT,
    mg_total NUMERIC,
    mg_monthly NUMERIC,
    desired_rent NUMERIC,
    user_id INTEGER REFERENCES users(user_id)
)