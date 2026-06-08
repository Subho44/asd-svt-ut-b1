import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {

    return <>
        <nav>
            <div>
                E-learning
            </div>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact</Link>
                    <Link to='/cd'>Course details</Link>

                </li>
            </ul>
            
        </nav>
    
    </>
}

export default Navbar