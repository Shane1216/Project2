DROP DATABASE IF EXISTS exampledb;
CREATE DATABASE exampledb;

DROP DATABASE IF EXISTS testdb;
CREATE DATABASE testdb;


-- CREATE DATABASE sunrail;
CREATE TABLE trips (
  route_id INT
  service_id VARCHAR
  trip_id INT
  trip_headsign VARCHAR
  trip_short_name VARCHAR
  direction_id BOOL
  wheelchair_accessible BOOL
  bikes allowed BOOL
PRIMARY KEY (route_id) 
);

CREATE TABLE calendar_dates (
  service_id VARCHAR
  t_date DATE
  exception_type INT
);

CREATE TABLE fare_rules (
  fare_id VARCHAR
  origin_id INT
  destination_id INT
);

CREATE TABLE stops (
  stop_id INT
  stop_name VARCHAR
  stop_lat FLOAT
  stop_lon FLOAT
  zone_id INT
  stop_url VARCHAR
  wheelchair_boarding BOOL
);

CREATE TABLE stop_times (
  trip_id INT
  stop_id INT
  arrival_time TIME
  departure_time TIME
  stop_sequence INT
  pickup_type INT
  drop_off_type INT
);

CREATE TABLE calendar (
  service_id VARCHAR
  monday BOOL
  tuesday BOOL
  wednesday BOOL
  thursday BOOL
  friday BOOL
  saturday BOOL
  sunday BOOL
  start_date DATE
  end_date DATE
);

CREATE TABLE fare_attributes (
  fare_id VARCHAR
  price FLOAT
  currency_type VARCHAR
  payment_method INT
  transfers INT
);

CREATE TABLE routes (
  route_id INT
  agency_id VARCHAR
  route_short_name VARCHAR
  route_long_name VARCHAR
  route_type INT
);

