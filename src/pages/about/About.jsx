import { VisualWrap } from './AboutStyle';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const About = () => {
    return (
        <VisualWrap>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
            >
                <SwiperSlide>
<<<<<<< HEAD
                    <img src="./images/about/display01.webp" alt="display01" style={{ width: '1900px', height: '800px' }} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./images/about/display02.webp" alt="display02" style={{ width: '1900px', height: '800px' }} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./images/about/display03.webp" alt="display03" style={{ width: '1900px', height: '800px' }} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./images/about/display04.jpg" alt="display04" style={{ width: '1900px', height: '800px' }} />
=======
                    <img src="./images/about/display01.jpg" alt="display01" style={{ width: '100%', height: '100%' }} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./images/about/display02.jpg" alt="display02" style={{ width: '100%', height: '100%' }} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./images/about/display03.jpg" alt="display03" style={{ width: '100%', height: '100%' }} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./images/about/display05.jpg" alt="display04" style={{ width: '100%', height: '100%' }} />
>>>>>>> ff02152f38c2c367294b6f7abe294723058c3dac
                </SwiperSlide>
            </Swiper>
        </VisualWrap>
    );
};

export default About;
