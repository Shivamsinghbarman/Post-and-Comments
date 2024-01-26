
// CreateAccount.js

import './CreateAccount.css';
import { Link } from 'react-router-dom';
import iconImage from '../Assets/logo.png';
import iconImage2 from '../Assets/logo2.png';
import React, { useState } from 'react';

const CreateAccount = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const sendOTP = async () => {
    try {
      // Replace this with your actual server-side API endpoint for sending OTP
      const response = await fetch('https://example.com/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        console.log('OTP sent successfully!');
      } else {
        console.error('Error sending OTP:', response.statusText);
      }
    } catch (error) {
      console.error('Error sending OTP:', error.message);
    }
  };

  const saveUserData = async () => {
    try {
      // Replace this with your actual server-side API endpoint for saving user data
      const response = await fetch('https://example.com/save-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        console.log('User data saved successfully!');
      } else {
        console.error('Error saving user data:', response.statusText);
      }
    } catch (error) {
      console.error('Error saving user data:', error.message);
    }
  };

  const handleCreateAccount = async () => {
    // Generate and send OTP logic goes here (to be implemented on the server side)
    console.log(`Generating and sending OTP for ${name} with email ${email}`);
    await saveUserData();
    sendOTP(); // Moved the sendOTP call here to ensure OTP is sent after saving user data
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
          <h2>Create Your Account</h2>

          <div>
            <input
              type="text"
              id="nameInput"
              placeholder="   Enter Your Name"
              value={name}
              onChange={handleNameChange}
              className='enter'
            />
          </div>

          <div>
            <input
              type="text"
              id="emailInput"
              placeholder="   Enter Email ID"
              value={email}
              onChange={handleEmailChange}
              className='enter'
            />
          </div>

          <div>
            <input
              type="password"
              id="passwordInput"
              placeholder="   Enter Password"
              value={password}
              onChange={handlePasswordChange}
              className='enter'
            />
          </div>

          <Link to="/otp" onClick={handleCreateAccount} className="createAccountButton">
            Continue
            <span className="arrow">➔</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;


// import './CreateAccount.css'
// import { Link } from 'react-router-dom';
// import iconImage from '../Assets/logo.png';
// import iconImage2 from '../Assets/logo2.png';
// import React, { useState } from 'react';

// const CreateAccount = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [pass, setpass] = useState('');
  
//     const handleNameChange = (event) => {
//       setName(event.target.value);
//     };
  
//     const handleEmailChange = (event) => {
//       setEmail(event.target.value);
//     };

//     const handlepassChange = (event) => {
//       setpass(event.target.value);
//     };

//     const sendOTP = async () => {
//       try {
//         // Replace this with your actual server-side API endpoint for sending OTP
//         const response = await fetch('https://example.com/send-otp', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ email }),
//         });
  
//         if (response.ok) {
//           console.log('OTP sent successfully!');
//         } else {
//           console.error('Error sending OTP:', response.statusText);
//         }
//       } catch (error) {
//         console.error('Error sending OTP:', error.message);
//       }
//     };

//     const saveUserData = async () => {
//         try {
//           // Replace this with your actual server-side API endpoint for saving user data
//           const response = await fetch('https://example.com/save-user', {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ name, email }),
//           });
    
//           if (response.ok) {
//             console.log('User data saved successfully!');
//           } else {
//             console.error('Error saving user data:', response.statusText);
//           }
//         } catch (error) {
//           console.error('Error saving user data:', error.message);
//         }
//       };
  
//     const handleCreateAccount = async() => {
//       // Generate and send OTP logic goes here (to be implemented on the server side)
//       console.log(`Generating and sending OTP for ${name} with email ${email}`);
//       await saveUserData();
//     };
  
//     return (
//       <div>
//         <div className='header'>
//           <img src={iconImage} alt="Website Icon" className="icon" />
//           <h1 className="title">Anonymous</h1>
//         </div>
//         <div className="container">
//           <div className="content">
//             <img src={iconImage2} alt="Website Icon" className="icon2" />
//             <h2>Create Your Account</h2>
  
//             <div>
//               <input
//                 type="text"
//                 id="nameInput"
//                 placeholder="   Enter Your Name"
//                 value={name}
//                 onChange={handleNameChange}
//                 className='enter'
//               />
//             </div>
  
//             <div>
//               <input
//                 type="text"
//                 id="emailInput"
//                 placeholder="   Enter Email ID"
//                 value={email}
//                 onChange={handleEmailChange}
//                 className='enter'
//               />
//             </div>

//             <div>
//               <input
//                 type="password"
//                 id="emailInput"
//                 placeholder="   Enter Password.."
//                 value={pass}
//                 onChange={handlepassChange}
//                 className='enter'
//               />
//             </div>

//                     <Link to="/otp" onClick={handleCreateAccount} className="createAccountButton">
//                         Continue
//                         <span className="arrow">➔</span>
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CreateAccount;