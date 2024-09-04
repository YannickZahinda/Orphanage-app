import React from 'react'
import ImageButton from './ImageButton'

const AreaTwo = () => {
  return (
    <div>
        <h1 className='text-violet text-center text-mega'>Who we are</h1>
        <p className='w-1/2 m-auto text-center'>
          We help mothers help themselves and their children. My Child & Me, Inc. 
          is a non-profit organization committed to stabilizing families by elevating the quality of life of the abandoned mothers with children living in 
          the Democratic Republic of the Congo. My Child & Me recognizes the devastation of war and sexual violence against women in the Congo and specifically its impact on 
          with children. My Child & Me’s mission is to provide these abandoned mothers with education, life skills training, 
          and tools to enable them to provide for their families and become contributing members of their society.
        </p>
        <div className='flex flex-row justify-center m-6 gap-7'>
          <ImageButton 
           src="src/assets/images/mcandme-11.jpg"
           alt="MC and Me"
           buttonText="In-house"
          />
          < ImageButton 
            src="src/assets/images/mychildandmeinc.jpeg"
            alt="MC and Me"
            buttonText="In-school"
          />
        </div>
        
    </div>
  )
}

export default AreaTwo