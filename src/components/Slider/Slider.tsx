import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

type SliderProps = {
    items: React.ReactNode[];
    loop?: boolean;
    delay?: number;
}

export default function Slider({ items, loop = true, delay = 2500 }: SliderProps) {
    return (
        <Swiper
            autoplay={{
                delay: delay,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
                dynamicBullets: true,
            }}
            className='carousel'
            loop={loop}
            modules={[Autoplay, Pagination]}
        >
            {items.map((item, index) => (
                <SwiperSlide key={index}>{item}</SwiperSlide>
            ))}
        </Swiper>
    );
}
