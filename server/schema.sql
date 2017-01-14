drop DATABASE chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id int auto_increment PRIMARY KEY, message text, username text, roomname text
  -- id int auto_increment PRIMARY KEY, message varchar(140), user_id int, room_id int
);

/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  id int auto_increment PRIMARY KEY, username text
);

CREATE TABLE rooms (
  id int auto_increment PRIMARY KEY, room text
);

-- ALTER TABLE messages ADD FOREIGN KEY (user_id) references users (id);
-- ALTER TABLE messages ADD FOREIGN KEY (room_id) references rooms (id);