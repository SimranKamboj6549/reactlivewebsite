import React from 'react';
import web from "../src/images/iimage.jpg";
import {NavLink} from 'react-router-dom';
import Common from './Common';

const Home=()=>{
  return (
      <>
        <Common
            name="Grow your business with"
            imgsrc={web}
            visit="/service"
            btnName="Get Started"
        />
      </>
  )
}



export default Home;