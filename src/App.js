import { async } from "@firebase/util";
import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import DLogin from "./components/Driver/DLogin/DLogin";
import DRegistration from "./components/Driver/DRegistration/DRegistration";
import DLanding from "./components/Driver/DLanding/DLanding";
// import DLandingCard from "./components/Driver/DLanding/DLandingCard/DLandingCard";

import { Landing } from "./components/Landing Page/Landing";
import { BookConfirmed } from "./components/Passengers/BookConfirmed";
import { BookNow } from "./components/Passengers/BookNow";
import { Loading } from "./components/Passengers/Loading";
import { PassLogin } from "./components/Passengers/PassLogin";
import { PassSignup } from "./components/Passengers/PassSignup";
import service from "./services/service";

export let all_drivers_db, all_passengers_db, all_driver_pass_db;

function App() {
  //Calling firebase

  const fetch_data_from_db = async () => {
    setCounter(counte + 1);
    all_drivers_db = await service.getAllDrivers();
    all_passengers_db = await service.getAllUsers();
    all_driver_pass_db = await service.getAllDriverPass();

    //------------------Driver's Request Refresh------------------------//
    for (let i = 0; i < all_drivers_db.length; i++) {
      if (all_drivers_db[i].request === true) {
        let ch_driver = all_drivers_db[i];
        ch_driver.couter = ch_driver.couter - 2;

        //Finding passenger
        let current_pass;
        for (let i = 0; i < all_passengers_db.length; i++) {
          if (
            all_passengers_db[i].id ===
            ch_driver.requestListOfPassengers.passenger_id
          ) {
            current_pass = all_passengers_db[i];
          }
        }

        if (ch_driver.couter <= 0 || ch_driver.accepting == -1) {
          ch_driver.accepting = 0;
          ch_driver.couter = 0;
          ch_driver.request = false;
          ch_driver.no_of_pass =
            ch_driver.no_of_pass -
            ch_driver.requestListOfPassengers.no_of_passengers;

          current_pass.last_booking_status = -1;
        } else if (ch_driver.accepting == 1) {
          ch_driver.couter = 0;
          ch_driver.request = false;
          let current = ch_driver.requestListOfPassengers;
          current.driver_id = ch_driver.id;
          service.addDriverPass(current);
          console.log("Adding Driver");
          ch_driver.accepting = 0;
          current_pass.last_booking_status = 1;
        }
        service.updateUsers(current_pass.id, current_pass);
        service.updateDrivers(ch_driver.id, ch_driver);
        all_drivers_db = await service.getAllDrivers();
        all_passengers_db = await service.getAllUsers();
        all_driver_pass_db = await service.getAllDriverPass();
      }
    }

    //-----------------------------------------------------------------//
  };

  //``````````````````````````````````````````````````
  //Will Be Implemented///

  const [counte, setCounter] = useState(0);
  // Counter

  useEffect(() => {
    const timer = setInterval(fetch_data_from_db, 3000);
    // console.log(123);
    // console.log(all_drivers_db);

    return () => {
      clearInterval(timer);
    };
  }, [counte]);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/passenger/passenger-sign+up" element={<PassSignup />} />
          <Route path="/passenger/passenger-login" element={<PassLogin />} />
          <Route path="/passenger/book+car+toto+auto" element={<BookNow />} />
          <Route
            path="/passenger/book+car+toto+auto/book-confirmed"
            element={<BookConfirmed />}
          />
          <Route
            path="/passenger/book+car+toto+auto/loading-waiting-for-approval"
            element={<Loading />}
          />

          <Route path="/driver/driver-login" element={<DLogin />} />
          <Route path="/driver/driver-sign+up" element={<DRegistration />} />
          <Route
            path="/driver/driver-login/driver-landing"
            element={<DLanding />}
          />

          <Route path="/" element={<Landing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
