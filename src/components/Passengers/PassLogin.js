import React, { useState } from "react";
import "./PassLogin.css";
import { NavLink, useNavigate } from "react-router-dom";
import service from "../../services/service";
import { async } from "@firebase/util";
import { all_passengers_db } from "../../App";


//Passenger Details
export let pass_my_details;

export const PassLogin = () => {
  // console.log('231231434')
  //Getting the data from input field.
  const navigate = useNavigate();
  
  const [user, setUser] = useState({
    emailId: "",
    password: "",
  });

  const onChange = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    setUser({ ...user, [name]: val });
  };
  let handleSubmit = (e) => {
    try {
      e.preventDefault();
      console.log(user);

      //Getting user data from database

      db_users_fetch(user);
    } catch (error) {
      console.log("good morning");
    }
  };

  const db_users_fetch = (obj) => {
    try {
      const data = all_passengers_db;
      console.log("My data>>>", data);
      console.log("Object : ", obj);

      for (let i = 0; i < data.length; i++) {
        if (
          data[i].emailId === obj.emailId &&
          data[i].password === obj.password
        ) {
          pass_my_details = data[i];
          console.log("Login Successful!!!");
          alert("Login Successful");
        navigate("/passenger/book+car+toto+auto");
          break;
        }
      }
    } catch (error) {
      console.log("Error : ", error);
    }
    // return data;
  };

  return (
    <div className="passengerLogin">
      {/* <LoginHeader /> */}

      <div className="pl-body">
        <div className="pl-body-name">Passenger Login</div>

        <form onSubmit={handleSubmit}>
          <div className="row-mb-3">
            <label htmlFor="inputEmail3" className="email-lebel">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control"
                id="inputEmail3"
                name="emailId"
                value={user.emailId}
                onChange={onChange}
                required=""
              />
            </div>
          </div>
          <div className="row-mb-3">
            <label htmlFor="inputPassword3" className="form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="inputPassword3"
                value={user.password}
                name="password"
                onChange={onChange}
                required=""
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </form>
        <p className="pl-no-acc">
          Don't have any account ....{" "}
          <NavLink
            style={{ textDecoration: "none" }}
            to={"/passenger/passenger-sign+up"}
          >
            click here
          </NavLink>
        </p>
      </div>
    </div>
  );
};
