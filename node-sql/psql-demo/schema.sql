CREATE TYPE category_type AS ENUM (
    'plumbing',
    'electricals',
    'agrochemicals',
    'home essentials',
    'building materials'
);

CREATE TABLE
    products (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        category category_type,
        price FLOAT NOT NULL,
        quantity INT NOT NULL
    );