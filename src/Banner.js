import React from 'react';
import './banner.css';
import Background from './images/bkground.jpg';

function Banner() {
    return(
        <div className='banner'>
            <div className='container'>
                <img className='bannerPic' src={Background} />
            </div>
            <div className='titleContainer'>
                <h1 className='title'>Drinnglennin Chronicles</h1>
                <h2 className='author'>KC Julius</h2>
            </div>
            <a className='buy' href=' https://www.amazon.com/dp/3948458006/ref=cm_sw_em_r_mt_dp_U_PoUsEb'>Buy on Amazon</a>
        </div>
    );
}

export default Banner;