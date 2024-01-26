import './CreateAccount.css'
import { Link } from 'react-router-dom';
import iconImage from '../Assets/logo.png';
import iconImage2 from '../Assets/logo2.png';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Otp = ({otps,id,username,email}) => {
    const [otp, setOtp] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleOtpChange = (event) => {
      setOtp(event.target.value);
      setError(''); 
    };
    
    const handleContinue = () => {
      
      // const mockServerOtp = '123456'; 

      if (otp === otp) {
        localStorage.setItem("id", id);
        localStorage.setItem("username", username);
        localStorage.setItem("email", email);
        navigate("/success");
      }else{
        setError('Incorrect OTP. Please try again.');
      }
    };
  
    return (
      <div>
        <div className='header'>
          <img src={iconImage} alt="Website Icon" className="icon" />
          <h1 className="title">Anonymous</h1>
        </div>
        <div className="container">
          <div className="content">
            <img src={iconImage2} alt="Website Icon" className="icon2" />
            <h2>Verify Your Email</h2>
  
            <div className='verify'>
              Please verify your email ID to continue.<br />
              We have sent an OTP to this email-ID.
            </div>
  
            <div>
              <input
                type="text"
                id="otpInput"
                placeholder="   Enter OTP"
                value={otp}
                onChange={handleOtpChange}
                className='enter'
              />
            </div>
  
            {error && <div className="error">{error}</div>}
            
            <button onClick={handleContinue} className="createAccountButton">
                        Continue
                        <span className="arrow">➔</span>
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Otp;


