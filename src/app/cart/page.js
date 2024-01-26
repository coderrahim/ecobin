"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import {  MdDelete } from "react-icons/md";
import { CiSquareMinus,CiSquarePlus } from "react-icons/ci";

const Cart = () => {
    const [quantity, setQuantity] = useState(1);
    const handleincrease=()=>{
        setQuantity(quantity + 1)
    }
    const handledecrease = ()=>{
        setQuantity(quantity - 1)
    }

    return (
        <div className='max-w-7xl mx-auto'>
            <h1 className='mt-32  font-bold text-5xl text-green-500'>Your cart ()</h1>
            <div className='mt-8 border-2 border-green-500 p-4 rounded-lg'>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
     
        <th>image</th>
        <th>Price</th>
        <th>Quantity</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
       
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
              <Image
        src="/images/my-image.jpg"
        alt="My Image"
        width={500}  
        height={300}
      />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
        </td>
        <td className='flex items-center  mt-2'><CiSquareMinus className='text-3xl mr-2' onClick={handledecrease}></CiSquareMinus>{quantity}<CiSquarePlus className='text-3xl ml-2' onClick={handleincrease}></CiSquarePlus></td>
        <th>
          <button  className=" btn"><MdDelete className='text-2xl'></MdDelete></button>
        </th>
      </tr>

    </tbody>
  
    
  </table>
</div>
            </div>
        </div>
    );
};

export default Cart;