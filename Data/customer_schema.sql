USE sunrail;

CREATE TABLE customer (
    cust_id INT NOT NULL AUTO_INCREMENT,
    cust_name VARCHAR(255) NOT NULL,
    cust_address1 VARCHAR(255) NOT NULL,
    cust_address2 VARCHAR(255) ,
    cust_city VARCHAR(255) NOT NULL,
    cust_state VARCHAR(255) NOT NULL,
    cust_zip VARCHAR(255) NOT NULL,
PRIMARY KEY(cust_id)
);

CREATE TABLE payment (
    pay_id INT NOT NULL AUTO_INCREMENT,
    cust_id INT NOT NULL,
    pay_type INT NOT NULL,
    pay_amount FLOAT,
    pay_date DATETIME DEFAULT NOW(),
PRIMARY KEY(pay_id)
);

CREATE TABLE shopping_cart (
    cart_id INT NOT NULL AUTO_INCREMENT,
    item_id INT NOT NULL,
    price FLOAT,
    quantity INT,
PRIMARY KEY cart_id
):