"use client"

import Lottie from "lottie-react";
import bannerPic from "/src/banner.json"


const Banner = () => {
    return (
        <div className="-mt-24 flex items-center">
            <div className="bg-[url(https://i.ibb.co/VjShMvB/banner-bg.jpg)] bg-cover lg:h-screen md:h-full h-full flex justify-center">
            <div className="flex lg:flex-row md:flex-row flex-col-reverse justify-between items-center mx-auto lg:px-40 md:px-20 px-5 lg:gap-20 md:gap-20 gap-8 pt-10 lg:my-0 md:my-16 my-14">
                <div className="lg:w-1/2 md:w-1/2 w-full space-y-3 lg:text-left md:text-left text-center">
                    <h1 className="lg:text-4xl md:text-2xl text-xl font-bold pb-5" >Sustainable Solutions for a Cleaner Tomorrow</h1>
                    <p className="lg:text-sm md:text-xs text-xs text-gray-600 text-justify pb-5">Explore innovative waste management practices and eco-friendly solutions that redefine the future of environmental stewardship. Join us in the journey towards a cleaner, greener planet.</p>
                    <button className='bg-green-600 text-sm text-white font-bold px-3 py-2 rounded-md hover:bg-gradient-to-t hover:from-[#00d9de] hover:to-[#0b4a75] hover:text-white'>Explore Now</button>
                </div>
                <div className="lg:w-1/2 md:w-1/2 w-2/3">
                    <Lottie animationData={bannerPic}/>
                </div>
            </div>

        </div>
        </div>
    );
};

export default Banner;