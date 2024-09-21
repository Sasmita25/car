import React, { useState ,useContext} from "react";
import axios from 'axios';
import { Cprovider } from "./App1";

export default function Form({ selectCar, selectPickUp, selectDropOff, selectPickUpDate, selectDropOffDate, handleButtonClick,CloseForm, showForm }) {
  const [book, setBook] = useState({
    firstname: "", lastname: "", phonenumber: "", age: "", email: "", address: "", city: "", zipcode: ""
  });
  const [firstMsg,setFirstMsg]=useState("");
  const [lastMsg,setLastMsg]=useState("");
  const [ageMsg,setAgeMsg]=useState("");
  const [addressMsg,setAddressMsg]=useState("");
  const [phoneMsg,setPhoneMsg]=useState("");
  const [cityMsg,setCityMsg]=useState("");
  const [pincodeMsg,setPincodeMsg]=useState("");
  const [emailMsg,setEmailMsg]=useState("");
  // const [message,setMessage]=useState({
  //   firstMsg:"",lastMsg:"",phoneMsg:"",emailMsg:"",ageMsg:"",addressMsg:"",pincodeMsg:""
  // });
  const handleFirst = (e) => {
    setBook({ ...book, firstname: e.target.value });
  };
  const handleLast = (e) => {
    setBook({ ...book, lastname: e.target.value });
  };
  const handlePhone = (e) => {
    setBook({ ...book, phonenumber: e.target.value });
  };
  const handleAge = (e) => {
    setBook({ ...book, age: e.target.value });
  };
  const handleEmail = (e) => {
    setBook({ ...book, email: e.target.value });
  };
  const handleAddress = (e) => {
    setBook({ ...book, address: e.target.value });
  };
  const handleCity = (e) => {
    setBook({ ...book, city: e.target.value });
  };
  const handleZip = (e) => {
    setBook({ ...book, zipcode: e.target.value });
  };
  const c=useContext(Cprovider);
  const onSubmit = async (e) => {
    e.preventDefault();
    setFirstMsg("");
    setLastMsg("");
    setAddressMsg("");
    setAgeMsg("");
    setEmailMsg("");
    setCityMsg("");
    setPincodeMsg("");
    setPhoneMsg("");

    let regex = /^[a-zA-Z]+$/;
    let validation = true;
    //First name Validation
    if(book.firstname===""){
     setFirstMsg("Please type your firstname");
     validation=false;
    }else if(!regex.test(book.firstname)){
      setFirstMsg("Please enter only alphabets");
     validation=false;
    }
    //Last name Validation
    
    if(book.lastname===""){
     setLastMsg("* Please type your lastname");
     validation=false;
    }
    else if(!regex.test(book.lastname)){
      setLastMsg("Please enter only alphabets");
      validation=false;
    }
    //Age Validation

    if(book.age===""){
      setAgeMsg("* Please type your age");
      validation=false;
     }
     else if(isNaN(book.age)){
      setAgeMsg("* Please enter only digits");
      validation=false;
     }
    //E-mail Validation

     if(book.email===""){
      setEmailMsg("* Please type your email");
      validation=false;
     }else if(!book.email.includes('@')){
      setEmailMsg('* Please enter a valid email');
      validation=false;
     }

    //Phonenumber Validation

     if(book.phonenumber===""){
      setPhoneMsg("* Please type your phonenumber");
      validation=false;
     }else if(isNaN(book.phonenumber)){
      setPhoneMsg("* Please enter only digits");
      validation=false;
     }
    //Address Validation
     
     if(book.address===""){
      setAddressMsg("* Please type your address");
      validation=false;
     }

     //City name Validation
     if(book.city===""){
      setCityMsg("* Please type your city");
      validation=false;
     }else if(!regex.test(book.city)){
      setCityMsg("Please enter only alphabets");
      validation=false;
    }
    //Pincode Validation

     if(book.zipcode===""){
      setPincodeMsg("* Please type your pincode");
      validation=false;
     }
     else if(isNaN(book.zipcode)){
      setPincodeMsg("* Please enter only digits");
      validation=false;
     }

    const bookingData = {
      firstname: book.firstname,
      lastname: book.lastname,
      phonenumber: book.phonenumber,
      age: book.age,
      address: book.address,
      city: book.city,
      email: book.email,
      zip: book.zipcode,
      pickupdate: selectPickUpDate,
      dropoffdate: selectDropOffDate,
      pickuplocation: selectPickUp,
      dropofflocation: selectDropOff,
      carmodel: selectCar,
    };

    // if (firstMsg || lastMsg || cityMsg) {
    //   return; // Abort form submission
    // }
    console.log(c,"ghjghjg");
    console.log(bookingData);
    if (validation){
    try {
      const response = await axios.post("http://localhost:5002/api/Bookdata", bookingData);
      if (response.status === 200) {
        handleButtonClick();
        console.log("Response: Booking successful");
      } else {
        console.error("Error: Unsuccessful response", response);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  };

  console.log(c,book);

  return (
    <div className={`pointer-events-auto ${showForm ? 'fixed inset-0 bg-gray-200 bg-opacity-25' : ''}`}>
      <form className='h-screen overflow-auto inset-8 fixed bg-white shadow-2xl shadow-zinc-950 md:mx-24 xl:mx-20'>
        <div className="flex justify-between bg-red-500">
          <h1 className="font-extrabold text-white p-5">COMPLETE RESERVATION</h1>
          <button onClick={CloseForm} className="text-white font-extrabold pr-5">X</button>
        </div>

        <h1 className="p-7 text-red-500"><b>DETAILS</b></h1>
        <div className="grid grid-cols-2 mx-7 gap-3">
          <div>
            <h2 className="font-semibold mb-2">Pick up Date</h2>
            <p>{selectPickUpDate}</p>
          </div>
          <div>
            <h2 className="font-semibold mb-2">Drop off Date</h2>
            <p>{selectDropOffDate}</p>
          </div>
          <div>
            <h2 className="font-semibold mb-2">Pick up Location</h2>
            <p>{selectPickUp}</p>
          </div>
          <div>
            <h2 className="font-semibold mb-2">Drop off Location</h2>
            <p>{selectDropOff}</p>
          </div>
          <div>
            <h2 className="font-semibold mb-2">Car Name</h2>
            <p>{selectCar}</p>
          </div>
        </div>
        <hr className="mt-5 border-t-2 bg-gray-500" />

        <h1 className="p-7 text-red-500 font-extrabold">PERSONAL INFORMATION</h1>
        <div className="flex flex-wrap mx-7 pb-9">
          <div className="flex w-1/2 flex-col">
            <label className="font-semibold">First Name</label>
            <input type="text" className="mr-3 p-3 mt-2 bg-gray-200" onChange={handleFirst} placeholder="Enter your First Name" name="firstname" required />
            <label className="text-red-500 font-bold">{firstMsg}</label>
          </div>
          <div className="flex w-1/2 flex-col">
            <label className="font-semibold">Last Name</label>
            <input type="text" className="p-3 mt-2 bg-gray-200" onChange={handleLast} placeholder="Enter your Last Name" name="lastname" required />
            <label className="text-red-500 font-bold">{lastMsg}</label>
          </div>
          <div className="flex w-1/2 flex-col">
            <label className="font-semibold mt-2">Phone number</label>
            <input type="text" className="mr-3 p-3 mt-2 bg-gray-200" onChange={handlePhone} placeholder="Enter your Phone Number" name="phonenumber" required />
            <label className="text-red-500 font-bold">{phoneMsg}</label>
          </div>
          <div className="flex w-1/2 flex-col">
            <label className="font-semibold mt-2">Age</label>
            <input type="text" className="p-3 mt-2 bg-gray-200" onChange={handleAge} placeholder="Enter your Age" name="age" required />
            <label className="text-red-500 font-bold">{ageMsg}</label>
          </div>
          <div className="flex w-full flex-col">
            <label className="font-semibold mt-2">E-mail</label>
            <input type="text" className="p-3 mt-2 bg-gray-200" onChange={handleEmail} placeholder="Enter your email address" name="email" required />
            <label className="text-red-500 font-bold">{emailMsg}</label>
          </div>
          <div className="flex w-full flex-col">
            <label className="font-semibold mt-2">Address</label>
            <input type="text" className="p-3 mt-2 bg-gray-200" onChange={handleAddress} placeholder="Enter your Address" name="address" required />
            <label className="text-red-500 font-bold">{addressMsg}</label>
          </div>
          <div className="flex w-1/2 flex-col">
            <label className="font-semibold mt-2">City</label>
            <input type="text" className="p-3 mr-3 mt-2 bg-gray-200" onChange={handleCity} placeholder="Enter your City" name="city" required />
            <label className="text-red-500 font-bold">{cityMsg}</label>
          </div>
          <div className="flex w-1/2 flex-col">
            <label className="font-semibold mt-2">Zip Code</label>
            <input type="text" className="p-3 mt-2 bg-gray-200" onChange={handleZip} placeholder="Enter your Zip Code" name="zipcode" required />
            <label className="text-red-500 font-bold">{pincodeMsg}</label>
          </div>
          <input type="submit" onClick={onSubmit} className='bg-red-500 text-neutral-50 px-5 py-3 rounded my-4' value="Reserve Now" />
        </div>
      </form>
    </div>
  );
}
