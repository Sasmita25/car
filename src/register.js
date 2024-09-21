import { useState } from "react";
import axios from 'axios';


export default function Register({CloseRegForm}){

  const [regDetails,setRegDetails]=useState({
    userName:"",emailName:"",pass:"",conPass:""
  })
  // const [userName,setUserName]=useState("");
  // const [emailName,setEmailName]=useState("");
  // const [pass,setPass]=useState("");
  // const [conPass,setConPass]=useState("");

  const [userMsg,setUserMsg]=useState("");
  const [emailMsg,setEmailMsg]=useState("");
  const [passMsg,setPassMsg]=useState("");
  const [conPassmsg,setConPassMsg]=useState("");
  
  const [showInfo,setShowInfo]=useState("");
  const handleUserName=(e)=>{
    setRegDetails({...regDetails,userName:e.target.value})
  }

  const handleEmailName=(e)=>{
    setRegDetails({...regDetails,emailName:e.target.value})
  }

  const handlePassword=(e)=>{
    setRegDetails({...regDetails,pass:e.target.value})
  }
  
  const handleChangePassword=(e)=>{
    setRegDetails({...regDetails,conPass:e.target.value})
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    setUserMsg("");
    setEmailMsg("");
    setPassMsg("");
    setConPassMsg("");

    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&]).{6,15}$/;
    let validation = true;
    //First name Validation
    if(regDetails.userName===""){
     setUserMsg("Please type your firstname");
     validation=false;
    }
    //E-mail Validation

     if(regDetails.emailName===""){
      setEmailMsg("* Please type your email");
      validation=false;
     }else if(!regDetails.emailName.includes('@')){
      setEmailMsg('* Please enter a valid email');
      validation=false;
     }
   
    //Password Validation

    if (regDetails.pass === "") {
      setPassMsg("* Please type your password");
      validation = false;
  } else if (regDetails.pass.length < 6 || regDetails.pass.length > 15) {
      setPassMsg("* Length of the password should be between 6 and 15 characters");
      validation = false;
  } else if (!regex.test(regDetails.pass)) {
    setPassMsg("* Please type a password with the required criteria");
    validation = false;
}
    
    //Confirm Password Validation

     if(regDetails.conPass===""){
      setConPassMsg("* Please type your password");
      validation=false;
     }
     else if(regDetails.conPass !== regDetails.pass){
      setConPassMsg("* Password mismatch ");
      validation=false;
     }
    const formData = {
      username: regDetails.userName,
      emailid: regDetails.emailName,
      password: regDetails.pass,
      conpassword: regDetails.conPass,
    };
  
    console.log(formData);
    console.log(regDetails.pass);
    console.log(regDetails.pass.length);
    console.log(regex.test(regDetails.pass))
    if (validation){
    try {
      const response = await axios.post("https://carbackend-three.vercel.app/api/Regdata", formData);
      if (response.status === 200) {
        CloseRegForm();
        alert("Response: Registered successfully");
      } else {
        console.error("Error: Unsuccessful response", response);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  };

 const Info=()=>{
  setShowInfo(!showInfo);
 }
  console.log(regDetails);
    return(
        <div className="flex justify-center items-center ">
        <div className="pointer-events-auto flex justify-center items-center fixed inset-0 bg-gray-200 bg-opacity-25">
      <form className=' overflow-auto my-24 bg-white shadow-2xl shadow-zinc-950  xs:w-auto md:w-5/12 '>
        <div className="flex justify-between">
        <h1 className="p-7 text-red-500 font-extrabold ">CREATE AN ACCOUNT</h1>
        <button onClick={CloseRegForm} className="p-7 text-red-500 font-extrabold ">X</button>
        </div>
        <div className="flex flex-col flex-wrap mx-7 pb-9">
          <div className="flex flex-col">
            <label className="font-semibold">User Name</label>
            <input type="text" className="p-3 mt-2 bg-gray-200" onChange={handleUserName} placeholder="Enter your Username" name="firstname" required />
            <label className="text-red-500 font-bold">{userMsg}</label>
          </div>
          <div className="flex flex-col">
            <label className="font-semibold mt-2">E-mail</label>
            <input type="text" className="p-3 mt-2 bg-gray-200" onChange={handleEmailName} placeholder="Enter your email address" name="email" required />
            <label className="text-red-500 font-bold">{emailMsg}</label>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between mt-2">
            <label className="font-semibold">Password</label>
            <button onMouseEnter={Info} onMouseLeave={Info}>ℹ️</button>
            </div>
            {showInfo?<div className="mr-10 ml-8"><div className="bg-white border-red-500 border-2 ml-40 rounded-lg  z-1 absolute p-3">Password should contain atleast one uppercase,<br/>
            one lowercase, one digit 0-9 and <br/>
            one special character among @.#$!%*?& </div></div>:""}
            <input type="text" className="p-3 mt-2 bg-gray-200" onChange={handlePassword} placeholder="Enter your Password" name="phonenumber" required />
            <label className="text-red-500 font-bold">{passMsg}</label>
          </div>
          <div className="flex flex-col">
            <label className="font-semibold mt-2">Confirm Password</label>
            <input type="text" className="p-3 mt-2 bg-gray-200" onChange={handleChangePassword} placeholder="Enter your Password" name="email" required />
            <label className="text-red-500 font-bold">{conPassmsg}</label>
          </div>
          <input type="submit" onClick={onSubmit} className='bg-red-500 text-neutral-50 px-5 py-3 rounded my-4 w-26 font-bold' value=" REGISTER " />
        </div>
      </form>
    </div>
    </div>
    )
}
