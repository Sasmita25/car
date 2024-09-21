import './index.css';
import car from './images/carr.png';
import logo from './images/logo.png';
import { useState,useEffect,createContext } from 'react';
import axios from 'axios';
import Form from './form';
import Plan from './Plan';
import Features from './features';
import Testimonials from './Testimonials';
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
  const [ carMessage,setCarMessage]=useState("");
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
  const Cprovider=createContext();
  // const handleButtonClick = () => {
  //   setShowForm(!showForm);
  //    console.log("handleButtonClick executed");
  // };
 
  // const handleButtonClick = () => {
  //   if(selectCar === '--Select the car model--' || selectPickUp == '--Select the pickup location--' || 
  //   selectDropOff === '--Select the dropoff location--' || selectPickUpDate === "" || selectDropOffDate === ""){
  //   if(selectCar === '--Select the car model--'){
  //     setCarMessage("* Please select the model type")
  //   }else{
  //     setCarMessage("")
  //   }
  //   if(selectPickUp == '--Select the pickup location--'){
  //     setLocationPickMsg('* Please select the pickup location')
  //   }else{
  //     setLocationPickMsg("")
  //   }
  //   if(selectDropOff === '--Select the dropoff location--'){
  //     setLocationDropMsg('* Please select the dropoff location')
  //   }else{
  //     setLocationDropMsg("")
  //   }
  //   if(selectPickUpDate === ""){
  //     setDatePickMsg('* Please select the pickup date')
  //   }
  //   else{
  //     setDatePickMsg('');
  //   }
  //   if(selectDropOffDate === ""){
  //     setDateDropMsg('* Please select the dropoff date')
  //   }
  //   else{
  //     setDateDropMsg('');
  //   }
  // }
  //   else{
  //     setCarMessage("");
  //     setLocationPickMsg("");
  //     setLocationDropMsg("");
  //     setDatePickMsg('');
  //     setDateDropMsg('');
  //    setShowForm(!showForm);
  //    console.log("handleButtonClick executed");
  //   }
    
  // };
  const handleButtonClick = () => {
    // Reset messages
    setCarMessage("");
    setLocationPickMsg("");
    setLocationDropMsg("");
    setDatePickMsg("");
    setDateDropMsg("");

    // Validation
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

    // Show form if no validation messages
    if (selectCar !== '--Select the car model--' && selectPickUp !== '--Select the pickup location--' && 
        selectDropOff !== '--Select the dropoff location--' && selectPickUpDate !== "" && selectDropOffDate !== "") {
      setShowForm(!showForm);
      console.log("handleButtonClick executed");
    }
  };

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
  return (
    <div className={` ${showForm ? "pointer-events-none " : ""}`}>
      <div>
        <nav className='flex justify-between p-8'>
        <div className='flex items-center'>
        <img src={logo} className="h-14" />
        <p className='font-bold'>TOYO <br/>RENTAL</p>
      </div>
          <ul className='flex space-x-4 font-semibold'>
            <li>Home</li>
            <li>Vehicle Modals</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
          <div className='space-x-4 font-semibold'>
            <a>Sign In</a>
            <a className='bg-red-500 text-neutral-50 px-5 py-3 rounded'>Register</a>
          </div>
        </nav>
        <div className='flex mt-24 px-10'>
          <div>
        <p className="my-4 font-bold text-xl">Plan your Trip</p>
        <p className="my-4 text-5xl font-bold">Save <span className='text-red-500'>big</span> with our car rental</p>
<p className="my-4 text-neutral-500">Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>
<div className='space-x-4 text-neutral-500 flex items-center'>
            <a className='bg-red-500 text-neutral-50 px-4 py-2 rounded'>Book Your Ride →</a>
          </div>
</div>
        <img src={car} style={{width:'700px'}}/>
        </div>
        </div>
    <div className='bg-custom-image h-full'>
      <p className='ml-12 pt-12 font-bold text-3xl'>Book a car</p>
      <div className='grid grid-cols-3 mt-4 py-12 px-12'>
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
      <div>
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
      <input type='button' onClick={handleButtonClick} value='Confirm' className='bg-red-500 h-12 text-neutral-50 mt-16 flex items-center justify-center'/>
    </div>
    {/* {showForm && <Form car={cars}/>} */}
    
    </div>
    <Cprovider.Provider value={cars}>
    {showForm &&  <Form handleButtonClick={handleButtonClick} selectCar={selectCar} setSelectCar={setSelectCar} selectPickUp={selectPickUp} selectDropOff={selectDropOff} 
    selectPickUpDate={selectPickUpDate} selectDropOffDate={selectDropOffDate}/>}
    </Cprovider.Provider>
    <Plan/>
    <Features/>
    <Testimonials/>
    <Footer/>
    </div>
  );
}

export default Appp;