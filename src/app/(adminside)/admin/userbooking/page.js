import React from 'react';
import moment from "moment";
import Image from "next/image";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin3Fill } from "react-icons/ri";

const getBookings = async () => {
    try {
        const res = await fetch("https://ecobinn-ten.vercel.app/api/book", {
            cache: "no-store"
        })
        if (!res.ok) {
            throw new Error("failed to fetch services");
        }
        return res.json();
    } catch (error) {
        console.log("error loading services ", error);
    }
}

const UBooking = async () => {

    const { services } = await getBookings();

    return (
        <div>
            <h1 className="font-bold text-2xl mb-5">Service</h1>
            <div className="flex flex-col xl:flex-row gap-5">
                <div className="w-full xl:w-full shadow-lg p-6 bg-white rounded-lg h-fit">
                    <p className="mb-5 font-semibold">All Added Services</p>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <th>customer address</th>
                                    <th>customer name</th>
                                    <th>customer last name</th>
                                    <th>customer email</th>
                                    <th>customer phone</th>
                                    <th>customer need</th>
                                    <th>customer quantity</th>
                                    <th>customer size</th>
                                    <th>customer frequency</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    services.map(service => {
                                        return <tr key={service._id}>
                                            <th>
                                                <label>
                                                    <input type="checkbox" className="checkbox" />
                                                </label>
                                            </th>
                                            {/* <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <Image
                                                                src={service.serviceimage}
                                                                height={0}
                                                                width={0}
                                                                sizes="100vw"
                                                                alt="User Image"
                                                                priority
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td> */}
                                            <td>
                                                {service.customeraddress}
                                            </td>
                                            <td>{service.customername}</td>
                                            <td>{service.customerlastname}</td>
                                            <td>
                                                {service.customeremail}
                    
                                            </td>
                                            <td>
                                                {service.customerphone}
                    
                                            </td>
                                            <td>
                                                {service.customerneed}
                    
                                            </td>
                                            <td>
                                                {service.customerquantity}
                    
                                            </td>
                                            <td>
                                                {service.customersize}
                    
                                            </td>
                                            <td>
                                                {service.customerfrequency}
                    
                                            </td>
                                            <td>
                                                {service.customerphone}
                    
                                            </td>
                                            <td>
                                                <button><FaRegEdit className="text-orange-600 text-xl"></FaRegEdit></button>
                                            </td>
                                            <td>
                                                <button><RiDeleteBin3Fill className="text-red-600 text-xl"></RiDeleteBin3Fill></button>
                                            </td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UBooking;