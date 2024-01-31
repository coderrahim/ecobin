"use client"
import { TypeAnimation } from 'react-type-animation';
import Lottie from "lottie-react";
import bannerPic from "/src/banner.json"


const Banner = () => {
    return (
        <div className="-mt-24 flex items-center">
            <div className="bg-[url(https://i.ibb.co/fCw2ZyP/ecobin-hero1.jpg)] bg-cover lg:h-screen md:h-full h-full flex justify-center">
                <div className="flex lg:flex-row md:flex-row flex-col-reverse justify-between items-center mx-auto lg:px-40 md:px-20 px-5 lg:gap-20 md:gap-20 pt-10 gap-8 lg:my-0 md:my-16 my-14">
                    <div className="lg:w-1/2 md:w-1/2 w-full lg:space-y-3 md:space-y-2 space-y-0 lg:text-left md:text-left text-center">
                        <h1 className="lg:text-4xl md:text-2xl text-xl font-bold pb-5 text-[#24698C]" >
                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'Sustainable',
                                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                                    'Sustainable Solutions',
                                    1000,
                                    'Sustainable Solutions for a',
                                    1000,
                                    'Sustainable Solutions for a Cleaner',
                                    1000,
                                    'Sustainable Solutions for a Cleaner Tomorrow',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={50}
                                deletionSpeed={90}
                                style={{ fontSize: '1em', display: 'inline-block' }}
                                repeat={Infinity}
                            />
                        </h1>
                        <p className="lg:text-sm md:text-xs text-xs text-gray-600 text-justify pb-5">Explore innovative waste management practices and eco-friendly solutions that redefine the future of environmental stewardship. Join us in the journey towards a cleaner, greener planet.</p>
                        <button className='bg-green-600 text-sm text-white font-medium px-3 py-2 rounded-md hover:scale-105'>Explore Now</button>
                    </div>
                    <div className="lg:w-1/2 md:w-1/2 w-2/3">
                        <Lottie animationData={bannerPic} />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;