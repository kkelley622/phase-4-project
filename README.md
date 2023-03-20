# Bookspace

## Description

Bookspace is a book review app. Users can add books or reviews for specific books. As well as view reviews of other users. 

## Requirements

- Ruby 2.7.4
- NodeJS (v16), and npm
- Postgresql


## Setup

To run this app locally in the development envivornment, open a terminal within this app's folder. Enter the following commands in the console:

- `bundle install`
- `npm install --prefix client`

This will install dependencies.

You can use the following commands to run the application:

- `rails s`: run the backend on [http://localhost:3000](http://localhost:3000)
- `npm start --prefix client`: run the frontend on
  [http://localhost:4000](http://localhost:4000)

This app is also deployed via Render.com:

- https://bookspace-app.onrender.com

## Instructions

- Login or signup to access the apps capabilities.
- View a list of which books are currently in the database. Add a review for a specific book by clicking the Add Review button for each book.
- Add a book to the database by clicking the Add Book link in the navigation bar. 
- View all reviews by clicking the Reviews link in the navigation bar. Users can edit or delete specific reviews if the review belongs to them.
- View all the reviews of an individual user by clicking the Users link in the navigation bar, and clicking the user's name whose reviews you would like to view. 
- Logout when finished.

## Acknowledgements

- Thank you to Enoch Griffith for his teaching and guidance during the building of this app.
- The outline of this app was provided by Flatiron School via the Phase-4 project guidelines. 
