# Workout Tracker

Workout tracker application using Node.js, Mongoose.js, and Express.js. 

# Project Description

This is a simple workout tracking app that allows you to add a workout "session" and add exercises to it. There are options for resistance and cardio workouts, each having different data you can enter such as the duration of the workout, the amount of weight lifted, the number of reps done, the distance covered, etc. Once at least one workout session with one exercise has been entered you will be able to view a few charts displaying your data from the "Dashboard". Your last exercise is also listed on the main page.

The project uses Express.js for handling requests/responses and Mongoose.js for simple database storage of workout data.

The project is part of a coding bootcamp so some starter files were given. My work includes the everything on the backend (Mongoose model, database setup/connection, all routing).

# Setup/Installation

## Local

First start by making sure all project files have been downloaded and dependencies installed. Everything should work out of the box without additional setup assuming you have MongoDB installed/running. A seed file has also been included for a quick look at what your workout tracking may look like after a week.

## Heroku

This project is also ready for deployment to Heroku using MongoDB Atlas.


# Usage Instructions

Once that's all set up, the database can be initialized and a connection established by running "node server.js" in your terminal. For local testing the URL to navigate to is localhost:3000. There are navigation links in the top left of the application at all times that will allow you to jump between the home page and your dashboard.
