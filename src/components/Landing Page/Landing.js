import React from "react";
import { NavLink } from "react-router-dom";
import "./Landing.css";
export const Landing = () => {
  return (
    <div className="landing">
      <div className="home-animation">
        <div className="home-circle">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#0099ff"
              fillOpacity="0.9"
              d="M0,96L30,96C60,96,120,96,180,117.3C240,139,300,181,360,186.7C420,192,480,160,540,165.3C600,171,660,213,720,229.3C780,245,840,235,900,218.7C960,203,1020,181,1080,170.7C1140,160,1200,160,1260,170.7C1320,181,1380,203,1410,213.3L1440,224L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
            ></path>
          </svg>
          <div className="caro-name">CarO</div>
        </div>
      </div>

      <div className="land-login">
        <div className="buttonTemp loginTxt">Login</div>

        <NavLink to={"/driver/driver-login"}>
          <div className="buttonTemp l-driver">Driver</div>
        </NavLink>

        <NavLink to={"/passenger/passenger-login"}>
          <div className="buttonTemp l-passenger">Passenger</div>
        </NavLink>
        
      </div>
    </div>
  );
};
