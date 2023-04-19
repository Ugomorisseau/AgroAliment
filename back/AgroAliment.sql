
CREATE TABLE site (
id SERIAL PRIMARY KEY,
ville VARCHAR(100) NOT NULL
);

CREATE TABLE service (
id SERIAL PRIMARY KEY,
nom VARCHAR(255) NOT NULL
);

CREATE TABLE user (
id SERIAL PRIMARY KEY,
nom VARCHAR(255) NOT NULL,
prenom VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL,
phoneFix VARCHAR (255) NOT NULL,
phone VARCHAR (255) NOT NULL,
isAdmin BOOLEAN NOT NULL
);

ALTER TABLE service ADD COLUMN site_id INTEGER REFERENCES site(id);
ALTER TABLE user ADD COLUMN service_id INTEGER REFERENCES service(id);

