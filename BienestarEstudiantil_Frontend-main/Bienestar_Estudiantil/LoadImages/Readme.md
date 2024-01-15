### Install dependencies
```bash
npm i dotenv express mysql2
npm i @babel/core @babel/node @babel/preset-env @babel/cli morgan nodemon -D
```
### Create Database
To use in MySQL, run the following command:
```bash
create database zodiaco char set utf8mb4;
use zodiaco;

create table signos(
	id smallint unsigned not null,
    nombre varchar(12) not null,
    periodo varchar(20) not null,
    image longblob null,
    mime varchar(25) null
)engine=InnoDB char set=utf8mb4;

alter table signos add constraint pk_signos primary key(id);
```
### Database connection
Create file .env into the root folder and add the following lines:
```bash
Server=your_server
Port=3306
DataBase=Zodiaco
User=your_user
Password=your_password
```
### Execute application
```bash
npm run dev
```
