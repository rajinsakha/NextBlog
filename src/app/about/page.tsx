import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section className='padding flex items-center justify-between'>
      <div>
        Heading
      </div>


      <div className='w-full h-[500px] relative'>
      <Image src="/about.png" className='object-contain' alt='About_image' fill />
      </div>


    

    </section>
  )
}

export default About