# Schema Information


## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique


## books
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
title           | string    | not null, indexed
author          | string    | not null, indexed
description     | text      |
cover image URL | string    |
average rating  | float     |
page length     | integer   |
published date  | date      |
publisher       | string    |
ISBN            | string    |
Language        | string    |
URL to buy      | string    |


## bookshelves
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
owner_id    | integer   | not null, foreign key (references users), indexed
book_id     | integer   | not null, foreign key (references books), indexed
name        | string    | not null



## read status
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user id         | integer   | not null, indexed, foreign key referencing users table, unique in the scope of a book id
book id         | integer   | not null, indexed, foreign key referencing users table
status          | text      | not null, inclusion in: ["to read", "currently-reading", "read"]
date read       | date      |


## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
book_id     | integer   | not null, foreign key (references books), indexed
title       | string    | not null
body        | string    | not null
rating      | integer   | not null
