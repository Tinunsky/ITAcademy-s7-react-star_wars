## Project README

### Introduction
Welcome to the Star Wars Galaxy Explorer! This project is a React-based web application that allows users to explore various aspects of the Star Wars universe, including starships, pilots, and films.

### Features
- **Starships**: Browse through a collection of starships from the Star Wars universe.
- **Pilots**: Explore information about pilots associated with each starship.
- **Films**: Learn about the films in which the starships appeared.
- **User Authentication**: Users can register, log in, and log out to access restricted content.
- **Protected Routes**: Certain routes, such as the list of starships and starship details, are protected and accessible only to logged-in users.

### Technologies Used
- **React**: The project is built using React, a JavaScript library for building user interfaces.
- **React Router**: Used for navigation within the application.
- **Context API**: Utilized for managing global state, including user authentication and starship data.
- **Tailwind CSS**: Used for styling and layout design.
- **API Integration**: Data is fetched from the Star Wars API (SWAPI) and a JSON server for user authentication.

### Project Structure
The project consists of several components and context providers:
- **Components**: Includes Header, NavBar, LoginButton, PilotCard, FilmCard, CardsSection, and more.
- **Context Providers**: `LoginContext` manages user authentication, while `StarshipContext` manages starship-related data.

### Usage
- Upon launching the application, users are greeted with a homepage featuring introductory text about the Star Wars universe.
- Users can navigate between different sections using the navigation bar at the top.
- Starships page allows users to view a list of starships and select individual starships to view their details.
- Starship details page displays detailed information about a selected starship, including its pilots and films.
- Users can log in or sign up using the Login/Register page. Authentication state is managed using the LoginContext.
- Certain routes, such as the list of starships and starship details, are accessible only to logged-in users.

### Credits
- This project utilizes data from the Star Wars API (SWAPI).
- The design and layout are inspired by the Star Wars universe.

### Contact
This project was completed by Khrystsina Kozak as part of IT Academy - React course. 

Thank you for using the Star Wars Galaxy Explorer! May the Force be with you!