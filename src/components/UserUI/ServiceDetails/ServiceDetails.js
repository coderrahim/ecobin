"use client"

import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { IoMdCall } from 'react-icons/io';
import { MdHomeWork } from "react-icons/md";
import { FaCheckSquare } from "react-icons/fa";

const ServiceDetails = ({ id }) => {

    const [service, setService] = useState(null);

    useEffect(() => {
        const res = axios.get(`/api/svc/${id}`)
            .then(res => {
                setService(res.data);
            })
    }, [id])

    // console.log(service);

    const handleBookingSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const customeraddress = form.customeraddress.value;
        const customername = form.customername.value;
        const customerlastname = form.customerlastname.value;
        const customeremail = form.customeremail.value;
        const customerphone = form.customerphone.value;
        const customerneed = form.customerneed.value;
        const customerquantity = parseInt(form.customerquantity.value);
        const customersize = form.customersize.value;
        const customerfrequency = form.customerfrequency.value;
        if (customersize === "Select size" || customerfrequency === "Select frequency") {
            return alert("All data needed");
        }
        else {
            const datas = { customeraddress, customername, customerlastname, customeremail, customerphone, customerneed, customerquantity, customersize, customerfrequency, customercost: service.servicecost }
            console.log(datas);
            axios.post("/api/book", datas)
                .then(res => {
                    console.log(res.data);
                })
        }
    }

    return (
        <div>
            {
                service ?
                    <div className='mb-20'>
                        <Image
                            src={"https://i.ibb.co/fx8byQ6/same.jpg"}
                            height={0}
                            width={0}
                            className="w-full h-72"
                            sizes="100vw"
                            alt="Logo"
                            priority
                        />
                        <div className="mb-10 py-10 max-w-7xl mx-auto flex justify-center items-center rounded-xl gap-20">
                            <div className="flex-1 bg-[#386386] text-white rounded-xl p-20">
                                <h1 className="text-5xl font-bold">{service.servicename}</h1>
                                <p className="mt-6">{service.servicedescription}</p>
                                <p className="mt-6 font-bold">Cost {service.servicecost} BDT</p>
                                <div className="flex justify-start gap-5 mt-8">
                                    <button className="btn bg-red-600 text-white">Query</button>
                                    <button className="btn btn-outline btn-info text-white">
                                        <IoMdCall></IoMdCall>
                                        01987748409
                                    </button>
                                </div>
                            </div>
                            <div className="flex-1">
                                <Image
                                    src={service?.serviceimage}
                                    height={0}
                                    width={0}
                                    className="w-full rounded-2xl"
                                    sizes="100vw"
                                    alt="Logo"
                                    priority
                                />
                                {/* <img className="rounded-xl" src={service.serviceimage} alt="" /> */}
                            </div>
                        </div>
                        <div className='mt-24 border shadow px-20 py-10'>
                            <h2 className='text-center text-3xl font-bold'>Choose Your Waste Solution</h2>
                            <p className='text-center my-8'>Enter your information to start service or get a quote</p>
                            <div className='bg-[#175e45] w-full h-32 rounded-3xl flex justify-between items-center px-10'>
                                <div className='text-white flex items-center gap-4'>
                                    <MdHomeWork className='text-5xl'></MdHomeWork>
                                    <span className='text-xl'>For Residential Property</span>
                                </div>
                                <div><FaCheckSquare className='text-5xl text-white'></FaCheckSquare></div>
                            </div>
                            <form onSubmit={handleBookingSubmit} className='mt-12'>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text font-bold">Address</span>
                                    </div>
                                    <input name="customeraddress" type="text" placeholder="e.g. 101 Ahmadnagar Mirpur-1 Dhaka-1216" className="input input-bordered w-full focus:outline-none rounded" required />
                                </label>
                                <div className='flex items-center gap-8 mt-5'>
                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text font-bold">Name</span>
                                        </div>
                                        <input name="customername" type="text" placeholder="e.g. Maharib" className="input input-bordered w-full focus:outline-none rounded" required />
                                    </label>
                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text font-bold">Last Name</span>
                                        </div>
                                        <input name="customerlastname" type="text" placeholder="e.g. Shafiqee" className="input input-bordered w-full focus:outline-none rounded" required />
                                    </label>
                                </div>
                                <div className='flex items-center gap-8 mt-5'>
                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text font-bold">Email</span>
                                        </div>
                                        <input name="customeremail" type="text" placeholder="e.g. aion@gmail.com" className="input input-bordered w-full focus:outline-none rounded" required />
                                    </label>
                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text font-bold">Phone</span>
                                        </div>
                                        <input name="customerphone" type="text" placeholder="e.g. 01987748409" className="input input-bordered w-full focus:outline-none rounded" required />
                                    </label>
                                </div>
                                <label className="form-control w-full mt-5">
                                    <div className="label">
                                        <span className="label-text font-bold">Tell Us What You Need</span>
                                    </div>
                                    <textarea name='customerneed' className="textarea textarea-bordered h-32 w-full focus:outline-none rounded" placeholder="Type service description" required></textarea>
                                </label>
                                <div className='flex items-center gap-8 mt-5'>
                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text font-bold">Quantity</span>
                                        </div>
                                        <input name="customerquantity" type="number" min={0} placeholder="e.g. aion@gmail.com" className="input input-bordered w-full focus:outline-none rounded" required />
                                    </label>
                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text font-bold">Size</span>
                                        </div>
                                        <select name='customersize' defaultValue={"Select size"} className="input input-bordered w-full focus:outline-none rounded">
                                            <option disabled>Select size</option>
                                            <option>Not sure</option>
                                            <option>Commercial</option>
                                        </select>
                                    </label>
                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text font-bold">Frequency</span>
                                        </div>
                                        <select name='customerfrequency' defaultValue={"Select frequency"} className="input input-bordered w-full focus:outline-none rounded">
                                            <option disabled>Select frequency</option>
                                            <option>Residel</option>
                                            <option>Commeial</option>
                                        </select>
                                    </label>
                                </div>
                                <input className='btn bg-green-500 text-white mt-10 w-full' type="submit" value="Book Service" />
                            </form>
                        </div>
                    </div> : ""
            }
        </div>
    );
};

export default ServiceDetails;