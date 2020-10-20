import React, { useState, useEffect } from 'react';
import './Nav.css';

function Nav() {

    const [show, handleShow] = useState(false);

    // using useEffect to manage the display of navbar
    useEffect( () => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                handleShow(true);
            }
            else{
                handleShow(false);
            }
        });
        return() => {
            window.removeEventListener("scroll");
        }
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="Netflix Logo"
            />

            <img
                className="nav__avatar"
                src="https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png"
                alt="Netflix Avatar"
            />
        </div>
    )
}

export default Nav;
