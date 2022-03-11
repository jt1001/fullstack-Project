create database IF NOT EXISTS carproject;
use carproject;
create table IF NOT EXISTS car (id integer AUTO_INCREMENT, car_make varchar(255) not null, model_name varchar(255) not null, make_year integer not null, engine_size double not null, price double not null, primary key (id));
