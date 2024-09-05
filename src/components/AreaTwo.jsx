import React from 'react'
import ImageButton from './ImageButton'

const AreaTwo = () => {
  return (
    <section className="py-12 px-4">
      <h1 className='text-violet text-center text-4xl md:text-5xl lg:text-6xl font-bold mb-6'>Who we are</h1>
      <p className='max-w-2xl mx-auto text-center mb-12 text-lg'>
        We help mothers help themselves and their children. My Child & Me, Inc. 
        is a non-profit organization committed to stabilizing families by elevating the quality of life of abandoned mothers with children living in 
        the Democratic Republic of the Congo. We recognize the devastation of war and sexual violence against women in the Congo and its specific impact on 
        mothers with children. Our mission is to provide these abandoned mothers with education, life skills training, 
        and tools to enable them to provide for their families and become contributing members of their society.
      </p>
      <div className='flex flex-col md:flex-row justify-center gap-7'>
        <ImageButton
          src="src/assets/images/mcandme-11.jpg"
          alt="MC and Me"
          className='border-2 border-rose-500 rounded-2xl h-64 w-full object-cover mb-4'
          buttonText="In-house"
        />
        <ImageButton
          src="src/assets/images/mychildandmeinc.jpeg"
          alt="My Child and Me Inc"
          className='border-2 border-rose-500 rounded-2xl h-64 w-full object-cover mb-4'
          buttonText="In-school"
        />
      </div>
    </section>
  )
}

export default AreaTwo;