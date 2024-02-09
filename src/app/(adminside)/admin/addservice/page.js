"use client"

import { useState } from 'react';
import Swal from 'sweetalert2';
import { IoAddCircle } from "react-icons/io5";
import { AiOutlineMinusCircle } from "react-icons/ai";
import axios from 'axios';

const AddService = () => {

    const imgbbKey = process.env.NEXT_PUBLIC_VITE_imagebb_key;
    const imgbbAPI = `https://api.imgbb.com/1/upload?key=${imgbbKey}`;

    const handleAddService = async (event) => {
        event.preventDefault();
        const form = event.target;
        const servicename = form.servicename.value;
        const servicecategory = form.servicecategory.value;
        const servicecost = parseInt(form.servicecost.value);
        if (servicecategory === "Select service area") {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Select service category",
                showConfirmButton: false,
                timer: 1500
            });
            return;
        }
        const servicepic = { image: form.servicepic.files[0] };
        const resone = await axios.post(imgbbAPI, servicepic, {
            headers: {
                "content-type": "multipart/form-data"
            }
        });
        const serviceicon = { image: form.serviceicon.files[0] };
        const restwo = await axios.post(imgbbAPI, serviceicon, {
            headers: {
                "content-type": "multipart/form-data"
            }
        });
        const servicedescription = form.servicedescription.value;

        if (resone.data.success && restwo.data.success) {
            const serviceimage = resone.data.data.display_url;
            const serviceiconimage = restwo.data.data.display_url;
            const data = { servicename, servicecategory, serviceimage, serviceiconimage, servicedescription, servicecost, serviceaddedate: new Date() };
            console.log(data);
            axios.post("/api/svc", data)
                .then(res => {
                    console.log(res.data);
                    if (res.data.message === 'service created successfully') {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "New service added successfully",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        form.reset();
                    }
                    else if (res.data.message === 'service creation failed') {
                        Swal.fire({
                            position: "center",
                            icon: "error",
                            title: res.data.message,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        form.reset();
                    }
                    else if (res.data.message === 'service already exist') {
                        Swal.fire({
                            position: "center",
                            icon: "error",
                            title: res.data.message,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        form.reset();
                    }
                })
        }
    }

    return (
        <div>
            <h1 className="font-bold text-2xl mb-5">Service</h1>
            <div className="flex flex-col xl:flex-row gap-5">
                <div className="w-full xl:w-full shadow-lg p-6 bg-white rounded-lg h-fit">
                    <p className="mb-5 font-semibold">Add New Service</p>
                    <form onSubmit={handleAddService} className="space-y-4">

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Service Name</span>
                            </div>
                            <input name='servicename' type="text" placeholder="Type name" className="input input-bordered w-full focus:outline-none rounded" required />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Service Category</span>
                            </div>
                            <select name='servicecategory' defaultValue={"Select service area"} className="input input-bordered w-full focus:outline-none rounded">
                                <option disabled>Select service area</option>
                                <option>Residential</option>
                                <option>Commercial</option>
                            </select>
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Service Cost</span>
                            </div>
                            <input name='servicecost' type="number" placeholder="Type cost" className="input input-bordered w-full focus:outline-none rounded" required />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Service Image</span>
                            </div>
                            <input name='servicepic' type="file" accept="image/*" className="file-input file-input-bordered w-full focus:outline-none rounded" required />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Service Icon</span>
                            </div>
                            <input name='serviceicon' type="file" accept="image/*" className="file-input file-input-bordered w-full focus:outline-none rounded" required />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Service Description</span>
                            </div>
                            <textarea name='servicedescription' className="textarea textarea-bordered h-32 w-full focus:outline-none rounded" placeholder="Type service description" required></textarea>
                        </label>

                        <input className="btn bg-green-500 text-white" type="submit" value="Add Service" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;