import { useState } from "react";
import axios from 'axios';


export default function Login({CloseLoginForm,setDisplayName,setShowUser}){

  const [loginDetails,setLoginDetails]=useState({
    userName:"",pass:""
  })

  const [userMsg,setUserMsg]=useState("");

  const handleUserName=(e)=>{
    setLoginDetails({...loginDetails,userName:e.target.value})
  }
  const handlePassword=(e)=>{
    setLoginDetails({...loginDetails,pass:e.target.value})
  }
  

  const onSubmit = async (e) => {
    e.preventDefault();
    setUserMsg("");

    // let validation = true;

    if(loginDetails.userName=="" || loginDetails.pass==""){
        setUserMsg("* Please enter the fields");
        return;
    }
 
    try {
      const response = await axios.get("https://carbackend-three.vercel.app/api/Regdata");
      if (response.status === 200) {
        const loginUser = response.data.find(user => user.username === loginDetails.userName);
        const loginPassword = response.data.find(pass=>pass.password === loginDetails.pass); 
        if(loginUser && loginPassword){
        alert("Response: Signed in successfully");
        setDisplayName(loginUser.username);
        setShowUser(true);
        CloseLoginForm();
        }
        else if(!loginUser && !loginPassword){
            setUserMsg("* Both username and password is incorrect");
        }else if(!loginUser){
            setUserMsg(" * No user found ,Please register before continue");
        }
        else if(!loginPassword){
            setUserMsg(" * Incorrect password");
        }
        
        // CloseLoginForm();
      } else {
        console.error("Error: Unsuccessful response", response);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  
  };

 
    return(
        <div className="flex justify-center items-center">
        <div className="pointer-events-auto flex justify-center items-center fixed inset-0 bg-gray-200 bg-opacity-25">
      <form className=' overflow-auto  my-52 bg-white shadow-2xl shadow-zinc-950   xs:w-auto md:w-5/12  '>
        <div className="flex justify-between">
        <h1 className="p-7 text-red-500 font-extrabold ">LOGIN</h1>
        <button onClick={CloseLoginForm} className="p-7 text-red-500 font-extrabold ">X</button>
        </div>
        <div className="flex flex-col flex-wrap mx-7 pb-9">
          <div className="flex flex-col">
          <label className="text-red-500 font-bold">{userMsg}</label>
            <label className="font-semibold">User Name</label>
            <input type="text" className="p-3 mt-2 bg-gray-200" onChange={handleUserName} placeholder="Enter your Username" name="firstname" required />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold">Password</label>
            <input type="text" className="p-3 mt-2 bg-gray-200" onChange={handlePassword} placeholder="Enter your Password" name="phonenumber" required />
          </div>
          <input type="submit" onClick={onSubmit} className='bg-red-500 text-neutral-50 px-5 py-3 rounded my-4 w-26 font-bold' value=" LOGIN " />
        </div>
      </form>
    </div>
    </div>
    )
}
