import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Logout.css"


export const Logout = () => {
    const navigate = useNavigate();
    const navigating = (e)=>{
        try {
            e.preventDefault();
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }
    

    return (
    <div className="logout">
        <div></div>
        <p className="welcome">CarO</p>
        <button className='logout-btn' onClick={navigating}>Logout</button>
    </div>
  )
}
