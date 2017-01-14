-- drop DATABASE chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id int auto_increment PRIMARY KEY, text varchar(140), user_id int, room_id int
);

/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  id int auto_increment PRIMARY KEY, username varchar(10)
);

CREATE TABLE rooms (
  id int auto_increment PRIMARY KEY, room varchar(10)
);

ALTER TABLE messages ADD FOREIGN KEY (user_id) references users (id);
ALTER TABLE messages ADD FOREIGN KEY (room_id) references rooms (id);