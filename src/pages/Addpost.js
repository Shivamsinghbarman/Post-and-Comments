
import './CreateAccount.css'
import './Dashboard.css'
import iconImage from '../Assets/logo.png';
import React, { useState } from 'react';

const Addpost = () => {

    const handleClick = () => {
        console.log('Button clicked!');
    };

    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleDescChange = (event) => {
        setDesc(event.target.value);
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

                        <h2 className="title"> Create Post</h2>
                        <input
                            type="text"
                            id="nameInput"
                            placeholder="   Post Title.."
                            value={name}
                            onChange={handleNameChange}
                            className='enter2'
                        /><br/>
                        <input
                            type="text"
                            id="nameInput"
                            placeholder="   Describe Your Post.."
                            value={desc}
                            onChange={handleDescChange}
                            className='enter3'
                        />

                        <div className='submit'>
                            <p>Post Submit</p>
                        </div>
                    </section>
                </main>

            </div>
        </div>
    );
};

export default Addpost;
