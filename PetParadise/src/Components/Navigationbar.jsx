import React from "react";
import { Link } from 'react-router-dom';

function Navigationbar() {

    return (
    <div className='navigation'>
        <img src='.\src\Images\navimg.jpg' alt='logo'/>
        <h1>Pet Paradise</h1>
        <Link to="/"><p>Home</p></Link>
        <Link to="/services"><p>Services</p></Link>
        <Link to="/about"><p>About</p></Link>
        <Link to="/contact"><p>Contact</p></Link>
        <Link to="/login"><button>Login</button></Link>
    </div>
    )
}

export default Navigationbar;