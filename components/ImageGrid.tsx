'use client';

import React from 'react';

interface ImageGridProps {
  images: {
    src: string;
    alt: string;
  }[];
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  return (
    <div className="image-grid" style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1rem'
    }}>
      {images.map((image, index) => (
        <div
          key={index}
          className="image-grid-item"
          style={{
            overflow: 'hidden',
            borderRadius: '12px',
            transition: 'transform 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="image-grid-img"
            style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover'
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;