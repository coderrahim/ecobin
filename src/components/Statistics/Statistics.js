"use client"
import { BsRocketFill, BsPersonHeart } from "react-icons/bs";
import { MdAutoGraph } from "react-icons/md";
import { FaAward } from "react-icons/fa6";
import React from 'react';
import CountUp from 'react-countup';

const Statistics = () => {
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:mx-20 md:mx-20 mx-5 gap-6 
        lg:-mt-12 md:mt-14 mt-14 text-white mb-20'>
            <div className="flex items-center gap-4 bg-green-600 p-6 rounded-2xl">           
            <BsRocketFill className="text-6xl"/>
                <div>
                <h1 className="text-3xl text-white font-semibold"><CountUp
                    end={90}
                    duration={5}
                />+</h1>
                <p className="text-xs text-white font-medium">Successful Projects</p>

                </div>
            </div>
            <div className="flex items-center gap-4 bg-green-600 p-6 rounded-2xl">           
            <BsPersonHeart className="text-6xl"/>
                <div>
                <h1 className="text-3xl text-white font-semibold"><CountUp
                    end={70}
                    duration={5}
                />+</h1>
                <p className="text-xs text-white font-medium">Satisfied Clients</p>
                </div>
            </div>
            <div className="flex items-center gap-4 bg-green-600 p-6 rounded-2xl">           
            <MdAutoGraph className="text-6xl"/>
                <div>
                <h1 className="text-3xl text-white font-semibold"><CountUp
                    end={20}
                    duration={5}
                />+</h1>
                <p className="text-xs text-white font-medium">Year of experience</p>
                </div>
            </div>
            <div className="flex items-center gap-4 bg-green-600 p-6 rounded-2xl">           
            <FaAward className="text-6xl"/>
                <div>
                <h1 className="text-3xl text-white font-semibold"><CountUp
                    end={17}
                    duration={5}
                />+</h1>
                <p className="text-xs text-white font-medium">Awards Winning</p>
                </div>
            </div>
        </div>
    );
};

export default Statistics;