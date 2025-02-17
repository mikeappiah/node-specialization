CREATE TABLE
    products (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        category ENUM (
            'plumbing',
            'electricals',
            'agrochemicals',
            'home essentials',
            'building materials'
        ),
        price FLOAT NOT NULL,
        quantity INT NOT NULL
    );