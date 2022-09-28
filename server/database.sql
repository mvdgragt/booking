CREATE TABLE appointments (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255), 
    startDate VARCHAR(255),
    endDate VARCHAR(255),
    location VARCHAR(255)
)

INSERT INTO appointments (
    title,
    startDate,
    endDate,
    id,
    location
)
VALUES
(
      'Website Re-Design Plan v2',
      'new Date(2022, 8, 26, 8, 35)',
      'new Date(2022, 8, 26, 11, 30)',
      '0',
      'Rum 4'
    ), (
      'Daily Standup',
      'new Date(2022, 8, 19, 12, 11)',
      'new Date(2022, 8, 19, 13, 0)',
      '1',
      'Rum 1'
    ), (
      'New Potention Customer meeting',
      'new Date(2022, 8, 19, 14, 30)',
      'new Date(2022, 8, 19, 15, 35)',
      '2',
      'Rum 2'
    ), (
      'Daily Standup',
      'new Date(2022, 8, 20, 10, 0)',
      'new Date(2022, 8, 20, 11, 0)',
      '3',
      'Rum 2'
    ), (
      'Budget proposal Project IKEA',
      'new Date(2022, 8, 20, 12, 0)',
      'new Date(2022, 8, 20, 13, 35)',
      '4',
      'Rum 2'
    ), (
      'Team Building Activity',
      'new Date(2022, 8, 20, 14, 30)',
      'new Date(2022, 8, 20, 15, 45)',
      '5',
      'Rum 2'
    ), (
      'Daily Standup',
      'new Date(2022, 8, 21, 8, 45)',
      'new Date(2022, 8, 21, 11, 15)',
      '6',
      'Rum 1'
    ), (
      'Approve New Online Marketing Strategy',
      'new Date(2022, 8, 21, 12, 0)',
      'new Date(2022, 8, 21, 14, 0)',
      '7',
      'Rum 3'
    ), (
      'Upgrade Personal Computers',
      'new Date(2022, 8, 21, 15, 15)',
      'new Date(2022, 8, 21, 16, 30)',
      '8',
      'Rum 3'
    ), (
      'Daily Standup',
      'new Date(2022, 8, 22, 8, 0)',
      'new Date(2022, 8, 22, 9, 0)',
      '9',
      'Rum 3'
    ), (
      'Prepare 2015 Marketing Plan',
      'new Date(2022, 8, 22, 11, 0)',
      'new Date(2022, 8, 22, 13, 30)',
      '10',
      'Rum 1'
    ), (
      'Brochure Design Review',
      'new Date(2022, 8, 22, 14, 0)',
      'new Date(2022, 8, 22, 15, 30)',
      '11',
      'Rum 2'
    ), (
      'Daily Standup',
      'new Date(2022, 8, 23, 10, 0)',
      'new Date(2022, 8, 23, 11, 30)',
      '12',
      'Rum 2'
    ), (
      'Upgrade Server Hardware',
      'new Date(2022, 8, 23, 14, 30)',
      'new Date(2022, 8, 23, 16, 0)',
      '13',
      'Rum 3'
    ), (
      'Submit New Website Design',
      'new Date(2022, 8, 23, 16, 30)',
      'new Date(2022, 8, 23, 18, 0)',
      '14',
      'Rum 3'
    ), (
      'Launch New Website',
      'new Date(2022, 8, 23, 12, 20)',
      'new Date(2022, 8, 23, 14, 0)',
      '15',
      'Rum 2'
    ), (
      'Website Re-Design Plan',
      'new Date(2018, 6, 2, 8, 30)',
      'new Date(2018, 6, 2, 15, 30)',
      '16',
      'Rum 1'
    ), (
      'Book Flights to San Fran for Sales Trip',
      'new Date(2018, 6, 2, 12, 0)',
      'new Date(2018, 6, 2, 13, 0)',
      '17',
      'Rum 3'
    ), (
      'Install New Router in Dev Room',
      'new Date(2018, 6, 2, 14, 30)',
      'new Date(2018, 6, 2, 17, 30)',
      '18',
      'Rum 2'
    ), (
      'Approve Personal Computer Upgrade Plan',
      'new Date(2018, 6, 2, 16, 0)',
      'new Date(2018, 6, 3, 8, 0)',
      '19',
      'Rum 2'
    ), (
      'Final Budget Review',
      'new Date(2018, 6, 3, 10, 15)',
      'new Date(2018, 6, 3, 13, 35)',
      '20',
      'Rum 1'
    ), (
      'New Brochures',
      'new Date(2018, 6, 3, 14, 30)',
      'new Date(2018, 6, 3, 15, 45)',
      '21',
      'Rum 3'
    ), (
      'Install New Database',
      'new Date(2018, 6, 3, 15, 45)',
      'new Date(2018, 6, 4, 12, 15)',
      '22',
      'Rum 3'
    ), (
      'Approve New Online Marketing Strategy',
      'new Date(2018, 6, 4, 12, 35)',
      'new Date(2018, 6, 4, 14, 15)',
      '23',
      'Rum 3'
    ), (
      'Upgrade Personal Computers',
      'new Date(2018, 6, 4, 15, 15)',
      'new Date(2018, 6, 4, 20, 30)',
      '24',
      'Rum 2'
    ), (
      'Customer Workshop',
      'new Date(2018, 6, 5, 6, 0)',
      'new Date(2018, 6, 5, 14, 20)',
      '25',
      'Rum 1'
    ), (
      'Customer Workshop',
      'new Date(2018, 6, 5, 14, 35)',
      'new Date(2018, 6, 5, 16, 20)',
      '26',
      'Rum 1'
    ), (
      'Customer Workshop 2',
      'new Date(2018, 6, 5, 10, 0)',
      'new Date(2018, 6, 5, 11, 20)',
      '27',
      'Rum 2'
    ), (
      'Prepare 2015 Marketing Plan',
      'new Date(2018, 6, 5, 20, 0)',
      'new Date(2018, 6, 6, 13, 30)',
      '28',
      'Rum 3'
    ), (
      'Brochure Design Review',
      'new Date(2018, 6, 6, 14, 10)',
      'new Date(2018, 6, 6, 15, 30)',
      '29',
      'Rum 3'
    ), (
      'Create Icons for Website',
      'new Date(2018, 6, 6, 10, 0)',
      'new Date(2018, 6, 7, 14, 30)',
      '30',
      'Rum 1'
    ), (
      'Upgrade Server Hardware',
      'new Date(2018, 6, 3, 8, 30)',
      'new Date(2018, 6, 3, 12, 25)',
      '31',
      'Rum 2'
    ), (
      'Submit New Website Design',
      'new Date(2018, 6, 3, 12, 30)',
      'new Date(2018, 6, 3, 18, 0)',
      '32',
      'Rum 2'
    ), (
      'Launch New Website',
      'new Date(2018, 6, 3, 12, 20)',
      'new Date(2018, 6, 3, 14, 10)',
      '33',
      'Rum 2'
    ), (
      'Book Flights to San Fran for Sales Trip',
      'new Date(2022, 8, 20, 0, 0)',
      'new Date(2022, 8, 21, 0, 0)',
      '34',
      'Rum 1'
    ), (
      'Customer Workshop',
      'new Date(2022, 8, 23, 10, 0)',
      'new Date(2018, 5, 30, 14, 30)',
      '35',
      'Rum 1'
    ), (
      'Google AdWords Strategy',
      'new Date(2018, 6, 3, 0, 0)',
      'new Date(2018, 6, 4, 10, 30)',
      '36',
      'Rum 3'
    ), (
      'Rollout of New Website and Marketing Brochures',
      'new Date(2018, 6, 5, 10, 0)',
      'new Date(2018, 6, 8, 14, 30)',
      '37',
      'Rum 3'
    ), (
      'Update NDA Agreement',
      'new Date(2018, 6, 1, 10, 0)',
      'new Date(2018, 6, 3, 14, 30)',
      '38',
      'Rum 2'
    ), (
      'Customer Workshop',
      'new Date(2018, 6, 1)',
      'new Date(2018, 6, 2)',
      '39',
      'Rum 1'
    )