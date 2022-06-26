import React, { useState } from "react";
import service from "../../../../services/service";
import "./DLandingCard.css";
import { all_drivers_db, all_passengers_db } from "../../../../App";
import { d_my_ID } from "../../DLogin/DLogin";

const DLandingCard = (props) => {
  // console.log("I am in DLandingCard",props);

  let [PickDrop, setPickDrop] = useState(0);
  let [changeBackgroundColor, setChangeBackgroundColor] = useState("");
  let Drop = "Drop",
    Pick = "Pickup";

  let pickToDrop = () => {
    setPickDrop(PickDrop ^ 1);
    if (!(PickDrop & 1)) {
      // console.log("Onboarded!");
      setChangeBackgroundColor("btn-red-background");
    } else {
      setChangeBackgroundColor("btn-green-background");
      // console.log("Completed!");
      // console.log("Current User Data to be deleted", props.fullDataPass);
      try {
        //no of passenger to be deleted from driver database
        const no_Of_Pass_To_Be_Deleted = props.fullDataPass.no_of_passengers;
        let current_driver_details;
        // console.log("My ID is : ",d_my_ID);
        // console.log("All driver : ",all_drivers_db);
        for (let __ = 0; __ < all_drivers_db.length; __++) {
          if (all_drivers_db[__].id === d_my_ID) {
            current_driver_details = all_drivers_db[__];
            console.log("Current Driver Details : ", current_driver_details);
            current_driver_details.no_of_pass -= no_Of_Pass_To_Be_Deleted;
            service.updateDrivers(d_my_ID, current_driver_details);
            break;
          }
        }
        console.log("Current Driver Details 1 : ", current_driver_details);


        //Setting last booking status of passenger
         let current_pass_id= props.fullDataPass.passenger_id;
         for(let _ =0; _<all_passengers_db.length;_++){
          if(all_passengers_db[_].id===current_pass_id){
            let  current_pass = all_passengers_db[_];
            current_pass.last_booking_status=0;
            service.updateUsers(current_pass_id,current_pass);
            break;
          }
         }

        //deleting passenger data who's ride has been completed
        service.deleteDriverPass(props.fullDataPass.id, props.fullDataPass);
      } catch (error) {
        console.log(error);
      }
      // console.log("Drop!");
      props.refreshData();
    }
  };

  return (
    <>
      <div className="card-1 card">
        <div className="card-1-1 cards-mini">
          <p className="fullName">{props.nameFull}</p>
          <p className="noOfPass">No of passengers : {props.noOfPass}</p>
        </div>
        <div className="card-1-2 cards-mini">
          <p className="sourceToDes">
            {props.sourcePass} 🛺 {props.destPass}
          </p>
          <p className="fare">Fare : {props.farePass}</p>
        </div>
        <div className="card-1-3 cards-mini">
          <button className={changeBackgroundColor} onClick={pickToDrop}>
            {PickDrop ? Drop : Pick}
          </button>
        </div>
      </div>
    </>
  );
};

export default DLandingCard;
