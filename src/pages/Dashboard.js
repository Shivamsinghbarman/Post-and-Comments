
import './CreateAccount.css'
import './Dashboard.css'
import { Link } from 'react-router-dom';
import iconImage from '../Assets/logo.png';
import React, { useState } from 'react';


const Dashboard = () => {

  const handleClick = () => {
    window.location.href = '/addpost';
  };

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
        <main className="content3">
          <aside className="sidebar">

            <ul className="menu">

              <li className="menu-item">   All Post</li>
              <li className="menu-item">   Commented Post</li>
              <li className="menu-item">   Replied Post</li>
            </ul>

            <div onClick={handleClick} className='createpost'> ⊕ Create Post</div>
          </aside>

          <section className="posts">

            <h2 className="title"> All Post (10)</h2>
            <ul className="post-list">
              <li className="post-item">
                <h3 className="post-title">    This is Post Title:</h3>
                <p className="post-stats">    12 Comment: 10 Reply</p>
              </li>
              <li className="post-item">
                <h3 className="post-title">    This is Post 2 Title:</h3>
                <p className="post-stats">    1 Comment: 5 Reply</p>
              </li>
              <li className="post-item">
                <h3 className="post-title">    This is Post 3 Title:</h3>
                <p className="post-stats">    2 Comment: 30 Reply</p>
              </li>
              <li className="post-item">
                <h3 className="post-title">    This is post 4 Title:</h3>
                <p className="post-stats">    1 Comment: 10 Reply</p>
              </li>
            </ul>
          </section>
        </main>

      </div>
    </div>
  );
};

export default Dashboard;


