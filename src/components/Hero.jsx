import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

const slidesArray = [
    {
        title: "Have Video Discussions From Anywhere",
        image: "https://images.unsplash.com/photo-1599240213041-9969581985cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHZpZGVvJTIwbWFraW5nfGVufDB8fDB8fHww"
    },
    {
        title: "Enrich your work more satisfied",
        image: "https://plus.unsplash.com/premium_photo-1684433905239-efb40e911e13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlkZW8lMjBtYWtpbmd8ZW58MHx8MHx8fDA%3D"
    },
    {
        title: "Best for family communications",
        image: "https://images.unsplash.com/photo-1593697909703-ff9b5f47c4af?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Excellent for business meet up's",
        image: "https://images.unsplash.com/photo-1593697909683-bccb1b9e68a4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
]

const Hero = () => {
  return (
    <div className='relative container mx-auto'>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
      {
        slidesArray.map((slider, index) => (
            <SwiperSlide key={index}>
                <div className='block h-full w-full mx-auto md:flex pt-6 md:pt-0 md:items-center bg-cover bg-right'
                    style={{height: "50vh",backgroundImage: `url('${slider.image}')`}}
                >
                    <div className='container mx-auto'>
                        <div className='bg-black opacity-95 flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide rounded-sm pb-2'>
                            <p className='text-white my-4 text-2xl md:text-4xl pt-2'>{slider.title}</p>
                            <a href='#' className='text-xl no-underline border-b border-gray-600 leading-relaxed hover:text-indigo-500 text-white hover:border-black hover:font-semibold mb-2'>
                                View Pricing
                            </a>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        ))
      }
        
      </Swiper>
    </div>
  )
}

export default Hero
