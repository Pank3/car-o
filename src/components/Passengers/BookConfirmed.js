import React from "react";
import { all_drivers_db } from "../../App";
import './BookConfirmed.css'
import { driver_id, my_bookingDetails, pass_id } from "./BookNow";


export const BookConfirmed = () => {
    let driver;
    for(let i=0;i<all_drivers_db.length;i++){
        if(all_drivers_db[i].id===driver_id){
            driver = all_drivers_db[i];
        }
    }

    let full_name = "Pankaj Deb",car_no = 14,age=34,mobileNo=12344545634;
    full_name = driver.firstName+ " "+driver.lastName;
    car_no =driver.car_no?driver.car_no:14;
    age = driver.age?driver.age:23;
    mobileNo  = driver.mobileNo;

  return (
      <div className="body">
          <div className="book_confirmed">
              <h1>{full_name}</h1>
              <p>Is your driver</p>
              <p>I am <span>{age}</span> Years old</p>
              <p>Car NO : <span>{car_no}</span></p>
              <p>You can call me : <span>{mobileNo}</span></p>
              <p>I am pleased to help you.</p>
          </div>

      </div>
  );
};
