import React, { useState } from 'react';


const Contact=()=>{
  

  const [data,setData]=useState({
    fullname:"",
    phonenumber:"",
    emailaddress:"",
    message:""

  });

  const submitForm=(e)=>{
    e.preventDefault();
    alert(`Name : ${data.fullname}  Phone : ${data.phonenumber} Email : ${data.emailaddress} Message : ${data.message}`)

  }

  const InputEvent=(event)=>{
    const{name,value}=event.target;

    setData((preVal)=>{
      return{
      ...preVal,
      [name]:value
    };
  })
  }

 

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>

      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            
              

            <form onSubmit={submitForm}>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Full Name</label>
                    <input type="text" className="form-control" name="fullname" value={data.fullname} onChange={InputEvent} id="exampleFormControlInput1" placeholder="Enter your Full Name"/>
                  </div>

                  <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Phone Number</label>
                    <input type="number" className="form-control" name="phonenumber" value={data.phonenumber} onChange={InputEvent} id="exampleFormControlInput1" placeholder="Enter your Mobile number"/>
                  </div>

                  <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Email address</label>
                    <input type="email" className="form-control" name="emailaddress" value={data.emailaddress} onChange={InputEvent} id="exampleFormControlInput1" placeholder="name@example.com"/>
                  </div>


                 
                  <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Message</label>
                    <textarea className="form-control" name="message" value={data.message} onChange={InputEvent} id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary mt-2">Submit</button>
          </form>

            
          </div>
        </div>
      </div>
    </>
  )
}



export default Contact;