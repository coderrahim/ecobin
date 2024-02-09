import moment from "moment";
import Image from "next/image";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin3Fill } from "react-icons/ri";

const getServices = async () => {
    try {
        const res = await fetch("https://ecobinn-ten.vercel.app/api/svc", {
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

const AllAddedServices = async () => {

    const { services } = await getServices();
    console.log(services);

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
                                    <th>Image</th>
                                    <th>Service Name</th>
                                    <th>Service Type</th>
                                    <th>Dscription</th>
                                    <th>Added Date</th>
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
                                            <td>
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
                                            </td>
                                            <td>
                                                {service.servicename}
                                            </td>
                                            <td>{service.servicecategory}</td>
                                            <td>{service.servicedescription}</td>
                                            <td>
                                                {
                                                    moment(service.serviceaddedate).format('MMMM Do YYYY, h:mm:ss a')
                                                }
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

export default AllAddedServices;