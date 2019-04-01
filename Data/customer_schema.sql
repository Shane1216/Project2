USE sunrail;

CREATE TABLE passengers (
    p_id INT NOT NULL AUTO_INCREMENT,
    p_email VARCHAR(50) NOT NULL,
    p_password VARCHAR (50) NOT NULL,
    p_firstname VARCHAR(255) NOT NULL,
    p_lastname VARCHAR(255) NOT NULL,
    p_address1 VARCHAR(255) NOT NULL,
    p_address2 VARCHAR(255) ,
    p_city VARCHAR(255) NOT NULL,
    p_state VARCHAR(255) NOT NULL,
    p_zip VARCHAR(255) NOT NULL,
    p_createat DATETIME DEFAULT NOW(),
PRIMARY KEY(p_id)
);

CREATE TABLE payments (
    pay_id INT NOT NULL AUTO_INCREMENT,
    cust_id INT NOT NULL,
    pay_type INT NOT NULL,
    pay_amount FLOAT,
    pay_date DATETIME DEFAULT NOW(),
PRIMARY KEY(pay_id)
);

CREATE TABLE shoppingcart (
    cart_id INT NOT NULL AUTO_INCREMENT,
    item_id INT NOT NULL,
    price FLOAT,
    quantity INT,
PRIMARY KEY (cart_id)
);