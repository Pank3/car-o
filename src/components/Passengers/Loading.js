import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { useNavigate } from "react-router-dom";
import { all_drivers_db, all_driver_pass_db, all_passengers_db } from "../../App";
import { BookConfirmed } from "./BookConfirmed";
import { my_bookingDetails, pass_id } from "./BookNow";
import "./Loading.css";
import service from '../../services/service';


export const LoadingScreen = ({ type, color }) => {
  return (
    <ReactLoading type={"spin"} color={"#26ff00"} height={80} width={80} />
  );
};

export const Loading = () => {

    const navigate = useNavigate();


    //Checking simultaniously.
  const [counte, setCounter] = useState(0);
  // Counter
  const tick = () => {
    setCounter(counte + 1);
  };

  let all_rej_driver = [];
  useEffect(() => {
    const timer = setInterval(tick, 1000);
    // console.log(pass_id);
    for (let i = 0; i < all_passengers_db.length; i++) {
      if (all_passengers_db[i].id === pass_id) {
          console.log('Passenger Found');
        const details_me = all_passengers_db[i];
        if (details_me.last_booking_status === 1) {

          details_me.last_booking_status = 0;
          details_me.current_driver="";
            console.log("Hurrey!");
            navigate('/passenger/book+car+toto+auto/book-confirmed');
            
        }
        else if (details_me.last_booking_status === -1){
          console.log("Searching for new one.!!");
          details_me.last_booking_status = 0;
          
          all_rej_driver= [...all_rej_driver,details_me.current_driver];
          console.log(all_rej_driver);
          //Searching for another driver
          const available_drivers = all_drivers_db.filter((driver)=>{
            for(let i=0;i<all_rej_driver.length;i++){
              if(driver.id===all_rej_driver[i]){
                return false;
              }
            }
            
            
            return (driver.request===false) && (Number(driver.no_of_pass)+Number(my_bookingDetails.no_of_passengers)<5);

        });

        if(available_drivers.length){
          //adding the request to local copy of dataabase.
          available_drivers[0].requestListOfPassengers = my_bookingDetails;
          available_drivers[0].request = true;
          available_drivers[0].couter = 30;
          available_drivers[0].accepting = 0;
          available_drivers[0].no_of_pass += Number(my_bookingDetails.no_of_passengers);

          //Updating into database
          service.updateDrivers(available_drivers[0].id,available_drivers[0]);

          details_me.last_booking_status = 0;
          details_me.current_driver = available_drivers[0].id;
          service.updateUsers(details_me.id,details_me);


          alert(`Driver will get a notification. His Mail : ${available_drivers[0].emailId}`);
          // navigate('/passenger/book+car+toto+auto/loading-waiting-for-approval')
          // navigate(<Loading pass_id = {pass_my_details.id} driver_id = {available_drivers[0].id } bookingDetails ={bookingDetails}/>)
      }
      else{
          alert("Pleae Try after some time.")
          navigate('/passenger/book+car+toto+auto')
      }

        }
      }
    }

    return () => {
      clearInterval(timer);
    };
  }, [counte]);

  return (
    <div className="loading-page">
      {/* <MainHeader /> */}
      <div className="loading-body">
        <LoadingScreen type={"spin"} color={"#00ff08"} />
        <p>Searching for Vehicle</p>
        {/* <button onClick={loadingHandler}>Load</button> */}
      </div>
    </div>
  );
};
