# Unit 14 Sequelize Homework: Reverse Engineering Code

Reverse engineer the starter code provided and create a tutorial for the code.

In the `Develop` folder, there is starter code for a project. Begin inspecting the code to get an understanding of each file's responsibility. Then, README markdown file, write a tutorial explaining *every* file and its purpose in as fine as detail as possible. If one file is dependant on other files, be sure to let the user know.


## Config


### Middleware

#### isAuthenticated.js

__Purpose__

This file restricts routes tht user is not allowed to visit if they are not logged in -i.e. the logged in page.

__Dependencies?__


### config.json

__Purpose__

Connection configuration to connect to the server and the mysql database.

__Dependencies?__

Not necessarily a dependency but it needs the database name, username and password to be able to connect.

### passport.js

__Purpose__

Contains a javascript logic that tells passport that we want to log in with specifically an email address and a password. If something isn't entered, it will ask for it again. 

__Dependencies?__

passport.js is dependant on passport, passport-local and models to work. 

## Models

This is the part of the code connects to both the controllers and the database

### index.js

__Purpose__

Connects to the database and imports the users log in data

__Dependencies?__

Config.json as this uses the database and needs config.json to connect. This piece also uses sequelize so it's dependant on the user typing in "npm install mysql2"

### user.js

__Purpose__

This file has the duel purpose of securing the database, if compromised and defining what is stored in the database by describing the variables.

__Dependencies?__

For security, bcrypt is needed (not an npm install).

## Public

This is the file for the "public" -the front end of the fullstack

### js

This file holds the javascript part of the front end of the project

### login.js

__Purpose__

Takes the input from the users log in, when they hit submit and then takes them to the member page if they were successful.

__Dependencies?__

members.js and members.html- because when you successfully log in, you replace the window location with members, so you don't only need the view (html) you also need the ability to manipulate the age

### member.js


__Purpose__

Does a GET request to see which is logged in and updates the current member name/email 

__Dependencies?__

### signup.js

__Purpose__

__Dependencies?__

### stylesheets

### login.html

__Purpose__

__Dependencies?__

### members.html

__Purpose__

__Dependencies?__

### signup.html

__Purpose__

__Dependencies?__

## Routes

This file contains all the routes part of our code, which interacts with the controller to help display the view. 

### api-routes.js


__Purpose__

Contains routes for logging in and out and getting the user specific data to be displayed client side. 

__Dependencies?__

This file is both dependent on the models file (communicating with the database) and the config/passport file. 

### html-routes.js

__Purpose__

Checks whether or not the user is signed in and whether the user has an account. Then, based on the checks it sends them to the correct html page.

__Dependencies?__

In order to check if the user has an account it needs to use the isAuthenticated.js file and in order to send the user to a different site (based off of authenticated or not); it needs login.html, members.html and signup.html.

## package.json

__Purpose__

Contains all the package info (all the npm installs along with the basics). It also contains version info.

__Dependencies?__

Mostly just the user (or installation person) and all the npm installs -although much of the code is dependant on these installs

## server.js 

__Purpose__

server.js requires all the packages, creates express and the middleware, creates routs, syncs databases/logs, sets up the PORT and logs messages in the terminal if successfully connected to server.

__Dependencies?__

* express
* express-sessions
* config/passport
* models (folder)
* public (folder)
* html-routes.js
* api-routes.js
* PORT


At the end of the tutorial, add instructions for how you could now add changes to this project.

Following the [common templates for user stories](https://en.wikipedia.org/wiki/User_story#Common_templates), we can frame this challenge as follows:

```
AS A developer

I WANT a walk-through of the codebase

SO THAT I can use it as a starting point for a new project
```

## Business Context

When joining a new team, you will be expected to inspect a lot of code that you have never seen before. Rather than having a team member explain every line for you, you will dissect the code by yourself, saving any questions for a member of your team.

## Acceptance Criteria

```md
GIVEN a Node.js application using Sequelize and Passport
WHEN I follow the walkthrough
THEN I understand the codebase
```
- - -

## Submission on BCS

You are required to submit the following:

* A link to code repo that contains the code within the `Develop` directory. The repo should contain a tutorial written in markdown explaining how the application functions; a tutorial.

* The `Develop` directory should be updated with original comments on what the code is doing line-by-line. 

* Optionally - you may also include a video explaining the application in `Develop` directory and display that video in the README Doc. 

* Both the video and the written tutorial should include visual graphics to support your lesson. 

`Note`: With both cases, written tutorial and/or video tutorial:

* line-by-line commenting is expected within the code. 
* A formatted README that list a written introduction of the purpose of the application and a high level explanation of how it works. 

* **Detailed** explanation of how the application functions can be expressed in a **Video** **OR** a **Written Tutorial**

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
