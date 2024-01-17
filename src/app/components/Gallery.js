import React from 'react';
import styled from 'styled-components';

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
`;

const GalleryItem = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

const Gallery = ({ images }) => {
  return (
    <GalleryContainer>
      {images.map((imageUrl, index) => (
        <GalleryItem className='hover:' key={index} src={imageUrl} alt={`Gallery Item ${index + 1}`} />
      ))}
    </GalleryContainer>
  );
};

export default Gallery;
