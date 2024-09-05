import React from 'react'

const ImageButton = ({ src, alt, className, buttonText }) => (
  <div className='w-1/4 flex flex-col items-center'>
    <img
      src={src}
      className={className}
      alt={alt}
    />
    <button className='border-2 rounded-3xl border-violet w-1/3 px-4 py-4 mt-4 hover:bg-violet hover:text-white transition duration-300'>
      {buttonText}
    </button>
  </div>
);

export default ImageButton;