import React from 'react';
import './Testimonials.css'; 
import {Data} from './Data';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";


const Testimonials = () => {
  return (
    <section className='testimonials section container' id='testimonials'>
    <h2 className='section__title'>My Clients Says</h2>
    <span className='section__subtitle'>Testimonial</span>

    <Swiper className='testimonial__container'
     loop={true}
     grabCursor={true}
     spaceBetween={24}
     pagination={{
       clickable: true,
     }}
     breakpoints={{
       576: {
         slidesPerView: 2,
       },
       768: {
         slidesPerView: 2,
         spaceBetween: 40,
       },
      
     }}
     modules={[Pagination]}
    >
      {Data.map(({ id , image, title ,description }) =>{
        return(
          <SwiperSlide className='testimonial__card' key={id}>
            <img src={image} alt='' className='testimonial__img' />
            <h3 className='testimonial__name'>{title}</h3>
            <p className='testimonial__description'>{description}</p>
          </SwiperSlide>
        )
      })}
    </Swiper>
    </section>
  )
}

export default Testimonials