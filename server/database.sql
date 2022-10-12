CREATE TABLE appointmentslowercase (
    id SERIAL PRIMARY KEY,
    startdate TIMESTAMPTZ,
    enddate TIMESTAMPTZ,
    title VARCHAR(255),
    locations VARCHAR(255)
)

CREATE TABLE locations (
    id SERIAL PRIMARY KEY,
    locations VARCHAR(255)
)

INSERT INTO locations (
    id,
    "locations"
)

VALUES (
    '1',
    'Room 1'
),(
    '2',
    'Room 2'
),(
    '3',
    'Room 3'
)

INSERT INTO appointmentslowercase (
    id,
    "startdate",
    "enddate",
    title,
    locations
)
VALUES
(     
      '1',
      '2022-10-12T10:00',
      '2022-10-12T10:15',
      'Daily Standup',
      'Room 1'    
      ),
    (     
      '2',
      '2022-10-13T13:45',
      '2022-10-13T15:45',
      'New Potential Customer Meeting',
      'Room 2'
    )

CREATE VIEW appointments AS SELECT id, startdate "startDate", enddate "endDate", title, locations FROM appointmentslowercase

