import React from 'react'
import ImageButton from './ImageButton';
import Button from './Button';

const AreaOne = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#8F36FF] h-1/2">
        <div className=" flex items-center justify-center">
            <div className="text-white">
                <h1 className="text-4xl font-bold mb-9">
                    HELPING ABANDONED MOTHERS WITH CHILDREN
                </h1>
                <p className='text-orange'>Welcome to My child & me inc</p>
                <p>TOGETHER WE CAN CHANGE LIVES <br /> 40% of women and girls have been raped in the Congo. These women are often shunned and abandoned after sexual assaults</p>
                <Button className='p-3 rounded-2xl mt-3 text-orange border' btnText='Donate Now' />
            </div>
            <ImageButton
              src = "src/assets/images/MACM-removebg-preview.png" 
              className='border-0' 
              alt="orphan kids" 
            />
        </div>
    </section>
  )
}

export default AreaOne;