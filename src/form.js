import React, { useState } from "react";
import axios from 'axios';

export default function Form({selectCar,selectPickUp,selectDropOff,selectPickUpDate,selectDropOffDate,handleButtonClick}){
  const [book,setBook]=useState({firstname:"",lastname:"",phonenumber:"",age:"",email:"",address:"",city:"",zipcode:""});
  const handleFirst=(e)=>{
      setBook({...book,firstname:e.target.value});
  }
  const handleLast=(e)=>{
    setBook({...book,lastname:e.target.value})
  }
  const handlePhone=(e)=>{
    setBook({...book,phonenumber:e.target.value})
  }
  const handleAge=(e)=>{
    setBook({...book,age:e.target.value})
  }
  const handleEmail=(e)=>{
    setBook({...book,email:e.target.value})
  }
  const handleAddress=(e)=>{
    setBook({...book,address:e.target.value})
  }
  const handleCity=(e)=>{
    setBook({...book,city:e.target.value})
  }
  const handleZip=(e)=>{
    setBook({...book,zipcode:e.target.value})
  }
  const onSubmit = async (e) => { 
    e.preventDefault(); 
    const bookingData = { 
      firstname: book.firstname,
      lastname : book.lastname,
      phonenumber : book.phonenumber,
      age : book.age,
      address: book.address,
      city:book.city,
      zip:book.zipcode,
      pickupdate: selectPickUpDate,
      dropoffdate: selectDropOffDate,
      pickuplocation: selectPickUp,
      dropofflocation: selectDropOff,
      carmodel: selectCar,
    }; 
    console.log(bookingData);
    try {
      // const response = await axios.post("http://localhost:5002/api/Bookdata", bookingData).then(handleButtonClick());
     await axios.post("http://localhost:5002/api/Bookdata", bookingData).then(handleButtonClick());
      console.log("hai");
      // console.log("Response: ", response.data);
    } catch (error) {
      console.error(error);
      console.log("bye");
    }
};
  console.log(book);
  
return(
   <div>
      <form onSubmit={onSubmit} className='bg-gray-300 mx-64'>
            {/* <h1>Location and Date</h1> */}
    <h1 className="bg-red-500 flex font-extrabold justify-center items-center text-white p-5">COMPLETE RESERVATION</h1>
            
    <h1 className="p-7"><b>DETAILS</b></h1>

        <div className="grid grid-cols-2 mx-7 gap-3 ">
            <div>
            <h2 className="font-semibold">Pick up Date</h2>
            <p>{selectPickUpDate}</p>
            </div>
            <div>
            <h2 className="font-semibold">Drop off Date</h2>
            <p>{selectDropOffDate}</p>
            </div>
            <div>
            <h2 className="font-semibold">Pick up Location</h2>
            <p>{selectPickUp}</p>
            </div>
            <div>
            <h2 className="font-semibold">Drop off Location</h2>
            <p>{selectDropOff}</p>
            </div>
            <div>
            <h2 className="font-semibold">Car Name</h2>
            <p>{selectCar}</p>
            </div>
        </div>
        <hr className="mt-5"/>
        <h1 className="p-7 font-extrabold">PERSONAL INFORMATION</h1>
        <div className="flex flex-wrap mx-7 pb-9">
        <div className="flex w-1/2">
        <label className="font-semibold">First Name</label>
        <input type="text" onChange={handleFirst} placeholder="Enter your First Name" name="email" required />
        </div>
        <div className="flex w-1/2">
        <label className="font-semibold">Last Name</label>
        <input type="text" onChange={handleLast} placeholder="Enter your Last Name" name="psw" required />
        </div>
        <div className="flex w-1/2">
        <label className="font-semibold">Phone number</label>
        <input type="text" onChange={handlePhone} placeholder="Enter your Phone Number" name="email" required />
        </div>
        <div className="flex w-1/2">
        <label className="font-semibold">Age</label>
        <input type="text" onChange={handleAge} placeholder="Enter your Age" name="email" required />
        </div>
        <div className="flex w-1/2">
        <label className="font-semibold">E-mail</label>
        <input type="text" onChange={handleEmail} placeholder="Enter your email address" name="email" required />
        </div>
        <div className="flex w-1/2">
        <label className="font-semibold">Address</label>
        <input type="text" onChange={handleAddress} placeholder="Enter your Address" name="psw" required />
        </div>
        <div className="flex w-1/2">
        <label className="font-semibold">City</label>
        <input type="text" onChange={handleCity} placeholder="Enter your City" name="psw" required />
        </div>
        <div className="flex w-1/2">
        <label htmlFor="psw" className="font-semibold">Zip Code</label>
        <input type="text" onChange={handleZip} placeholder="Enter your Zip Code" name="psw" required />
        <input type="submit"  onClick={onSubmit} className='bg-red-500 text-neutral-50 px-5 py-3 rounded' value="Submit"/>
        </div>
        </div>
      </form>
      
    </div>
)
}