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
        image: "https://media.istockphoto.com/id/1253877184/photo/african-guy-learn-online-wearing-headset-looking-at-laptop-screen.jpg?s=2048x2048&w=is&k=20&c=8uwBq8VvuXuRrhVz1PeAmkncqFmeoQ9h96O7hjypVaA="
    },
    {
        title: "Enrich your work more satisfied",
        image: "https://media.istockphoto.com/id/1223889856/photo/young-man-working-from-home.jpg?s=2048x2048&w=is&k=20&c=OX1VxjHQ0KEhU9fDkTP8k_fM4bbdriOTH9CEmqsp4Q8="
    },
    {
        title: "Best for family communications",
        image: "https://media.istockphoto.com/id/1198252567/photo/indian-woman-teacher-wear-wireless-headset-video-calling-on-laptop.jpg?s=2048x2048&w=is&k=20&c=z5jYy6wfItdcrVexVyqvCLIpPM-xXvmPNngU797oQ3M="
    },
    {
        title: "Excellent for business meet up's",
        image: "https://media.istockphoto.com/id/1312452682/photo/business-woman-at-office-stock-photo.jpg?s=2048x2048&w=is&k=20&c=urhUvujrfSSgxfi6uVg2GzXAaqzKhQb8OBy741SI97w="
    },
]

const Hero = () => {
  return (
    <div className='relative container mx-auto' style={{maxWidth: "1600px"}}>
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
                <div className='block h-full opacity-80 w-full mx-auto md:flex pt-6 md:pt-0 md:items-center bg-cover bg-right'
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
