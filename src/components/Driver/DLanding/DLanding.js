import { React, useEffect, useState } from "react";
import "./DLanding.css";
import DLandingCard from "./DLandingCard/DLandingCard";
import { d_my_ID } from "../DLogin/DLogin";
import { all_drivers_db, all_driver_pass_db, all_passengers_db } from "../../../App";
import service from "../../../services/service";

const DLanding = () => {
  //My Object
  let myObjReq = {};

  for (let i = 0; i < all_drivers_db.length; ++i) {
    if (all_drivers_db[i].id === d_my_ID) {
      myObjReq = all_drivers_db[i];
    }
  }
  console.log(myObjReq);


  //-----------------------------------------All Passenger List-----------------------------------------//
  useEffect(() => {
    console.log("One Time Print");
    fetchingOnboardedPassDataFromFirebase();
  }, [all_driver_pass_db]);

  const fetchingOnboardedPassDataFromFirebase = async () => {
    try {
      all_driver_pass_db = await service.getAllDriverPass();
    } catch (error) {
      console.log(error);
    }
  };


  //----------------------------------------------------------------------------------------------------//
  
  //------------------------------------------Garbage---------------------------------------------------//
  // let myObjReq = {
  //   addressOne: "as",
  //   addressTwo: "fg",
  //   city: "er",
  //   emailId: "d1@m.c",
  //   firstName: "driver",
  //   id: "Np0BTpwwKwR9ZM3ySG0V",
  //   lastName: "one",
  //   locationDriver: "",
  //   logged_in: false,
  //   mobileNo: "4444",
  //   no_of_pass: 3,
  //   password: "1234",
  //   pinCode: "1234",
  //   request: true,
  //   requestListOfPassengers: {
  //     book_confirmed: false,
  //     destination_location: "A-4",
  //     fair: 0,
  //     fullName: "a b",
  //     no_of_passengers: "2",
  //     passenger_id: "0zvxTvk4ahLX4oO7XTva",
  //     source_location: "A-6",
  //   },
  // };
  // const d_reject_popup = () => {
  //   // myObjReq.request = false;
  //   // myObjReq.no_of_pass -= Number(
  //   //   myObjReq.requestListOfPassengers.no_of_passengers
  //   // );
  //   //Making passenger's request negetive
  //   let the_passenger;
  //   for (let i = 0; i < all_passengers_db; i++) {
  //     if (
  //       all_passengers_db[i].id ===
  //       myObjReq.requestListOfPassengers.passenger_id
  //     ) {
  //       the_passenger = all_drivers_db[i];
  //       break;
  //     }
  //   }
  //   the_passenger.last_booking_status = -1;
  //   service.updateUsers(the_passenger.id, the_passenger);
  // };

  // let popup_passenger;
  // if (myObjReq.request) {
  //   console.log(myObjReq.request);
  //   popup_passenger = { ...myObjReq.requestListOfPassengers };
  //   console.log(popup_passenger);
  // }

  // console.log(myObjReq);

  // // Counter
  // const [counte, setCounter] = useState(20);
  // //Will be uncommented.
  // // // Counter
  // // const tick = ()=>{
  // //     setCounter(counte-1);
  // // }
  // // useEffect(()=>{
  // //     const timer = setInterval(tick, 1000);
  // //     if(counte<=0){
  // //       setTogglePopup(hiddenPopup);
  // //       clearInterval(timer);
  // //     }
  // //     return () =>{
  // //         clearInterval(timer);
  // //     }

  // // },[counte])

//----------------------------------------------------------------------------------------//

  //requesting popup
  let hiddenPopup = "notification-container hidden";
  let nonHiddenPopup = "notification-container";
  let [togglePopup, setTogglePopup] = useState(nonHiddenPopup);


  //-----------------------PopUp----------------------------//
  let popup_passenger = { ...myObjReq.requestListOfPassengers };
  console.log(popup_passenger);
  useEffect(()=>{
    if (myObjReq.request === true) {
      setTogglePopup(nonHiddenPopup);
    } else {
      setTogglePopup(hiddenPopup);
    }
  },[myObjReq.request]);
  

  const d_accept_popup = () => {
    myObjReq.accepting = 1;
    //Update in Database
    service.updateDrivers(myObjReq.id,myObjReq)

    // Nevigate to next page

    console.log("Accept")
  };

  const d_reject_popup = () => {
    myObjReq.accepting = -1;
    //Update in Database
    service.updateDrivers(myObjReq.id,myObjReq)



    console.log("Reject")
  }



  return (
    <div>
      <div className="driver_body">
        <div className="driver_plist">
          <h4 className="pDetails-head">Passengers Details</h4>
          <div className="main-container">
            {all_driver_pass_db.filter((data)=>{
              return data.driver_id===d_my_ID;
            }).map((currItem) => (
              <DLandingCard
                idPass={currItem.passengerId}
                nameFull={currItem.fullName}
                noOfPass={currItem.no_of_passenger}
                farePass={currItem.fair}
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
