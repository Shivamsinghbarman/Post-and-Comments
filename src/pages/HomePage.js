import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; 
import iconImage from '../Assets/logo.png';
import iconImage2 from '../Assets/logo2.png';

const HomePage = () => {
  return (
    <div className="containerhome">
      <div className='headerhome'>
      <img src={iconImage} alt="Website Icon" className="iconhome"/>
      <h1 className="titlehome">Anonymous</h1>
      </div>

      <div className="contenthome">
        <div className="centeredText1home">
          <span className="taglineIconhome">
          <img src={iconImage2} alt="Website Iconhome" className="icon2home"/>
          </span>
          <span className="txthome">For Indian users only</span>
        </div>

        <div className="centeredText3home">
          Start posting anonymously
        </div>

        <div className="centeredText3home">
          <span>where no one will judge.</span>
        </div>

        <div className="centeredTexthome">
          Welcome to stranger discussion forum
        </div>

        <Link to="/createacc" className="createAccountButtonhome">
            Create your account
          <span className="arrowhome">➔</span>
        </Link>

        <div className="loginLinkContainerhome">
          <span>Already have an account?</span>
          <Link to="/login" className="loginLinkhome">
            Login
          </Link>
        </div>
      </div>  
    </div>
  );
};

export default HomePage;
