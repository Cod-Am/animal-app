import React from 'react';
import './Banner.css';
import tigerImage from './img/Tiger.png';
import lionImage from './img/Lion.png';
import leopardImage from './img/Leopard.png';
import './Animations.css'

const Banner = () => {
  const animals=[{
    Name:'Tiger',
    Status:'Critically Endangered',
    image:tigerImage
  },
  {
    Name:'Lion',
    Status:'Vulnerable',
    image:lionImage
  },
  {
    Name:'Leopard',
    Status:'Vulnerable',
    image:leopardImage
  }
]
  return (
    <div className='banner'>
      {/* Tiger */}
      <div className='tiger_content'>
        {/* Fixed Text:Species */}
        <span className='text-with-line'>
          <span className='species '>SPECIES</span>
          <hr className='line margin-species-hr' />
        </span>

        {/* Species Name */}
        <div className='tiger'>South China Tiger</div>

        {/* Fixed Text : Status */}
        <span className='text-with-line'>
          <span className='status'>STATUS</span>
          <hr className='line margin-status-hr' />
        </span>

        {/* Status of the species */}
        <div className='status_detail'>Critically Endangered</div>

        {/* Non functional Section */}
        {/* <div className='discription'>
            The tiger (Panthera tigris) is the largest living cat species and a member of the genus Panthera. It is most recognisable for its dark vertical stripes on orange fur with a white underside.
          </div> */}
      </div>

      <div><img src={tigerImage} alt='' className='image slide-in-blurred-top' /></div>
      {/* Elephant */}
      {/* Zebra */}
    </div>
  );
};

export default Banner;
