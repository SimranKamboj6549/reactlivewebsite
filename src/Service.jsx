import React from 'react';
import Card from './Card';
import Sdata from './Sdata';
import web from '../src/images/computer.jpg';
import app from '../src/images/download.jpg';
import android from '../src/images/iimage.jpg';
import digital from '../src/images/imagescartoon.jpg';
import marketing from "../src/images/marketing.jpg";
import software from "../src/images/software.jpg";

const Service=()=>{
  return(
    <>
       <div className="my-5">
            <h1 className="text-center ">Our Services</h1>
        </div>
      <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row  gy-4">
                          <Card imgsrc={web} title="Web Development"/>
                          <Card imgsrc={app} title="App Development"/>
                          <Card imgsrc={android} title="Android Development"/>
                          <Card imgsrc={digital} title="Digital Marketing"/>
                          <Card imgsrc={marketing} title="Marketing"/>
                          <Card imgsrc={software} title="Software Development"/>
                         </div>
                    </div>
                </div>
            </div>
    </>
  )
}



export default Service;