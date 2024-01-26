import './CreateAccount.css'
import { Link } from 'react-router-dom';
import iconImage from '../Assets/logo.png';
import iconImage3 from '../Assets/logo3.png';
import React, { useState } from 'react';

const Success = () => {

    return (
        <div>
            <div className='header'>
                <img src={iconImage} alt="Website Icon" className="icon" />
                <h1 className="title">Anonymous</h1>
                <div className='dummy'></div>
                <div className='dummy'></div>
                <h2 className='try'>Welcome,Name</h2>
            </div>
            <div className="container">
                <div className="content">
                    <img src={iconImage3} alt="Website Icon" className="icon3" />
                    <h2>Account Created<br />Successfully !!</h2>

                    <Link to="/dashboard" className="createAccountButton">
                        Create Your First Post
                        <span className="arrow">➔</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Success;