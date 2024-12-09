CREATE TABLE
    products (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        category ENUM (
            'Plumbing',
            'Electricals',
            'Agrochemicals',
            'Home Essentials',
            'Building Materials'
        ),
        price DECIMAL(10, 2) NOT NULL,
        quantity INT NOT NULL
    );