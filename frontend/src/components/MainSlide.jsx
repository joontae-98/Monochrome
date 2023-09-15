import React from "react";
import {Navigation, Scrollbar, A11y, Autoplay} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import banner1 from '../static/banner/banner1.jpg';
import banner2 from '../static/banner/banner2.jpg';
import banner3 from '../static/banner/banner3.jpg';
import {BannerImg} from "./style/MainStyle";

function MainSlide(props) {
  return (<Swiper
    // install Swiper modules
    modules={[Navigation, Scrollbar, A11y, Autoplay]}
    rewind={true}
    slidesPerView={1}
    autoplay={{
      delay: 5000,
      disableOnInteraction: false,
    }}
    navigation
    scrollbar={{
      draggable: true,
    }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    className={'main-swiper my-5'}
  >
    <SwiperSlide>
      <BannerImg src={banner1}/>
    </SwiperSlide>
    <SwiperSlide>
      <BannerImg src={banner2}/>
    </SwiperSlide>
    <SwiperSlide>
      <BannerImg src={banner3}/>
    </SwiperSlide>
  </Swiper>)
}

export default MainSlide;