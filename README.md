# fullstack-Project: 
A Car Stock management application for House of Hatchbacks company.

presentation: https://docs.google.com/presentation/d/1bptnSd6grv-NkFieZMUq1NDeguCPzuf5VGL3lTtJAeE/edit#slide=id.g119a36680ec_0_53
Jira Board: https://jtlana.atlassian.net/jira/software/projects/FSP/boards/3/roadmap

# Introduction:

The brief was to create an application which used CRUD functionality by using the core modules covered in training:

Project management - A Kanban Jira board with Epics and user stories. Code is integrated into a version Control system.
Databases - A relational database to store persistant data from the front end.
Java SE and Spring Boot - back end application created in OOP language which follows the criteria created in the Jira board.
Testing - Integration testing for the Spring boot backend and coverage at 94.1%. Front end testing carried out by acting as application user and testing all CRUD functionalities.
Front-End development - A front end created using HTML, JavaScript and CSS which connects to the Spring boot backend.


# Planning:

A Jira Kanban board modelled as a Scrum was used to manage the creation and timeline for the application. It included 3 Epics:
- Epic for Back-End creation
- Epic for Front-End creation
- Epic for Testing and documentation

Once the Epics and user stories were creating I then split the tasks into Sprints.

I had issues with connecting my Front-End to my Back-end as when running a live server it did not allow me to connect to the local host where the API requests were stored and this was resolved by moving the Front-End files to my Eclipse IDE static folder. 

Version Control System:

I ensured to create a main, dev and feature branches. The feature brances were created when adding new functionality and then merged into dev.

# Databases:
The following databases were using in this project:
-H2 database: this was used for testing the Back-end
-MySQL database: this was used for storing persistent data from the application

The H2 database was created using the car-schema.sql file and the car-data.sql to automatically populate the fields to be able to carry out testing.

# Back-End and Testing:
Created using Java in a Spring Boot Framework with the following created:
-Car Entity: stores the variables that make a car object
-Car Controller
-Car Service
-car Interface

The CRUD functionality was stored in these classes which used mappings to allow external services to connect to the API.

Testing:

For testing I used:

-JUnit = For integration testing which allowed me to test if the HTTP endpoints were working with my CRUD based HTTP requests.

-MockMVC = used to act as an external service like Postman by fulfilling the mock HTTP requests.

-Mockito = For unit testing, this helps create mock data so we can test the responses that we are expecting to receive.

-ObjectMapper = this converts the received response into JSON which allows us to be able to use the API request JSON format.

Over testing coverage came up to 94.1%

# Front-End and Testing:
The front end is the user interface which was built using HTML, JavaScript and CSS.

HTML and CSS was used to create the design of the user interface while Javascript was used to create the functionality of the interface which included allowing the interface to interact with the backend and how the interface interacts with the user.
