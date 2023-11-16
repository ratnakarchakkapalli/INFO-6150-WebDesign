
## INFO 6150 Assignment-9

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

The web application is built with Node.js, React, and JavaScript. It provides features for job management, user authentication, and contact information.

## Table of Contents

- [Technologies](#technologies)
- [Setup](#setup)
- [Usage](#usage)
- [Features](#features)
- [Dynamic Components](#dynamic-components)
- [React `map()`](#react-map)
- [.gitignore](#gitignore)

## Technologies

- **Node.js**: Used for server-side development and handling backend logic.
- **React**: Utilized for building a dynamic and interactive user interface.
- **JavaScript**: The primary programming language for implementing client-side logic.
- **React Router**: Used for navigation and routing within the React application.
- **HTML/CSS**: Markup and styling for the web pages.

## Setup

To run this project locally, follow these steps:

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies: `npm install`.
4. Start the application: `npm start`.

## Usage

To use the application, follow these steps:

1. Open the application in your web browser.
2. Log in using your credentials.
3. Explore the different pages such as Home, About, Jobs, and Contact.

## Features
### `Login`

Created a login page. Used usernames and passwords created in assignment-8 to login 
successfully. 

### `Home`

Created home Page which contains the welcome headings.

### `About`

Created About Page which contains details about the page.

### `Jobs`

Created Jobs Page which contains details about the job. We can create Jobs dynamically, as used react map() to create dynamic component. 

### `Contact`

Created Contact Page which had details of contact on the card component.

1. **User Authentication**: Implement user authentication to secure the application.

2. **Job Management**: Users can create and manage jobs on the Jobs page.

3. **Contact Information**: Contact details are provided on the Contact page.

4. **Dynamic Components with React Router**:
   - Create 4 pages using React components and React Router (Home, About-us, Jobs, Contact).
   - Utilize a separate folder structure for each component.
   - Add a card component on each page detailing information about the respective page.
   - Use React `map()` to create dynamic components, especially on one of the pages. (See [Jobs.js](src/Components/Jobs/jobs.js))

5. **Styling and Additional Text**:
   - Apply CSS to enhance the visual appeal of the pages.
   - Include additional text to make the pages informative and visually appealing.

## Dynamic Components

Dynamic components are implemented in the following file:

- [Jobs.js](src/Components/Jobs/jobs.js): This file contains dynamic components using React `map()`.

## React `map()`

React `map()` is utilized in the following file:

- [Jobs.js](src/Components/Jobs/jobs.js): React `map()` is used to dynamically render components based on the state.

## .gitignore

The `.gitignore` file is configured to exclude unnecessary files and directories from version control. It helps to keep the repository clean and avoids tracking files such as dependencies, build artifacts, and environment-specific configurations.