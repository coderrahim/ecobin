import Image from 'next/image';
import React from 'react';
import { BiSolidPhoneCall } from 'react-icons/bi';

const Pickup = () => {
    return (
        <div>
            <div className="space-y-2 text-center lg:w-1/2 md:w-1/2 w-2/3 flex flex-col justify-center mx-auto mt-10">
                <p className="text-green-600 font-medium lg:mt-0 md:mt-5 mt-5" data-aos="fade-down">Efficient Waste Collection for a Cleaner Tomorrow</p>
                <h1 className="text-3xl font-semibold dark:text-white" data-aos="fade-up">Pickup Schedule</h1>
                <p className="text-xs dark:text-white" data-aos="zoom-in">Enhance your waste management journey with our Pickup Scheduler. Plan, track, and optimize waste pickups effortlessly. Ensure timely and eco-friendly disposal through our user-friendly interface. Join us in fostering a cleaner environment, one efficient pickup at a time. Easy, responsible, and impactful waste management for everyone.</p>
            </div>

            <div>
            <div className="flex flex-col lg:mx-0 md:mx-10 mx-5 items-center justify-center bg-[url(https://i.ibb.co/2ZPGmS1/tuxpi-com-1709298599.jpg)] bg-cover bg-center bg-no-repeat h-[80vh] rounded-2xl">
            <div className='flex gap-6 pb-10'>
            <input type="text" placeholder="Description" className="input input-bordered input-success w-full text-xl border-2" />
            <input type="email" placeholder="Email" className="input input-bordered input-success w-full text-xl border-2" />
            <input type="date" placeholder="Date" className="input input-bordered input-success w-full text-xl border-2" />
            <input type="time" placeholder="Time" className="input input-bordered input-success w-full text-xl border-2" />
            </div>
                <button className="bg-green-600 text-white text-xl font-bold rounded-2xl px-8 py-4 hover:bg-gray-300 hover:text-black mt-3" data-aos="zoom-in">Pickup</button>
                <div className='gap-6 pt-10'>
            <button className="text-blue-600 border-2 border-blue-600 text-xl font-bold rounded-2xl px-8 py-4 flex items-center gap-4 hover:bg-gray-300  mt-3" data-aos="zoom-in"><Image src={"https://i.ibb.co/zmdRXQ2/Calendly.png"} height={50} width={50} alt='Calendly'></Image> Pickup with Calendly</button>
            <button className="text-yellow-600 border-2 border-yellow-600 text-xl font-bold rounded-2xl px-8 py-4 flex items-center gap-4 hover:bg-gray-300  mt-3" data-aos="zoom-in"><Image src={"https://i.ibb.co/PhWTVGn/Google-Calendar.png"} height={50} width={50} alt='Calendly'></Image> Pickup with Calendly</button>
            
            </div>
            </div>
            
            </div>
            
        </div>
    );
};

export default Pickup;