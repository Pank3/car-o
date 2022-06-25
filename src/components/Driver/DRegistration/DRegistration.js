import { React, useEffect, useState } from "react";
import "./DRegistration.css";
import { NavLink, useNavigate } from "react-router-dom";
import service from "../../../services/service";


const DRegistration = () => {
  const navigate = useNavigate();
  let [registrationInputs, setRegistrationInputs] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    mobileNo: "",
    addressOne: "",
    addressTwo: "",
    city: "",
    no_of_pass: 0,
    state: "",
    pinCode: "",
    logged_in: false,
    password: "",
    id: "",
    locationDriver: "",
    request: false,
    requestListOfPassengers: {},
  });

  const handleChangeInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    // console.log(`name - ${name}\nvalue - ${value}`);
    setRegistrationInputs({ ...registrationInputs, [name]: value });
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    // console.log(event.target);
    console.log(registrationInputs);

    try {
      service.addDrivers(registrationInputs);
      console.log("Driver Updated Successfully!");
    } catch (error) {
      console.log(error);
    }

    setRegistrationInputs({
      ...registrationInputs,
      firstName: "",
      lastName: "",
      emailId: "",
      mobileNo: "",
      addressOne: "",
      addressTwo: "",
      city: "",
      state: "",
      no_of_pass: 0,
      pinCode: "",
      logged_in: false,
      password: "",
      id: "",
      locationDriver: "",
      request: false,
      requestListOfPassengers: {},
    });

    navigate("/driver/driver-login");
  };

  return (
    <div className="passengerLogin">
      {/* <LoginHeader /> */}
      <div className="pl-body">
        <div className="pl-body-name">Driver Signup</div>
        <form
          onSubmit={handleSubmitForm}
          className="row g-3 needs-validation"
          noValidate=""
        >
          <div className="row-mb-3">
            <label htmlFor="validationTooltip01" className="form-label">
              First name
            </label>
            <input
              name="firstName"
              type="text"
              className="form-control"
              id="new-pass-fname"
              placeholder="Yota"
              required=""
              value={registrationInputs.firstName}
              onChange={handleChangeInput}
            />
          </div>
          <div className="row-mb-3">
            <label htmlFor="validationTooltip02" className="form-label">
              Last name
            </label>
            <input
              name="lastName"
              type="text"
              className="form-control"
              id="new-pass-lname"
              placeholder="Roy"
              required=""
              value={registrationInputs.lastName}
              onChange={handleChangeInput}
            />
          </div>
          <div className="row-mb-3">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input
              name="emailId"
              type="email"
              className="form-control"
              id="new-pass-mail"
              placeholder="example@mail.com"
              required=""
              value={registrationInputs.emailId}
              onChange={handleChangeInput}
            />
          </div>
          <div className="row-mb-3">
            <label htmlFor="phoneNumber" className="form-label">
              Phone Number
            </label>
            <input
              name="mobileNo"
              type="number"
              className="form-control"
              id="new-pass-phone"
              placeholder="(+91)"
              value={registrationInputs.mobileNo}
              onChange={handleChangeInput}
            />
          </div>
          <div className="row-mb-3">
            <label htmlFor="inputAddress" className="form-label">
              Address
            </label>
            <input
              name="addressOne"
              type="text"
              className="form-control"
              id="new-pass-add1"
              placeholder="1234 Main St"
              value={registrationInputs.addressOne}
              onChange={handleChangeInput}
            />
          </div>
          <div className="row-mb-3">
            <label htmlFor="inputAddress2" className="form-label">
              Address 2
            </label>
            <input
              name="addressTwo"
              type="text"
              className="form-control"
              id="new-pass-add2"
              placeholder="Apartment, studio, or floor"
              value={registrationInputs.addressTwo}
              onChange={handleChangeInput}
            />
          </div>
          <div className="row-mb-3">
            <label htmlFor="validationTooltip03" className="form-label">
              City
            </label>
            <input
              name="city"
              type="text"
              className="form-control"
              id="new-pass-city"
              required=""
              value={registrationInputs.city}
              onChange={handleChangeInput}
            />
          </div>

          <div className="row-mb-3">
            <label htmlFor="validationTooltip04" className="form-label">
              State
            </label>
            <select
              name="state"
              className="form-select"
              id="new-pass-state"
              required=""
              value={registrationInputs.state}
              onChange={handleChangeInput}
            >
              <option disabled="" value="">
                Choose...
              </option>
              <option>WestBengal</option>
              <option>Pakistan</option>
            </select>
          </div>

          <div className="row-mb-3">
            <label htmlFor="validationTooltip05" className="form-label">
              Zip
            </label>
            <input
              name="pinCode"
              type="text"
              className="form-control"
              id="new-pass-zip"
              required=""
              value={registrationInputs.pinCode}
              onChange={handleChangeInput}
            />
          </div>
          <div className="row-mb-3">
            <label htmlFor="validationTooltip05" className="form-label">
              Password
            </label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="new-pass-zip"
              required=""
              value={registrationInputs.password}
              onChange={handleChangeInput}
            />
          </div>

          <div className="col-12">
            <button
              className="btn btn-primary"
              id="new-pass-form-submit"
              type="submit"
            >
              Submit form
            </button>
          </div>
        </form>

        <p className="pl-no-acc">
            Have an Account ....{" "}
            <NavLink style={{ textDecoration: "none" }} to={"/driver/driver-login"}>
              click here
            </NavLink>
          </p>
      </div>
    </div>
  );
};

export default DRegistration;
