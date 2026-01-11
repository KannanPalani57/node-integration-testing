CREATE TABLE IF NOT EXISTS users(
   id uuid PRIMARY KEY,
   username TEXT NOT NULL UNIQUE,
   email TEXT NOT NULL UNIQUE,
   password TEXT NOT NULL
);