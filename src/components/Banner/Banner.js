import React from 'react';
import './Banner.css';
import tigerImage from './img/Tiger.png';

const Banner = () => {
  return (
    <div className='banner'>
        {/* Tiger */}
        <div className='tiger'>Tiger</div>
        <div><img src={tigerImage} alt='' className='image'/></div>
        {/* Elephant */}
        {/* Zebra */}
    </div>
  );
};

export default Banner;
