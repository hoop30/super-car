import React from 'react'

export default function Services() {

    function isShow(e) {

        let target = e.target
        while (target.nodeName !== 'SECTION') {
            target = target.parentNode
        }

        const sections = document.querySelectorAll('section')

        sections.forEach(section => {
            section.classList.remove('show')
        })

        target.classList.add('show')
    }

    return (
        <div className="services">

            <section onClick={(e) => isShow(e)}>
                <div className="card">
                    <div className="overlay">
                        <img src="./img/background.jpg" alt="" />
                    </div>
                    <div className="img">
                        <img src="./img/lamborghini.jpg" alt="" width='300' height='170' />
                    </div>
                    <h2>Service après-vente</h2>
                    <p>
                        Le showroom peut proposer des services de maintenance, de réparation et d'entretien pour les voitures, y compris des programmes de garantie et des plans d'entretien régulier pour aider les clients à maintenir leurs véhicules en bon état.
                    </p>
                    <a href="/contact">Contact</a>
                </div>
            </section>

            <section className='show' onClick={(e) => isShow(e)}>
                <div className="card">
                    <div className="overlay">
                        <img src="./img/background.jpg" alt="" />
                    </div>
                    <div className="img">
                        <img src="./img/mclaren.jpg" alt="" width='300' height='170' />
                    </div>
                    <h2>Vente de voitures neuves et d'occasion</h2>
                    <p>
                        Le showroom peut offrir une variété de modèles de voitures neuves et d'occasion, avec des options de financement et de leasing pour aider les clients à trouver la voiture de leurs rêves.
                    </p>
                    <a href="/contact">Contact</a>
                </div>
            </section>

            <section onClick={(e) => isShow(e)}>
                <div className="card">
                    <div className="overlay">
                        <img src="./img/background.jpg" alt="" />
                    </div>
                    <div className="img">
                        <img src="./img/tesla.jpg" alt="" width='300' height='170' />
                    </div>
                    <h2>Essais routiers</h2>
                    <p>
                        Le showroom peut offrir des essais routiers gratuits pour permettre aux clients de tester les voitures avant de prendre une décision d'achat. Les clients peuvent également bénéficier de conseils et de recommandations personnalisées de la part de professionnels de l'automobile pour les aider à choisir la voiture qui correspond le mieux à leurs besoins et à leur budget.
                    </p>
                    <a href="/contact">Contact</a>
                </div>
            </section>

        </div>
    )
}
