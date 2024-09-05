import React from 'react'
import Button from './Button'

const AreaThree = () => {
    return (
        <section className="relative bg-[url('src/assets/images/mcandMebackground.jpeg')] bg-cover bg-center py-20">
            <div className="absolute inset-0 bg-violet opacity-70"></div>
            <div className="relative z-10 max-w-3xl mx-auto text-center text-white flex flex-col items-center">
                <p className="mb-8 text-xl">
                    "It goes beyond simply addressing questions or deterring unwanted behaviors,
                    it's about delving into the root of those behaviors and gaining a genuine
                    understanding of their origins."
                </p>
                <Button
                    className="border-2 rounded-3xl border-white px-8 py-4 hover:bg-white hover:text-violet transition duration-300"
                    btnText="Play Now"
                />
            </div>
        </section>
    )
}

export default AreaThree