-- DROP DATABASE IF EXISTS sunrail;
-- CREATE DATABASE sunrail;

USE sunrail;

-- CREATE TABLE sunrail_stop (
--   trip_id INT DEFAULT 302,
--   stop_id INT,
--   zone_id INT,
--   direction_id BOOLEAN DEFAULT 1,
--   stop_name VARCHAR(255),
-- PRIMARY KEY(stop_id)
-- );

-- CREATE TABLE stop_times (
--   trip_id INT,
--   stop_id INT,
--   arrival_time TIME,
--   departure_time TIME,
--   stop_sequence INT,
--   pickup_type INT,
--   drop_off_type INT,
-- PRIMARY KEY(trip_id)
-- );

-- CREATE TABLE trips (
--   route_id INT NOT NULL,
--   service_id VARCHAR(255),
--   trip_id INT,
--   trip_headsign VARCHAR(255),
--   trip_short_name VARCHAR(255),
--   direction_id BOOLEAN,
--   wheelchair_accessible BOOLEAN,
--   bikes_allowed BOOLEAN,
-- PRIMARY KEY (route_id)
-- );
-- CREATE TABLE customer (
--     cust_id INT NOT NULL AUTO_INCREMENT,
--     cust_name VARCHAR(255) NOT NULL,
--     cust_address1 VARCHAR(255) NOT NULL,
--     cust_address2 VARCHAR(255) ,
--     cust_city VARCHAR(255) NOT NULL,
--     cust_state VARCHAR(255) NOT NULL,
--     cust_zip VARCHAR(255) NOT NULL,
-- PRIMARY KEY(cust_id)
-- );

-- CREATE TABLE payment (
--     pay_id INT NOT NULL AUTO_INCREMENT,
--     cust_id INT NOT NULL,
--     pay_type INT NOT NULL,
--     pay_amount FLOAT,
--     pay_date DATETIME DEFAULT NOW(),
-- PRIMARY KEY(pay_id)
-- );

-- CREATE TABLE shopping_cart (
--     cart_id INT NOT NULL AUTO_INCREMENT,
--     item_id INT NOT NULL,
--     price FLOAT,
--     quantity INT,
-- PRIMARY KEY cart_id
-- ):

-- THIS CREATES TABLES OUTSIDE OF THE SCOPE OF PROJECT AT THIS TIME!

-- CREATE TABLE stops (
--   stop_id INT,
--   stop_name VARCHAR(255),
--   stop_lat FLOAT,
--   stop_lon FLOAT,
--   zone_id INT,
--   stop_url VARCHAR(255),
--   wheelchair_boarding BOOLEAN,
-- PRIMARY KEY(stop_id)
-- );

-- CREATE TABLE calendar_dates (
--   service_id VARCHAR(255),
--   t_date DATE,
--   exception_type INT,
-- PRIMARY KEY (service_id)
-- );

-- CREATE TABLE fare_rules (
--   fare_id VARCHAR(255),
--   origin_id INT,
--   destination_id INT,
-- PRIMARY KEY (fare_id)
-- );

-- CREATE TABLE calendar (
--   service_id VARCHAR(255),
--   monday BOOLEAN,
--   tuesday BOOLEAN,
--   wednesday BOOLEAN,
--   thursday BOOLEAN,
--   friday BOOLEAN,
--   saturday BOOLEAN,
--   sunday BOOLEAN,
--   start_date DATE,
--   end_date DATE,
-- PRIMARY KEY(service_id)
-- );

-- CREATE TABLE fare_attributes (
--   fare_id VARCHAR(255) NOT NULL,
--   price FLOAT,
--   currency_type VARCHAR(255),
--   payment_method INT,
--   transfers INT,
-- PRIMARY KEY(fare_id)
-- );

-- CREATE TABLE routes (
--   route_id INT NOT NULL,
--   agency_id VARCHAR(255),
--   route_short_name VARCHAR(255),
--   route_long_name VARCHAR(255),
--   route_type INT,
-- PRIMARY KEY (route_id)
-- );