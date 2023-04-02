import React from 'react'

export default function CarInfoDisplay({ info }) {

    const miniature1 = `./img/${info.brand}/${info.model}-1.jpg`
    const miniature2 = `./img/${info.brand}/${info.model}-2.jpg`
    const miniature3 = `./img/${info.brand}/${info.model}-3.jpg`

    const img = `./img/${info.brand}/${info.model}.png`
    const car = `${info.brand} ${info.model}`


    return (
        <>
            <h2 className="model">{car}</h2>
            <div className='card'>
                <div className="miniature">
                    <div className="miniImg">
                        <img src={miniature1} alt={car} width='170' height='120' />
                    </div>
                    <div className="miniImg">
                        <img src={miniature2} alt={car} width='170' height='120' />
                    </div>
                    <div className="miniImg">
                        <img src={miniature3} alt={car} width='170' height='120' />
                    </div>
                </div>
                <p className="motor">{info.motor}</p>
                <div className="info">
                    <div className="speed">
                        <h3>TOP SPEED</h3>
                        <p>{info.speed} KMH</p>
                    </div>
                    <div className="power">
                        <h3>Max Power</h3>
                        <p>{info.power} BHP</p>
                    </div>
                </div>
                <div className="img">
                    <img src={img} alt={car} width='200' height='200' />
                </div>
                <p className="description">
                    {info.description}
                </p>
            </div>
        </>
    )
}
