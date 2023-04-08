import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const AboutUs = () => {
    const [dimension, setDimension] = useState([
        window.innerHeight,
        window.innerWidth,
    ]);
    console.log(innerHeight);
    return (
        <>
            <Swiper
                effect={"coverflows"}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className={classes.swiper}
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
                <div className={classes.slider_controler}>
                    <div
                        className={`${classes.swiper_button_prev} ${classes.slider_arrow}`}
                    >
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </div>
                    <div
                        className={`${classes.swiper_button_next} ${classes.slider_arrow}`}
                    >
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                    <div className={classes.swiper_pagination}></div>
                </div>
            </Swiper>
        </div>
    );
};

export default AboutUs;
