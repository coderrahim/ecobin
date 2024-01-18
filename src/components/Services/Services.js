import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import services from "../../../public/services.json"

const Services = () => {
    return (
        <div className='max-w-7xl mx-auto px-2 mb-2'>
            <h1 className="text-green-500 text-4xl lg:text-5xl py-10 font-bold text-center">Servicess</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5'>
                {
                    services.map(service => {
                        return <Link href="#" key={service.id}>
                            <div className='border hover:-top-1 relative shadow'>
                                <Image className='border-b-4 border-b-green-500' src={service.image} width={0} height={0} style={{ width: '100%' }} sizes="100vw" alt='Service Image' />
                                <div className='p-5'>
                                    <h1 className='mb-5 text-green-500 font-bold'>{service.serviceName}</h1>
                                    <p className='mb-5'>{service.description}</p>
                                    {
                                        service.description.length > 180 ? <p className='text-end text-[#858a8c]'>Show Details</p> : null
                                    }
                                </div>
                            </div>
                        </Link>
                    })
                }
            </div>
        </div>
    );
};

export default Services;