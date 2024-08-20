import './index.css';
import car from './images/carr.png';
import logo from './images/logo.png';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Form from './form';
import Plan from './Plan';
import Features from './features';
import Testimonials from './Testimonials';
import  Register from './register';
import Login from './signin';
import Footer from './footer';
function Appp() {
  // const cars=['Select an Option','Audi','Toyota','Tavera','Xylo'];
  const [cars,setCars]=useState([]);
  const [location,setLocation]=useState([]);
  const [selectCar,setSelectCar]=useState('--Select the car model--');
  const [selectPickUp,setSelectPickUp]=useState('--Select the pickup location--');
  const [selectDropOff,setSelectDropOff]=useState('--Select the dropoff location--');
  const [selectPickUpDate,setPickUpDate]=useState('');
  const [selectDropOffDate,setDropOffDate]=useState('');

  const [showForm, setShowForm] = useState(false);
  const [showRegForm,setShowRegForm]=useState(false);
  const [showLoginForm,setShowLoginForm]=useState(false);
  const [showUser,setShowUser]=useState(false);

  const [displayName,setDisplayName]=useState("");

  const [carMessage,setCarMessage]=useState("");
  const [locationPickMsg,setLocationPickMsg]=useState("");
  const [locationDropMsg,setLocationDropMsg]=useState("");
  const [datePickMsg,setDatePickMsg]=useState("");
  const [dateDropMsg,setDateDropMsg]=useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5002/api/Model');
        setCars(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5002/api/Location');
        setLocation(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleButtonClick = () => {
    if(displayName === ""){
      window.alert("Please SIGN IN to continue");
      return;
    }

    setCarMessage("");
    setLocationPickMsg("");
    setLocationDropMsg("");
    setDatePickMsg("");
    setDateDropMsg("");

    if (selectCar === '--Select the car model--') {
      setCarMessage("* Please select the model type");
    }
    if (selectPickUp === '--Select the pickup location--') {
      setLocationPickMsg('* Please select the pickup location');
    }
    if (selectDropOff === '--Select the dropoff location--') {
      setLocationDropMsg('* Please select the dropoff location');
    }
    if (selectPickUpDate === "") {
      setDatePickMsg('* Please select the pickup date');
    }
    if (selectDropOffDate === "") {
      setDateDropMsg('* Please select the dropoff date');
    }

    if (selectCar !== '--Select the car model--' && selectPickUp !== '--Select the pickup location--' && 
        selectDropOff !== '--Select the dropoff location--' && selectPickUpDate !== "" && selectDropOffDate !== "") {
      setShowForm(!showForm);
      console.log("handleButtonClick executed");
    }
  };

  const CloseForm=()=>setShowForm(!showForm);
  const CloseRegForm=()=>setShowRegForm(!showRegForm);
  const CloseLoginForm=()=>setShowLoginForm(!showLoginForm);
  const SignOut=()=>{
    setDisplayName("");
    setShowUser(!showUser);
  }
  const handleCarChange =(e) =>{
    setSelectCar(e.target.value)
  }
  const handlePickUp=(e)=>{
    setSelectPickUp(e.target.value);
  }
  const handleDropOff=(e)=>{
    setSelectDropOff(e.target.value);
  }
  const handlePickUpDate=(e)=>{
    setPickUpDate(e.target.value);
  }
  const handleDropOffDate=(e)=>{
    setDropOffDate(e.target.value);
  }
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={` ${showForm ? "pointer-events-none " : ""} w-full overflow-hidden`}>
      <div>
      <nav className="flex items-center justify-between text-lg flex-wrap p-6 bg-gray-100 ">
  <div className="flex items-center flex-shrink-0 mr-6">
    <img src={logo} className="h-14 mr-2" alt="TOYO RENTAL Logo" />
    <p className="font-bold text-xl">
      TOYO <br />
      RENTAL
    </p>
  </div>
  <div className="block lg:hidden">
  <button onClick={toggleMenu} className="flex items-center px-3 py-2 border-black rounded  text-white">
    <svg className="w-6 h-6" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
    </svg>
  </button>
</div>
  <div className={`w-full block font-bold  lg:flex lg:items-center lg:justify-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`}>
    <ul className="lg:flex-grow">
      <li className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-300 mr-4">
        Home
      </li>
      <li className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-300 mr-4">
        Vehicle Models
      </li>
      <li className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-300 mr-4">
        About Us
      </li>
      <li className="block mt-4 lg:inline-block lg:mt-0  hover:text-gray-300">
        Contact Us
      </li>
    </ul>
    <div className="lg:ml-4 md:flex xs:mt-4 md:mt-4 lg:mt-0  ">
      {!showUser ? (
        <>
          <button onClick={CloseLoginForm} className=" lg:px-4 xs:pr-9 py-2  ">Sign in</button>
          <button onClick={CloseRegForm} className="bg-red-500 text-neutral-50 px-4 py-2 border rounded hover:bg-red-700">Register</button>
        </>
      ) : (
        <button onClick={SignOut} className="bg-red-500 text-neutral-50 px-4 py-2 border rounded hover:bg-red-700">Sign Out</button>
      )}
    </div>
  </div>
</nav>

{showUser ? (
  <div className="ml-10 mt-12 text-3xl font-extrabold">
    Welcome, <span className="text-red-500">{displayName}</span>
  </div>
) : ""}

        <div className='flex mt-24 px-10'>
          <div>
        <p className=" font-bold text-xl">Plan your Trip</p>
        <p className="my-4 text-5xl font-bold">Save <span className='text-red-500'>big</span> with our car rental</p>
<p className="my-4 text-neutral-500">Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>
<div className='space-x-4 text-neutral-500 flex items-center'>
            <a className='bg-red-500 text-neutral-50 mb-5 px-4 py-2 rounded'>Book Your Ride →</a>
          </div>
</div>
        <img src={car} className="xs:hidden md:block" style={{width:'700px'}}/>
        </div>
        </div>
    <div className='bg-custom-image h-full'>
      <p className='ml-12 pt-12 font-bold text-3xl'>Book a car</p>
      <div className='sm:grid sm:grid-cols-3 mt-4 py-12 px-12'>
        <div className='mr-5'>
      <h1 className='font-bold'>Car model</h1>
      <select className='h-12 rounded mr-5 w-full mt-4' onChange={handleCarChange} >
      <option>{selectCar}</option>
       {cars.map((car,index) => (
        <option value={car.name} key={index}>{car.name}</option>
        // <option key={index}>{cars[index].name}{car.name}</option>
       ))}
      </select>
      <label className='text-red-500 text-sm'>{ carMessage}</label>
      </div>
      <div className='mr-5'>
      <h1 className='font-bold'>Pick up</h1>
      <select className='h-12 rounded w-full mt-4' onChange={handlePickUp}>
      <option>{selectPickUp}</option>
        {location.map((locations,index)=>(
          <option key={index}>{locations.district}</option>
        ))}
      </select>
      <label className='text-red-500 text-sm'>{ locationPickMsg}</label>

      </div>
      <div className='mr-5'>
      <h1 className='font-bold'>Drop off</h1>
      <select className='h-12 rounded w-full mt-4' onChange={handleDropOff}>
        <option selected='selected'>{selectDropOff}</option>
        {location.map((locations,index)=>(
          <option key={index}>{locations.district}</option>
        ))}
      </select>
      <label className='text-red-500 text-sm'>{ locationDropMsg}</label>
      </div>
      <div className='mr-5 mt-6'>
      <h1 className='font-bold'>Pickup date</h1>
      <input onChange={handlePickUpDate} className='mt-4 h-12 w-full rounded mr-3' type="date" name="trip-start"/>
      <label className='text-red-500 text-sm'>{ datePickMsg}</label>
      </div>
      
      <div className='mr-5 mt-6'>
      <h1 className='font-bold'>Dropoff date</h1>
      <input onChange={handleDropOffDate} className='mt-4 h-12 w-full rounded mr-3' type="date" name="trip-end" />
      <h1 className='text-red-500 text-sm'>{dateDropMsg}</h1>
      </div>

      <input type='button'  onClick={handleButtonClick} value='Confirm' className='bg-red-500 h-12 text-neutral-50 mt-16 rounded flex w-full  items-center justify-center'/>
 
    </div>
    {/* {showForm && <Form car={cars}/>} */}
    
    </div>
    {showForm &&  <Form car={cars} handleButtonClick={handleButtonClick} CloseForm={CloseForm}selectCar={selectCar} setSelectCar={setSelectCar} selectPickUp={selectPickUp} selectDropOff={selectDropOff} 
    selectPickUpDate={selectPickUpDate} selectDropOffDate={selectDropOffDate}/>}
    <Plan/>
    <Features/>
    <Testimonials/>
    <Footer/>
    {showRegForm && <Register CloseRegForm={CloseRegForm} />}
    {showLoginForm && <Login CloseLoginForm={CloseLoginForm} setDisplayName={setDisplayName} setShowUser={setShowUser}/>}
    </div>
  );
}

export default Appp;