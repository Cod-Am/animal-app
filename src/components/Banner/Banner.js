import React, { useState } from 'react';
import './Banner.css';
import tigerImage from './img/Tiger.png';
import lionImage from './img/Lion.png';
import leopardImage from './img/Leopard.png';
import './Animations.css'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CircleTwoToneIcon from '@mui/icons-material/CircleTwoTone';
// import CircleIcon from '@mui/icons-material/Circle';

const Banner = () => {

  const animals = [{
    Name: 'South China Tiger',
    Status: 'Critically Endangered',
    image: tigerImage
  },
  {
    Name: 'Lion',
    Status: 'Vulnerable',
    image: lionImage
  },
  {
    Name: 'Leopard',
    Status: 'Vulnerable',
    image: leopardImage
  }
  ]
  // Functions
  const [i, updateI] = useState(0)
  const [isAnimated, setisAnimated] = useState(false)
  const handlePreviousClick = () => {

    if (i > 0) {
      updateI(i - 1);
      setisAnimated(true)
      setTimeout(() => {
        setisAnimated(false)
      }, 700)
    }
  };
  const handleNextClick = () => {
    if (i < animals.length - 1) {
      updateI(i + 1);
      setisAnimated(true)
      setTimeout(() => {
        setisAnimated(false)
      }, 750)
    }
  };
  return (
    <div className='banner'>

      
      <div className={`encloser ${isAnimated ? 'puff-in-bottom ' : ''}`}>
      <div className='animal_content'>
        {/* Fixed Text:Species */}
        <span className='text-with-line'>
          <span className='species '>SPECIES</span>
          <hr className='line margin-species-hr' />
        </span>

        {/* Species Name */}
        <div className='animal'>{animals[i].Name}</div>

        {/* Fixed Text : Status */}
        <span className='text-with-line'>
          <span className='status'>STATUS</span>
          <hr className='line margin-status-hr' />
        </span>

        {/* Status of the species */}
        <div className='status_detail'>{animals[i].Status}</div>

        {/* Non functional Section */}
        {/* <div className='discription'>
            The tiger (Panthera tigris) is the largest living cat species and a member of the genus Panthera. It is most recognisable for its dark vertical stripes on orange fur with a white underside.
          </div> */}
      </div>

      <div><img src={animals[i].image} alt='' className='image' /></div>
      </div>
      {/* ScrollBar */}
      <div className='scrollbar'>
        <div className='arrow_button' onClick={handlePreviousClick}><KeyboardArrowUpIcon /></div>
        <div><CircleTwoToneIcon /></div>
        <div><CircleTwoToneIcon /></div>
        <div><CircleTwoToneIcon /></div>
        <div className='arrow_button' onClick={handleNextClick}><KeyboardArrowDownIcon /></div>
      </div>
    </div>
  );
};

export default Banner;
