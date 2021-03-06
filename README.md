# Soccer competitions demo app

This project is a demo of a typical [AngularJS](http://angularjs.org/) web app that displays Soccer Matches schedule from variety of international soccer leagues. The data is actually a sample data stored in a json file but the app still uses the $http service to make a Get call that returns a promise. Once the promise is resolved, the data is displayed in the view as shown in the screenshot below.

This app was quickly bootstrapped with node.js and angular-seed project.

## How to run the demo app:

1. Make sure that you have Node.js installed on your machine. If you don't have it yet you can download the installation file from https://nodejs.org/
2. Simply clone the project from https://github.com/yslavov/competitions-demo-app.git
3. CD to competitions-demo-app folder.
4. run 'npm install' command
5. run 'bower install' command
6. run 'node server.js' command

Once gone through all 6 you should have the demo app running on your machine.
Simply navigate to http://localhost:3000/

Also the app is currently hosted at https://yslavovsoccerapp.herokuapp.com/

## Current look of the app:
![alt tag](https://raw.githubusercontent.com/yslavov/competitions-demo-app/2a1cd07f7f6db758ccff508eb11b3a18a6c753d7/appScreenShot.png)
