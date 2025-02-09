import React from 'react'

const ExtraBanner = () => {
  return (
    <section className='container w-full mx-auto flex pt-12 md:pt-0 md:items-center bg-cover bg-right mb-6' 
    style={{
        height: "32rem",
        backgroundImage: "url('https://images.unsplash.com/photo-1504609813442-a8924e83f76e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"

    }}>
        <div className='container mx-auto'>
            <div className='flex flex-col justify-center items-start px-6 w-full lg:w-1/2'>
                <h1 className='text-2xl md:text-4xl md:w-2xl  my-4 text-white font-bold'>India's Renowned and having work experience with many national events</h1>
                <a href='#' className='text-xl no-underline border-b border-gray-600 leading-relaxed hover:text-indigo-500 text-white hover:border-black hover:font-semibold mb-2 font-semibold'>
                    See Demo
                </a>
            </div>
        </div>
    </section>
  )
}

export default ExtraBanner