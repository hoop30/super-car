import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import data from 'data/cars.json'
import CarInfoDisplay from 'components/CarInfoDisplay';

// import required modules
export default function Gallery() {

    const [currentCar, setCurrentCar] = useState(0)

    function swipeData() {
        const currentSlideId = document.querySelector('.swiper-slide-active').swiperSlideIndex

        setCurrentCar(currentSlideId)
    }

    return (
        <div className='gallery'>
            <section className='content'>
                <CarInfoDisplay info={data[currentCar]} />
            </section>
            <section className="slider">
                <Swiper
                    slidesPerView={3}
                    loop={true}
                    centeredSlides={true}
                    className="mySwiper"
                    onSlideChange={() => setTimeout(() => {
                        swipeData()
                    }, 500)}
                    breakpoints={{
                        1100: {
                            slidesPerView: 6,
                        },
                        630: {
                            slidesPerView: 4,
                        }
                    }}
                >
                    <SwiperSlide>
                        <div className="img">
                            <img src="./img/mclaren/720s.png" alt="" width='185' height='151' />
                            <p className="price">271 900€</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="img">
                            <img src="./img/mercedes/amg gt R.png" alt="" width='185' height='151' />
                            <p className="price">129 700€</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="img">
                            <img src="./img/ferrari/f8 tributo.png" alt="" width='185' height='151' />
                            <p className="price">258 328€</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="img">
                            <img src="./img/ferrari/roma.png" alt="" width='185' height='151' />
                            <p className="price">216 102€</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="img">
                            <img src="./img/lotus/emira.png" alt="" width='185' height='151' />
                            <p className="price">99 470€</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="img">
                            <img src="./img/lamborghini/Huracán EVO STO.png" alt="" width='185' height='151' />
                            <p className="price">202 437€</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="img">
                            <img src="./img/mclaren/artura.png" alt="" width='185' height='151' />
                            <p className="price">235 548€</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="img">
                            <img src="./img/renault/clio williams.png" alt="" width='185' height='151' />
                            <p className="price">15 000€</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="img">
                            <img src="./img/lamborghini/revuelto.png" alt="" width='185' height='151' />
                            <p className="price">500 000€</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="img">
                            <img src="./img/aston martin/vantage.png" alt="" width='185' height='151' />
                            <p className="price">153 277€</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
        </div>
    )
}
