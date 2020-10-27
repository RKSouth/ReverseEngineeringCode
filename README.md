# Unit 14 Sequelize Homework: Reverse Engineering Code

Reverse engineer the starter code provided and create a tutorial for the code.

In the `Develop` folder, there is starter code for a project. Begin inspecting the code to get an understanding of each file's responsibility. Then, README markdown file, write a tutorial explaining *every* file and its purpose in as fine as detail as possible. If one file is dependant on other files, be sure to let the user know.


## Config


### Middleware

#### isAuthenticated.js

#### Purpose

This file restricts routes tht user is not allowed to visit if they are not logged in -i.e. the logged in page.

#### Dependencies?


### config.json

#### Purpose

connection configuration to connect to the server and the mysql database.

#### Dependencies?

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

__Dependencies?__

## Public

### js

### login.js

__Purpose__

__Dependencies?__

### member.js


__Purpose__

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

### api-routes.js

__Purpose__

__Dependencies?__

### html-routes.js

__Purpose__

__Dependencies?__

## package.json

__Purpose__

__Dependencies?__

## server.js 

__Purpose__

__Dependencies?__

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
