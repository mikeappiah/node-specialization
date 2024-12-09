CREATE TYPE category_type AS ENUM (
    'Plumbing',
    'Electricals',
    'Agrochemicals',
    'Home Essentials',
    'Building Materials'
);

CREATE TABLE
    products (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        category category_type,
        price DECIMAL(10, 2) NOT NULL,
        quantity INT NOT NULL
    );