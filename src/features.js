import cars from "./images/nissa.png";
import caric from './images/dollar.png';
import spk from './images/self-driving.png';

export default function Features(){
    return(
        <div className="my-12">
            <div className="flex items-center justify-center mt-24">
       <img src={cars} className="w-8/12"/>
       </div>
       <div className="md:flex">
       
       <div  className="flex-column md:w-1/2 md:ml-12 md:px-5 mx-8">
        <h3 className="font-bold text-xl">Why choose us?</h3>
        <h1 className="font-extrabold text-4xl mt-3">Best valued deals you will ever find</h1>
        <p className="mt-4 text-gary-700">Discover the best deals you'll ever find with 
        our unbeatable offers. We're dedicated to providing you with the best value 
        for your money, so you can enjoy top-quality services and products 
        without breaking the bank. Our deals are designed to give you the
         ultimate renting experience, so don't miss out on your chance to save big. Whether you're looking for short-term or long-term rentals, we've got the perfect options to meet your needs. Start saving today and experience 
         the difference with our exceptional offers.
        </p>
       </div>

    <div className="flex-column md:w-1/2 mr-12 pl-5 mt-12">
    <div className="flex">
        <div className="mr-5">
            <img className="h-22 w-28" src={spk}/>
        </div>
        <div>
            <h1 className="font-extrabold text-2xl">
            Cross Country Drive
            </h1>
            <h3 className="text-gray-700">
            Take your driving experience to the next level 
            with our top-notch vehicles for your cross-country adventures.
            </h3>
        </div>
    </div>
        <div className="flex mt-5">
        <div className="mr-5">
            <img className="h-22 w-28" src={caric}/>
            </div>
            <div>
            <h1 className="font-extrabold text-2xl">
            All Inclusive Pricing
            </h1>
            <h3 className="text-gray-700">
            Get everything you need in one convenient, transparent price 
            with our all-inclusive pricing policy.
            </h3>
            </div>
        </div>
       </div>
    </div>
    </div>
    )
}