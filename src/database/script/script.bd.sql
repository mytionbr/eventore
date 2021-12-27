/*
CREATE DATABASE dbeventore WITH ENCODING 'UTF8';
*/

CREATE TABLE IF NOT EXISTS USER_TABLE (
	user_id serial PRIMARY KEY,
	name VARCHAR (255) NOT NULL,
	email VARCHAR (255) NOT NULL,
	password VARCHAR (255) NOT NULL,
	created_at TIMESTAMP NOT NULL,
	updated_at TIMESTAMP NOT NULL,
	CONSTRAINT unique_user_email UNIQUE (email)
);

CREATE TABLE IF NOT EXISTS EVENT_TABLE (
	event_id serial PRIMARY KEY,
	title VARCHAR (255) NOT NULL,
	location VARCHAR (255) NOT NULL,
	description TEXT,
	start_at TIMESTAMP NOT NULL,
	end_at TIMESTAMP NOT NULL,
	created_at TIMESTAMP NOT NULL,
	updated_at TIMESTAMP NOT NULL,
	user_id INT NOT NULL
);

CREATE TABLE IF NOT EXISTS ATTENDEE_TABLE (
	attendee_id serial PRIMARY KEY,
	user_id INT NOT NULL,
	event_id INT NOT NULL
);

CREATE TABLE IF NOT EXISTS INVITE_TABLE (
	invite serial PRIMARY KEY,
	host_id INT NOT NULL,
	guest_id INT NOT NULL,
	event_id INT NOT NULL,
	is_accepted BOOLEAN NOT NULL
);

ALTER TABLE EVENT_TABLE ADD CONSTRAINT event_user_fkey 
	FOREIGN KEY (user_id) REFERENCES USER_TABLE (user_id);

ALTER TABLE ATTENDEE_TABLE ADD CONSTRAINT attende_user_fkey 
	FOREIGN KEY (user_id) REFERENCES USER_TABLE (user_id);
	
ALTER TABLE ATTENDEE_TABLE ADD CONSTRAINT attende_event_fkey 
	FOREIGN KEY (event_id) REFERENCES EVENT_TABLE (event_id) ON UPDATE CASCADE ON DELETE CASCADE;
	
ALTER TABLE INVITE_TABLE ADD CONSTRAINT invite_host_fkey 
	FOREIGN KEY (host_id) REFERENCES USER_TABLE (user_id);

ALTER TABLE INVITE_TABLE ADD CONSTRAINT invite_guest_fkey 
	FOREIGN KEY (guest_id) REFERENCES USER_TABLE (user_id);

ALTER TABLE INVITE_TABLE ADD CONSTRAINT invite_event_fkey 
	FOREIGN KEY (event_id) REFERENCES EVENT_TABLE (event_id);
	

