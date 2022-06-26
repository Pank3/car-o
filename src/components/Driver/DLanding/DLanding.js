import { React, useEffect, useState } from "react";
import "./DLanding.css";
import DLandingCard from "./DLandingCard/DLandingCard";
import { d_my_ID } from "../DLogin/DLogin";
import {
  all_drivers_db,
  all_driver_pass_db,
  all_passengers_db,
} from "../../../App";
import service from "../../../services/service";
import { Logout } from "../../Logout/Logout";

const DLanding = () => {
  let local_all_driver_pass_dp = all_driver_pass_db;
  //My Object
  let myObjReq = {};

  for (let i = 0; i < all_drivers_db.length; ++i) {
    if (all_drivers_db[i].id === d_my_ID) {
      myObjReq = all_drivers_db[i];
    }
  }
  // console.log(myObjReq);

  //-----------------------------------------All Passenger List-----------------------------------------//
  useEffect(() => {
    // console.log("One Time Print");
    fetchingOnboardedPassDataFromFirebase();
  }, [local_all_driver_pass_dp]);

  const fetchingOnboardedPassDataFromFirebase = async () => {
    try {
      local_all_driver_pass_dp = await service.getAllDriverPass();
      // console.log("Local Drivers Are : ", local_all_driver_pass_dp );
    } catch (error) {
      console.log(error);
    }
  };

  //requesting popup
  let hiddenPopup = "notification-container hidden";
  let nonHiddenPopup = "notification-container";
  let [togglePopup, setTogglePopup] = useState(nonHiddenPopup);

  //-----------------------PopUp----------------------------//
  let popup_passenger = { ...myObjReq.requestListOfPassengers };
  // console.log(popup_passenger);
  useEffect(() => {
    if (myObjReq.request === true) {
      setTogglePopup(nonHiddenPopup);
    } else {
      setTogglePopup(hiddenPopup);
    }
  }, [myObjReq.request]);

  const d_accept_popup = () => {
    myObjReq.accepting = 1;
    //Update in Database
    service.updateDrivers(myObjReq.id, myObjReq);

    // Nevigate to next page

    // console.log("Accept")
  };

  const d_reject_popup = () => {
    myObjReq.accepting = -1;
    //Update in Database
    service.updateDrivers(myObjReq.id, myObjReq);

    // console.log("Reject")
  };

  





  return (
    <div>
      <Logout/>
      <div className="driver_body">
        <div className="driver_plist">
          <h4 className="pDetails-head">Passengers Details</h4>
          <div className="main-container">
            {local_all_driver_pass_dp
              .filter((data) => {
                return data.driver_id === d_my_ID;
              })
              .map((currItem) => (
                <DLandingCard
                  idPass={currItem.passengerId}
                  nameFull={currItem.fullName}
                  noOfPass={currItem.no_of_passengers}
                  farePass={Number(currItem.no_of_passengers)*10}
                  sourcePass={currItem.source_location}
                  destPass={currItem.destination_location}
                  driver_ID={currItem.driverId}
                  fullDataPass={currItem}
                  refreshData={fetchingOnboardedPassDataFromFirebase}
                />
              ))}
          </div>
        </div>
      </div>

      {/* Notifiction */}
      <div className={togglePopup}>
        <div className={"driver_notification"} id="pop_notification">
          <div className="pass_details">
            <h1>{popup_passenger.fullName}</h1>
            <p>
              <span>{popup_passenger.no_of_passengers}</span> Passengers
            </p>
            <p>
              <span>{popup_passenger.source_location} </span>
              🛺 <span>{popup_passenger.destination_location}</span>
            </p>
          </div>
          <div className="counter" id="d_counter">
            {myObjReq.couter}s
          </div>
        </div>
        <button className="btn-prime btn-one" onClick={d_accept_popup}>
          Accept
        </button>
        <button className="btn-prime btn-two" onClick={d_reject_popup}>
          Pass
        </button>
        {/* <p>Hello World</p> */}
      </div>
    </div>
  );
};

export default DLanding;
