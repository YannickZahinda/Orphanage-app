import React from 'react'

const ImageButton = ({ src, alt, buttonText }) => {
    return (
        <div className='w-1/4 flex flex-col items-center'>
            <img
                src={src}
                className='border-4 border-rose-500 rounded-2xl h-27 w-full object-cover mb-4'
                alt={alt}
            />
            <button className='border-4 rounded-3xl border-violet w-1/3 px-4 py-4'>{buttonText}</button>
        </div>
    )
}

export default ImageButton