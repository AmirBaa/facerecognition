import React from "react";
import Tilt from 'react-parallax-tilt';
import face from './face.png';
import './Logo.css';


const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt style={{ width: '150px', height: '150px' }} className="Tilt br 2 shadow-2">
                <div className="Tilt"><img alt='Logo' src={face} />
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;