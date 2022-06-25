import React, { useState } from "react";
import service from "../../../../services/service";
import "./DLandingCard.css";


const DLandingCard = (props) => {
  // console.log("I am in DLandingCard",props);

  let [PickDrop, setPickDrop] = useState(0);
  let [changeBackgroundColor, setChangeBackgroundColor] = useState("");
  let Drop = "Drop",
    Pick = "Pickup";

  let pickToDrop = () => {
    setPickDrop(PickDrop ^ 1);
    if (!(PickDrop & 1)) {
      console.log("Onboarded!");
      setChangeBackgroundColor("btn-red-background");
    } else {
      setChangeBackgroundColor("btn-green-background");
      console.log("Completed!");
      console.log("Current User Data to be deleted", props.fullDataPass);
      try {
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
          <p className="noOfPass">No of passengers : {props.no_of_passenger}</p>
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
