"use client"
import Image from 'next/image';
import React from 'react';
// import styled from 'styled-components';

// const GalleryContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
//   gap: 16px;
// `;

// const GalleryItem = styled.img`
//   width: 100%;
//   height: 100%;
//   border-radius: 8px;
// `;

const GallerySection = ({ images }) => {
  return (
    // <GalleryContainer>
    //   {images.map((imageUrl, index) => (
    //     <GalleryItem className='hover:' key={index} src={imageUrl} alt={`Gallery Item ${index + 1}`} />
    //   ))}
    // </GalleryContainer>
    <div className='grid grid-cols-2 gap-5'>
      {images.map((imageUrl, index) => (
        <div key={index}>
          <Image src={imageUrl} height={0} width={0} style={{ width: '100%', height: '300px' }} sizes="100vw" alt=''></Image>
        </div>
      ))}
    </div>
  );
};

export default GallerySection;
