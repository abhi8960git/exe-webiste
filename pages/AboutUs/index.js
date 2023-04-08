import { Card } from "../../components/index";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import css from "./Aboutus.module.css";

const AboutUs = () => {
    // const [dimension, setDimension] = useState([
    //     window.innerHeight,
    //     window.innerWidth,
    // ]);
    // console.log(innerHeight);
    return (
        <>

<h1 className={css.head}>About Us</h1>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Card />
                </SwiperSlide>
                <SwiperSlide>
                    <Card />
                </SwiperSlide>
                <SwiperSlide>
                    <Card />
                </SwiperSlide>
                <SwiperSlide>
                    <Card />
                </SwiperSlide>
                <SwiperSlide>
                    <Card />
                </SwiperSlide>
                <SwiperSlide>
                    <Card />
                </SwiperSlide>
                <SwiperSlide>
                    <Card />
                </SwiperSlide>
                <SwiperSlide>
                    <Card />
                </SwiperSlide>
                <SwiperSlide>
                    <Card />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default AboutUs;
