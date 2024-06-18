-- DELETE FROM users;
-- DELETE FROM user_roles;

INSERT INTO users (id, username, first_name, last_name, email, password)
VALUES 
(1, 'hdthinh1012', 'Thinh', 'Huynh Duc', 'hdthinh01@gmail.com', '123456');

INSERT INTO user_roles (id, user_id, role)
VALUES 
(1, 1, 'admin');