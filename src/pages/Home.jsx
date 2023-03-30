import React from 'react'

export default function Home() {
    return (
        <div className='home'>
            <section>
                <div className='img'>
                <img src="./img/mclaren.jpg" alt="" width='530' height='330'/>

                </div>
                <div className="text">
                    <h2 className='orange'>McLaren</h2>
                    <h3>Hybrid Sport 2021</h3>
                    <p>
                        McLaren made its first hybrid car, the P1, in 2014 and 2015. Following the birth of the Speedtail in 2019.
                    </p>
                <a href="/">read more...</a>
                </div>
            </section>
            <section>
                <div className="text">
                    <h2 className='yellow'>Chevrolet Corvette</h2>
                    <h3>Z06 / ZR1 2022</h3>
                    <p>
                        To the public's attention after the 2020 Stingray entered the production stage as a standard model.
                    </p>
                    <a href="/">read more...</a>
                </div>
                <div className='img'>
                <img src="./img/lamborghini.jpg" alt="" width='530' height='330'/>

                </div>
            </section>
            <section>
                <div className='img'>
                    <img src="./img/tesla.jpg" alt="" width='530' height='330'/>
                </div>
                <div className="text">
                    <h2 className='red'>Ferrari SF90</h2>
                    <h3>Stradale 2021</h3>
                    <p>
                        Will be Ferrari's first plug-in hybrid car and engineered to be faster than the LaFerrari. 
                    </p>
                    <a href="/">read more...</a>
                </div>
            </section>
        </div>
    )
}
