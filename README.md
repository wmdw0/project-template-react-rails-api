## ReadMe
This project was bootstrapped with Create React App.
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).




# FlatIron School - Phase 4 Project
Phase 4 Project for FlatIron School SE Program

# Requirements:
For this project, you must:
- Use a Rails API backend with a React frontend
- Have at least two models, with a one-to-many relationship on the backend, with full C.R.U.D. actions for at least one. 
- Have at least two different client-side routes using React Router.
- Implement authentication/authorization. At a minimum, a user should be able to log into the site and stay logged in via user ID in the session hash. Password protection is optional. 


# FlatIron Phase 4 Project - Twitter
To conclude Phase 4 of FlatIron School’s Software Engineering program, I chose to build a functional, low-level, version of Twitter with a Rails API Backend, and a React frontend. Throughout this project, I cover how to allow users to create accounts, how to securely store users credentials in your database, how to allow users to log in if they have already created an account, and how to add what is necessary to make this fully functional. 

# Features 

As a non-authenticated user, I can: 
- Access the /login page and /signup page
- Sign up, if I do not yet have an account
- Log in, if I have previously created an account

As an authenticated user, I can: 
- Access the platform, without restrictions
- Create a new tweet via the TweetBox within feed(containing text and/or image and/or location)
- Edit or delete a previous tweet 
- View posts in my feed
- Like, retweet, or comment on a tweet, regardless if we created it or not
- Use sidebar to navigate to other parts of the site
- Search via searchbar

# Conclusion 
In conclusion, the goal of this project was to apply what was taught throughout the Software Engineering program up to this point to create a functional, low-level version of Twitter and successfully meet the project requirements. 

The requirements were to: 

- (1) Use a Rails API backend with a React frontend, 
- (2) Have at least two models, with a one-to-many relationship on the backend, with full CRUD actions for at least one. 
- (3) Have at least two different client-side routes using React Router, 
- (4) Implement authentication/authorization, and optionally include password protection. 

We covered how to allow users to create accounts, how to securely store users credentials in your database, how to allow users to log in if they have already created an account, and how to add what is necessary to make this fully functional. 
