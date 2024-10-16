import { MainWrap, VisualWrap } from './style';

import Content1 from '../../components/main/Content1';
import Content2 from '../../components/main/Content2';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const Main = () => {
    return (
        <>
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
                    </SwiperSlide>
                </Swiper>
            </VisualWrap>
            <MainWrap>
                <Content1 />
                <Content2 />
            </MainWrap>
        </>
    );
};

export default Main;
