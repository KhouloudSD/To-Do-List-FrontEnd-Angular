# To Do List Application

This project is a full-stack To-Do List application developed using **NestJS**, **Angular**, and **MongoDB**. It allows users to manage their daily tasks efficiently, with features such as task creation, scheduling, progress tracking, and more. The front end is built using **Angular** (version 16.2.16) and **PrimeNG** (version 16.9.1), while the back end is powered by **NestJS** and a **MongoDB** database for persistent data storage.

## Project Overview

This application enables users to create, view, update, and delete tasks. The tasks are organized by dates, allowing users to schedule their to-do lists efficiently. Key functionalities include task progress tracking, date validation to prevent duplicate entries, and user-friendly forms to manage tasks.

## Development server

Front-End (Angular):

Run `ng serve` to start the development server. Navigate to http://localhost:4200/ to see the application.
The application will automatically reload if you make any changes to the source files.

Back-End (NestJS):

Run npm run start:dev to start the NestJS API server. The API will be available at http://localhost:3000/.

##  Features

To Do List Management: Users can create, edit, and delete tasks for specific days. Each date can have its own to-do list.


Date and Time Integration: Tasks are organized by date, allowing users to schedule tasks for specific days and time intervals.


Progress Tracking: The app shows a progress bar indicating the percentage of completed tasks for each day.


Task Completion: Users can mark tasks as "in-progress" or "done", and the progress bar updates accordingly.


Date Validation: Prevents creating a new to-do list for a date that already exists. If a duplicate date is entered, an error message is displayed using PrimeNG's dialog component.


User-Friendly Interface: Clean, responsive, and intuitive UI using PrimeNG components for better user experience.


CRUD Operations: Full support for Create, Read, Update operations for tasks and dates, making task management seamless.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


![Interface Preview](https://drive.google.com/uc?export=view&id=1xaQyv_uBq9IPV3-U2TDfXcCvV8HRf4Oe)


