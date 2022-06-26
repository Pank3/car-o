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


---


# Generating .apk from React App

- In our project we used [Capacitor](https://capacitorjs.com/docs/getting-started) which is a cross-platform native runtime that makes it easy to build modern web apps that run natively on Android, iOS and the Web.

- You will need at least [NodeJS 12 LTS](https://nodejs.org/en/) or later to get started.

- To build Android apps, you will need to download and set up with the default process [Android Studio](https://developer.android.com/studio).

- Steps to convert the React App to Android APK
    - `npm install @capacitor/core` -> these two commands will set up the **capacitor environment** to implements of creating native application
    - `npm install @capacitor/cli --save` -> these two commands will set up the **capacitor environment** to implements of creating native application
    - `npm install @capacitor/android` -> adding all the modules and libraries to your app and set up android platform.
    - `npx cap init` -> Initialize Capacitor configuration by providing an app name, app ID, and an optional web directory for the existing web app.
    - `npm run build` -> using this command will creates a build directory with a production build of your app.
    - `npx cap add android` -> this command will generate and add an android file which will have the libraries and modules to help the process of creating .apk file.
    - `npx cap run android` -> this command will runs and builds the application with the **Gradle library** the one from Android Studio which helps to build and generate the .apk in the Android Studio automatically and the location of this app window will popup and you are good to go to use the application in you android devices.
    - `npx cap open android` -> if the previous command doesn't run in the code terminal which you are using, then run this command and it will open the Android Studio with the prebuild .apk files and prepare the Gradle library to proceed. In this process go to Build menu and click Build Bundle first and after it completes, click Build APK on the same menu and it will generate the .apk and the location of this app window will popup and you are good to go to use the application in you android devices.

---

# Process of using our CarO Demo Application

#### Note: - In the prototype version of our application we have created 2 driver's account and 2 passenger's account.


- Drivers : 
    - Driver 1 : 
        - Name : Driver One
        - Email Id : driver1@mail.c
        - Password : Pass1
    
    - Driver 2 :
        - Name : Driver Two
        - Email Id : driver2@mail.c
        - Password : Pass2
- Passengers :
    - Passenger 1:
        - Name : Gourab Passenger
        - Email : gourab@mail.com
        - Password : Pass123
    - Passenger 2 :
        - Name : Pankaj Deb
        - Email : pankaj@gmail.com
        - Password : Pass123
   
   ## Installation Of CarO:
         Download the "CarO_demo_application.apk" from this repository and install it in an Android Device.
         Note : This is not Build for other devices(Eg : IOS)
         
        
    ## Process  
    - Install our application in a device and **login as Passenger** with the above mentioned **Passenger Ids**.
    - Set **Source location, Destination location** and **Number of Passengers**, then click **Search for driver** to start the process of searching for drivers.
    - User will get an **Alert window** with the **allocated driver mail id**.


    - Login as the above mentioned **driver profile** within **30 seconds** and he will see the passenger request in popup windown. 
    - Accept the request and it will appear in the list of the **onborded passenger list of the driver**.
    - When the driver pick up the passenger, He will press the **"Pickup"** button placed beside the Passenger details in **"Onborded Passenger List"**.
    - When the driver drop the passenger, He will click the **"Drop"** button, placed beside the Passenger Details in **"Onborded Passenger List"** and the curresponding passenger details will be removed from the **"Onborded Passenger List"**.
        #### Note : Pickup and Drop button is a toggle button, when the driver clicks on "Pickup button, the button will change to "Drop" button.

---

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

