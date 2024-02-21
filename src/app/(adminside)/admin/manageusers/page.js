import Image from 'next/image';
import React from 'react';
import { MdManageAccounts } from "react-icons/md";

const getUsers = async () => {
    try {
        const res = await fetch("https://ecobinn-ten.vercel.app/api/allusers", {
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

const ManageUsers = async () => {

    const users = await getUsers();

    return (
        <div>
            <h1 className="font-bold text-2xl mb-5">Manage Users</h1>
            <div className="flex flex-col xl:flex-row gap-5">
                <div className="w-full xl:w-full shadow-lg p-6 bg-white rounded-lg h-fit">
                    <p className="mb-5 font-semibold">Users</p>
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
                                    <th>Profile Picture</th>
                                    <th>Full Name</th>
                                    <th>Email Address</th>
                                    <th>Joined At</th>
                                    <th>User Role</th>
                                    <th>Manage Role</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map(user => {
                                        return <tr key={user._id}>
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
                                                                src={user.profilepicture}
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
                                            <td>{user.fullname}</td>
                                            <td>{user.email}</td>
                                            <td>{user.createdAt}</td>
                                            <td><p className='px-4 bg-green-600 text-white text-center rounded-full w-fit'>{user.userstatus}</p></td>
                                            <td>
                                                {
                                                    user.userstatus === "admin" ? null :
                                                        <div className='dropdown'>
                                                            <button role="button" className="m-1"><MdManageAccounts className='text-2xl'></MdManageAccounts></button>
                                                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 -left-44">
                                                                <li><button>set admin</button></li>
                                                                <li><button>set driver</button></li>
                                                                <li><button>set user</button></li>
                                                            </ul>
                                                        </div>
                                                }
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

export default ManageUsers;