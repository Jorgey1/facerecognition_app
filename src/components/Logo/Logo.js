import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png'
import './Logo.css'

const Logo = () => {
    return (
        <div classMane='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
            <div classMane="Tilt-inner pa4"><span><img style={{ padditngTop: '5px' }} alt='logo' src={brain}></img> </span>  </div>
            </Tilt>
        </div>
    )
}

export default Logo;