import './index.css';
import car from './images/carr.png';
import logo from './images/logo.png';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Form from './form';

function App() {
  // const cars=['Select an Option','Audi','Toyota','Tavera','Xylo'];
  const [cars,setCars]=useState([]);
  const [location,setLocation]=useState([]);
  const [selectCar,setSelectCar]=useState('');
  const [selectPickUp,setSelectPickUp]=useState('');
  const [selectDropOff,setSelectDropOff]=useState('');
  const [selectPickUpDate,setPickUpDate]=useState('');
  const [selectDropOffDate,setDropOffDate]=useState('');
  const [showForm, setShowForm] = useState(false);

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
    setShowForm(!showForm);
    console.log("handleButtonClick executed");
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
    <div className='bg-gray-100'>
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
    <div className='bg-custom-image'>
      <p className='flex justify-center items-center font-bold text-3xl'>Book a car</p>
      <div className='grid grid-cols-3 mt-4 py-12 px-12'>
      <select className='h-12 rounded mr-3' onChange={handleCarChange}>
       {cars.map((car,index) => (
        <option value={car.name} key={index}>{car.name}</option>
        // <option key={index}>{cars[index].name}{car.name}</option>
       ))}
      </select>
      <select className='h-12 rounded' onChange={handlePickUp}>
      <option>--Select the pickup location--</option>
        {location.map((locations,index)=>(
          <option key={index}>{locations.district}</option>
        ))}
      </select>
      <select className='h-12 rounded' onChange={handleDropOff}>
        <option selected='selected'>--Select the dropoff location--</option>
        {location.map((locations,index)=>(
          <option key={index}>{locations.district}</option>
        ))}
      </select>
      <input onChange={handlePickUpDate} className='mt-12 h-12 rounded mr-3' type="date" name="trip-start" />
      <input onChange={handleDropOffDate} className='mt-12 h-12 rounded mr-3' type="date" name="trip-end" />
      <input type='button' onClick={handleButtonClick} value='Confirm' className='bg-red-500 text-neutral-50 mt-12 flex items-center justify-center'/>
    </div>
    {/* {showForm && <Form car={cars}/>} */}
    
    </div>
    {showForm &&  <Form car={cars} showForm={showForm} setShowForm={setShowForm} handleButtonClick={handleButtonClick} selectCar={selectCar} selectPickUp={selectPickUp} selectDropOff={selectDropOff} 
    selectPickUpDate={selectPickUpDate} selectDropOffDate={selectDropOffDate}/>}
    </div>
  );
}

export default App;
