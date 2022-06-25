import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { all_drivers_db } from '../../App';
import { db_places_SP } from '../../local_databse';
import service from '../../services/service';
import "./BookNow.css"
import { Loading } from './Loading';
import { pass_my_details } from './PassLogin';

export let driver_id,pass_id,my_bookingDetails;

export const BookNow = () => {
    const navigate= useNavigate();
    // const[drivers,setDrivers] = useState({});
    //Get all drivers
    

    const [bookingDetails,setBooking]= useState({
        fullName : pass_my_details.firstName + " "+ pass_my_details.lastName,
        source_location :"",
        destination_location : "",
        no_of_passengers : 0,
        fair : 0,
        passenger_id :pass_my_details.id,
        // book_confirmed : false,
    })

    const sourceValHandler = (e)=>{
        const name = e.target.name;
        const val = e.target.value;
        setBooking({...bookingDetails,[name]:val});
        // if(name ==='no_of_passengers'){
        //     setBooking({...bookingDetails,fair : Number(val)*10});

        // }
        console.log(val);
    };


    
    const searchingDriver=(e)=>{
        e.preventDefault();
        const available_drivers = all_drivers_db.filter((driver)=>{
            return (driver.request===false) && (Number(driver.no_of_pass)+Number(bookingDetails.no_of_passengers)<5);

        });
        
        //Driver Sort Based On LOcation//
         
        if(available_drivers.length){
            //adding the request to local copy of dataabase.
            available_drivers[0].requestListOfPassengers = bookingDetails;
            available_drivers[0].request = true;
            available_drivers[0].couter = 30;
            available_drivers[0].accepting = 0;
            available_drivers[0].no_of_pass += Number(bookingDetails.no_of_passengers);

            //Updating into database
            service.updateDrivers(available_drivers[0].id,available_drivers[0]);

            pass_my_details.last_booking_status = 0;
            pass_my_details.current_driver = available_drivers[0].id;
            service.updateUsers(pass_my_details.id,pass_my_details);


            //Declaring Global Variable
            pass_id = pass_my_details.id;
            driver_id =available_drivers[0].id;
            my_bookingDetails =bookingDetails

            alert(`Driver will get a notification. His Mail : ${available_drivers[0].emailId}`);
            navigate('/passenger/book+car+toto+auto/loading-waiting-for-approval')
            // navigate(<Loading pass_id = {pass_my_details.id} driver_id = {available_drivers[0].id } bookingDetails ={bookingDetails}/>)
        }
        else{
            alert("Pleae Try after some time.")
        }
    };

    // const 


    return (
        <div className="book-now">
          {/* <MainHeader /> */}
          <div className="booknow-body">
            <form className="needs-validation" onSubmit={searchingDriver}>
              <div className="col-md-4">
                <label htmlFor="pass-pickupLocation" className="bn-label">
                  Enter Pickup Location
                </label>
                <input
                  value={bookingDetails.source_location}
                  onChange={sourceValHandler}
                  list="pass-pickup-inp"
                  className="form-control"
                  id="pass-pickupLocation"
                  name="source_location"
                  placeholder="J-10"
                  required=""
                />
                {/* List of pickup and drop locations */}
                <datalist id="pass-pickup-inp">
                  {db_places_SP.map((places) => (
                    <option value={places}>{places}</option>
                  ))}
                </datalist>
                <div className="bn-pl-invalid bn-invalid">No Such Places!</div>
              </div>
    
              <div className="col-md-4">
                <label htmlFor="pass-dropLocation" className="bn-label">
                  Enter Drop Location
                </label>
                <input
                  value={bookingDetails.destination_location}
                  onChange={sourceValHandler}
                  list="pass-pickup-inp"
                  className="form-control"
                  id="pass-dropLocation"
                  name="destination_location"
                  placeholder="Gate"
                  required=""
                />
                {/* List of pickup and drop locations */}
                <datalist id="pass-pickup-inp">
                  {db_places_SP.map((places) => (
                    <option value={places}>{places}</option>
                  ))}
                </datalist>
    
                <div className="bn-dl-invalid bn-invalid">No Such Places!</div>
              </div>
    
              <div className="col-md-3">
                <label htmlFor="bn-pass-cnt" className="bn-label">
                  Number of Passengers
                </label>
                <select
                  value={bookingDetails.no_of_passengers}
                  onChange={sourceValHandler}
                  className="form-select"
                  id="bn-pass-cnt"
                  required=""
                  name='no_of_passengers'
                >
                  <option selected defaultValue="1">
                    Choose...
                  </option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
                <div className="bn-pc-invalid bn-invalid">
                  Please select a valid state.
                </div>
              </div>
    
              <div className="col-12">
                <button className="btn btn-primary" type="submit">
                  Search
                </button>
              </div>
    
              <p style={{ color: "#07ff28", fontWeight: "bold" }}>
                Per Person Rs.10/-
              </p>
            </form>
          </div>
        </div>
      );
}
