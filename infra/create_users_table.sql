CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


/*
docker exec -i infra-database-1 psql -U postgres -d local_db -f /create_users_table.sql
*/


/*
INSERT INTO users (username, email, password_hash) VALUES
('Giro', 'giro@example.com', '1234'),
('jojo', 'jojo@example.com', '1234'),
('bjorn', 'bjorn@example.com', '1234'),
('beau', 'beau@example.com', '1234'),
('trash', 'trash@example.com', '1234');

SELECT * FROM users;
*/