import React from 'react'

const AreaOne = () => {
  return (
    <div className="relative w-full overflow-hidden bg-[#8F36FF] h-1/2">
        <div className=" flex items-center justify-center">
            <div className="text-white">
                <h1 className="text-4xl font-bold mb-4">
                    HELPING ABANDONED MOTHERS WITH CHILDREN
                </h1>
                <p>TOGETHER WE CAN CHANGE LIVES <br /> 40% of women and girls have been raped in the Congo. These women are often shunned and abandoned after sexual assaults</p>
                <button className='p-3 rounded-2xl mt-3 text-white border'>Checkout our Gallery</button>
            </div>
            <img src="src/assets/images/MACM-removebg-preview.png" alt="orphan kids" />
        </div>
    </div>
  )
}

export default AreaOne;