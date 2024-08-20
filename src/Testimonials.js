import icon from "./images/spk.png"
import joey from "./images/joey.jpeg"
import mess from "./images/m2.png"
import phoebe from "./images/ph.jpeg"
export default function Testimonials(){
   return( 
    <div className="bg-gray-100 p-20 w-full">
       <div className="flex justify-center items-center">
        <div className="p-6 text-center">
            <h3 className="font-bold text-2xl mt-12">Reviewed by People</h3>
            <h1 className="font-extrabold text-4xl mt-3">Client's Testimonials</h1>
            <p className="mt-4 text-gray-700">
            Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.
            </p>
            </div>
            </div>
<div className="md:flex justify-center items-center md:space-x-4 xs:space-y-4 md:space-y-0 mt-16 ">
  <div className="flex-1 flex-col max-w-lg h-80 bg-white pt-12 pb-5">
    <p className="flex justify-center items-start h-1/2 xs:text-sm font-medium md:text-md lg:text-xl sm:text-md xs:px-9 md:px-12">
      "We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable."
    </p>
    <div className="flex items-center justify-between md:mt-1 xs:px-9 md:px-20 h-1/2">
      <div className="flex justify-center items-center">
        <img src={joey} className="rounded-full xs:h-16 h-20" />
        <div className="text-left ml-3">
          <p className="font-bold md:text-sm">Joey Tribbiani</p>
          <p className="md:text-sm">New York</p>
        </div>
    </div>
      <img src={mess} className="xs:hidden sm:block ml-20"/>
    </div>
  </div>

  <div className="flex-1 flex-col max-w-lg h-80 bg-white pt-12 pb-5">
  <p className="flex justify-center items-start h-1/2 xs:text-sm font-medium md:text-md lg:text-xl xs:px-9 md:px-12">
    "The car was in great condition and made our trip even better. Highly recommend for this car rental website!"
  </p>
  <div className="flex items-center justify-between md:mt-1 xs:px-9 md:px-20 h-1/2">
    <div className="flex justify-center items-center">
      <img src={phoebe} className="rounded-full xs:h-16 h-20" />
      <div className="text-left ml-3">
        <p className="font-bold md:text-sm">Phoebe Buffay</p>
        <p className="md:text-sm">Paris</p>
      </div>
    </div>
    <img className="xs:hidden sm:block ml-20 h-12" src={mess} />
  </div>
</div>

</div>

    </div>


   )
}