import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import data from 'data/cars.json'

// import required modules
export default function Gallery() {
    
    const [currentCar, setCurrentCar] = useState(0)

    function swipeData() {
        const currentSlideId = document.querySelector('.swiper-slide-active').swiperSlideIndex

        setCurrentCar(currentSlideId)
        console.log(currentSlideId, data[currentSlideId]);
    }

    return (
        <div className='gallery'>
            <section className='content'>
                <div className="miniature">
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
                <div className="img">
                    <img src="" alt="" />
                </div>
                <div className="info">
                    <h2 className="model"></h2>
                    <div className="row">
                        <p className="motor"></p>
                        <div className="speed">
                            <h3>TOP SPEED</h3>
                            <p></p>
                        </div>
                    </div>
                    <div className="power">
                        <h3>Power</h3>
                        <p className="power"></p>
                    </div>
                    <p className="description">

                    </p>
                </div>
            </section>
            <section className="slider">
                <Swiper
                    slidesPerView={5}
                    loop={true}
                    centeredSlides={true}
                    className="mySwiper"
                    onSlideChange={() => setTimeout(() => {
                        swipeData() 
                    }, 500)}
                >
                    <SwiperSlide>
                        <div className="img">
                            <img src="./img/mclaren/720s.png" alt="" width='185' height='151' />
                            <p className="price">271 900€</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="img">
                            <img src="./img/mercedes/amg-gtr.png" alt="" width='185' height='151' />
                            <p className="price">129 700€</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="img">
                            <img src="./img/ferrari/f8-tributo.jpg" alt="" width='185' height='151' />
                            <p className="price">258 328€</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="img">
                            <img src="./img/ferrari/roma.jpg" alt="" width='185' height='151' />
                            <p className="price">216 102€</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="img">
                            <img src="./img/lotus/emira.jpg" alt="" width='185' height='151' />
                            <p className="price">99 470€</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="img">
                            <img src="./img/lamborghini/huracan-sto.webp" alt="" width='185' height='151' />
                            <p className="price">202 437€</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="img">
                            <img src="./img/mclaren/artura.webp" alt="" width='185' height='151' />
                            <p className="price">235 548€</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="img">
                            <img src="./img/renault/clio-williams.png" alt="" width='185' height='151' />
                            <p className="price">15 000€</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="img">
                            <img src="./img/lamborghini/revuelto.jpg" alt="" width='185' height='151' />
                            <p className="price">500 000€</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="img">
                            <img src="./img/aston-martin/vantage.jpg" alt="" width='185' height='151' />
                            <p className="price">153 277€</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
        </div>
    )
}
