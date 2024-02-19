import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

const OurClients = () => {
    return (
        <div className='my-20 lg:mx-0 md:mx-10 mx-5'>
            <div className="space-y-2 text-center lg:w-1/2 md:w-1/2 w-2/3 flex flex-col justify-center mx-auto mb-10">
                <p className="text-green-600 font-medium lg:mt-0 md:mt-5 mt-5" data-aos="fade-down">Sustainable Partnerships</p>
                <h1 className="text-3xl font-semibold dark:text-white" data-aos="fade-up">Our Valuable Clients</h1>
                <p className="text-xs dark:text-white" data-aos="zoom-in">Explore the impactful collaborations with our valuable clients who share our commitment to sustainability. From businesses to communities, we take pride in working together to create effective waste management solutions. Join our network of partners dedicated to making a positive impact on the environment and shaping a greener future.</p>
            </div>
            <Marquee>

                <Image
                    src="https://i.ibb.co/xsPSWNb/ecopetrol.png"
                    width={200}
                    height={100}
                    alt="Clients"
                    className='ml-10'
                ></Image>
                <Image
                    src="https://i.ibb.co/T2ScZGg/eco.png"
                    width={100}
                    height={50}
                    alt="Clients"
                    className='ml-10'
                ></Image>


                <Image
                    src="https://i.ibb.co/BnDK6pp/bjaj.png"
                    width={200}
                    height={100}
                    alt="Clients"
                    className='ml-10'
                ></Image>
                <Image
                    src="https://i.ibb.co/nkFCrmr/salon.png"
                    width={200}
                    height={100}
                    alt="Clients"
                    className='ml-10'
                ></Image>
                <Image
                    src="https://i.ibb.co/fHSggVw/starbucks.png"
                    width={200}
                    height={100}
                    alt="Clients"
                    className='ml-10'
                ></Image>
                <Image
                    src="https://i.ibb.co/wY4x7R8/bakery.png"
                    width={150}
                    height={75}
                    alt="Clients"
                    className='ml-10'
                ></Image>
                <Image
                    src="https://i.ibb.co/nc65PZc/huawei.png"
                    width={200}
                    height={100}
                    alt="Clients"
                    className='ml-10'
                ></Image>
                <Image
                    src="https://i.ibb.co/M9VrCb9/cocacola.png"
                    width={200}
                    height={100}
                    alt="Clients"
                    className='ml-10'
                ></Image>
                <Image
                    src="https://i.ibb.co/q9FbXbd/puma.png"
                    width={200}
                    height={100}
                    alt="Clients"
                    className='ml-10'
                ></Image>
            </Marquee>

        </div>

    );
};

export default OurClients;