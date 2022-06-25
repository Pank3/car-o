# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**



If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)





# Generating .apk from React App

- In our project we used [Capacitor](https://capacitorjs.com/docs/getting-started) which is a cross-platform native runtime that makes it easy to build modern web apps that run natively on Android, iOS and the Web.

- You will need at least [NodeJS 12 LTS](https://nodejs.org/en/) or later to get started.

- To build Android apps, you will need to download and set up with the default process [Android Studio](https://developer.android.com/studio).

- Steps to convert the React App to Android APK
    - `npm install @capacitor/core` -> these two commands will set up the capacitor environment to implements of creating native application
    - `npm install @capacitor/cli --save` -> these two commands will set up the capacitor environment to implements of creating native application
    - `npm install @capacitor/android` -> adding all the modules and libraries to your app and set up android platform.
    - `npx cap init` -> Initialize Capacitor configuration by providing an app name, app ID, and an optional web directory for the existing web app.
    - `npm run build` -> using this command will creates a build directory with a production build of your app.
    - `npx cap add android` -> this command will generate and add an android file which will have the libraries and modules to help the process of creating .apk file.
    - `npx cap run android` -> this command will runs and builds the application with the Gradle library the one from Android Studio which helps to build and generate the .apk in the Android Studio automatically and the location of this app window will popup and you are good to go to use the application in you android devices.
    - `npx cap open android` -> if the previous command doesn't run in the code terminal which you are using, then run this command and it will open the Android Studio with the prebuild .apk files and prepare the Gradle library to proceed. In this process go to Build menu and click Build Bundle first and after it completes, click Build APK on the same menu and it will generate the .apk and the location of this app window will popup and you are good to go to use the application in you android devices.
