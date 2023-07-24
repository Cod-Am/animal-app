import React from 'react';
import './Banner.css';
import tigerImage from './img/Tiger.png';

const Banner = () => {
  return (
    <div className='banner'>
        {/* Tiger */}
        <div className='tiger_content'>
            <div className='tiger'>Tiger</div>
            <div className='discription'>
            The tiger (Panthera tigris) is the largest living cat species and a member of the genus Panthera. It is most recognisable for its dark vertical stripes on orange fur with a white underside.
            </div>
        </div>
        
        <div><img src={tigerImage} alt='' className='image'/></div>
        {/* Elephant */}
        {/* Zebra */}
    </div>
  );
};

export default Banner;
