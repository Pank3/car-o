import { React, useEffect, useState } from "react";
import "./DLogin.css";
import { NavLink, useNavigate } from "react-router-dom";
import { all_drivers_db } from "../../../App";


export let d_my_ID;

const DLogin = () => {
  const navigate = useNavigate();
  let [loginDetails, setLoginDetails] = useState({
    emailId: "",
    password: "",
  });

  const handleChangeInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    // console.log(`name - ${name}\nvalue - ${value}`);
    setLoginDetails({ ...loginDetails, [name]: value });
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();

      try {
        console.log("Driver Data Fetch Successfully!", all_drivers_db);
        for (let i = 0; i < all_drivers_db.length; ++i) {
          if (
            all_drivers_db[i].emailId === loginDetails.emailId &&
            all_drivers_db[i].password === loginDetails.password
          ) {
            console.log("Login Successfully!");
            d_my_ID = all_drivers_db[i].id;

            navigate("/driver/driver-login/driver-landing");
          }
        }
      } catch (error) {
        console.log(error);
      }
    // };

    setLoginDetails({
      ...loginDetails,
      emailId: "",
      password: "",
    });
  };

  return (
    <div className="driverLogin">
      <div className="pl-body">
        <div className="pl-body-name">Driver Login</div>

        <form onSubmit={handleSubmitForm}>
          <div className="row-mb-3">
            <label htmlFor="inputEmail3" className="email-lebel">
              Email
            </label>
            <div className="col-sm-10">
              <input
                name="emailId"
                value={loginDetails.emailId}
                type="email"
                className="form-control"
                id="inputEmail3"
                // ref={node => this.inpEmail = node}
                required=""
                onChange={handleChangeInput}
              />
            </div>
          </div>
          <div className="row-mb-3">
            <label htmlFor="inputPassword3" className="form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                name="password"
                value={loginDetails.password}
                type="password"
                className="form-control"
                id="inputPassword3"
                // ref={node => this.inpPass = node}
                required=""
                onChange={handleChangeInput}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </form>
        <p className="pl-no-acc">
          Don't have any account ....{" "}
          <NavLink style={{ textDecoration: "none" }} to={"/driver/driver-sign+up"}>
            click here
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default DLogin;
