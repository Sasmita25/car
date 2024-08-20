export default function Footer(){
    return(
        <div className="md:flex xs:space-y-12 md:space-y-0 md:space-x-4 text-md md:p-9 p-20">
            <div className="md:flex-1 space-y-3 md:max-w-[25%]">
            <h1 className="font-bold text-xl">CAR RENTAL</h1>
            <h4 className=" text-gray-500">We offers a big range of vehicles for all your driving needs.
                 We have the perfect car to meet your needs.</h4>
            <h4>📞 123-456-789</h4>
            <h4>💌 toyorental@gmail.com</h4>
            </div>
            <div className="md:flex-1 space-y-3 md:max-w-[25%]">
                <h1 className="font-bold text-xl ">COMPANY</h1>
                <h4 className="mt-5">Careers</h4>
                <h4>Blog</h4>
                <h4>How we work</h4>
            </div>
            <div className="md:flex-1 space-y-3 md:max-w-[25%]">
                <h1 className="font-bold text-xl">WORKING HOURS</h1>
                <h4 className="mt-5">Mon - Fri: 9:00AM - 9:00PM</h4>
                <h4>Sat: 9:00AM - 19:00PM</h4>
                <h4>Sun: Closed</h4>
           </div>
            <div className="md:flex-1 space-y-3 md:max-w-[25%]">
                <h1 className="font-bold text-xl">SUBSCRIPTION</h1>
                <h4 className="mt-5">Subscribe your Email address for latest news & updates.</h4>
                <div className="flex flex-col space-y-2">
                <input className="p-4 bg-gray-100" type="text" placeholder="Enter Email Address"/>
                <button className="p-4 bg-red-500 text-white">Submit</button>
                </div>
            </div>
        </div>
    )
}