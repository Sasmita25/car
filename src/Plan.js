import caric from './images/car.png';
import spk from './images/operator.png';
import drive from './images/steering-wheel.png';

export default function Plan(){
    return(
        <div className='mb-10'>
            <div  className="text-center my-7 py-3">
            <h1 className="font-bold text-2xl">Plan Your Trip Now</h1>
            <h3 className="font-extrabold text-4xl mt-3">Quick & easy Car Rental</h3>
            </div>
            <div className="xl:flex xl:px-40  py-2 mt-12">
            <div className="mr-6">
        <div className="flex justify-center">
            <img className="mt-2 w-28 h-auto" src={caric} alt="Car Image"/>
        </div>
        <h3 className="flex justify-center text-lg font-bold mt-2">Select Car</h3>
        <p className="text-center mt-3 px-2 text-gray-600">
            We offer a big range of vehicles for all your driving needs. 
            We have the perfect car to meet your needs.
        </p>
    </div>
            {/* <div className="mr-6 py-3 justify-center">
            <img className="flex justify-center items-center ml-12" src={caric}/>
                <h3 className=" flex justify-center text-xl font-bold">Select Car</h3>
                <p className="text-center mt-3 px-2 text-gray-600">We offers a big range of vehicles for all your driving needs. 
                    We have the perfect car to meet your needs</p>
            </div> */}
            <div className="mr-6">
                <div className='flex justify-center'>
            <img src={spk} className="mt-2 w-28 h-auto"/>
            </div>
                <h3 className=" flex justify-center text-lg font-bold mt-2">Contact Operator</h3>
                <p className="text-center mt-3 px-2 text-gray-600">Our knowledgeable and friendly operators are always ready
                     to help with any questions or concerns</p>
            </div>
            <div className="mr-6">
                <div className='flex justify-center'>
            <img src={drive} className="mt-2 w-28 h-auto"/>
            </div>
                <h3 className=" flex justify-center text-lg font-bold mt-2">Let's Drive</h3>
                <p className="text-center mt-3 px-2 text-gray-600">Whether you're hitting the open road, we've got you covered 
                    with our wide range of cars</p>
            </div>
            </div>
        </div>
    )
}