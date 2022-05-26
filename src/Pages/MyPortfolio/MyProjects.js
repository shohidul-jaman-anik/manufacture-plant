import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import  './MyProject.css'
// import required modules
import { EffectCoverflow, Pagination } from "swiper";
// import image:-
import img1 from '../../Assets/myProfile/img1.png'
import img2 from '../../Assets/myProfile/img2.png'
import img3 from '../../Assets/myProfile/img3.png'
import img4 from '../../Assets/myProfile/img4.png'
import img5 from '../../Assets/myProfile/img5.png'


const MyProjects = () => {
    return (
        <div>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={img1} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt='' />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default MyProjects;
