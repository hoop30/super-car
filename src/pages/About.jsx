import React from 'react'

export default function About() {
    return (
        <div className='about'>
            <section>
                <article className='article1'>
                    <div className="img">
                        <img src="./img/showroom.jpg" alt="" width='400' height='640'/>
                    </div>
                    <div className="text">
                        <p>
                            Bienvenue dans notre showroom de voitures de luxe, qui existe depuis plus de 10 ans. Nous sommes fiers de proposer une gamme de supercars exclusives telles que la Ferrari 488, la Lamborghini Huracan et la Porsche 911 GT3 RS.
                        </p>
                        <p>
                            Notre équipe expérimentée est là pour vous offrir une expérience de service exceptionnelle. Nous proposons une variété de services, notamment la vente de voitures neuves et d'occasion, ainsi que des options de financement et de leasing flexibles pour répondre à vos besoins. De plus, notre service après-vente est de la plus haute qualité, avec des programmes de garantie et des plans d'entretien régulier pour garantir que votre supercar fonctionne toujours à son meilleur niveau.
                        </p>
                    </div>
                </article>
                <article className='article2'>
                    <div className="text">
                        <p>
                            Nous comprenons que l'achat d'une voiture de luxe est une décision importante, c'est pourquoi nous offrons également des essais routiers gratuits et des conseils personnalisés pour vous aider à trouver la voiture de vos rêves. Avec de nombreux clients satisfaits au fil des ans, notre réputation parle d'elle-même. Venez nous rendre visite pour vivre l'expérience de conduite ultime et découvrir pourquoi nous sommes le choix numéro un pour les amateurs de voitures de luxe.
                        </p>
                    </div>
                    <div className="img">
                        <img src="./img/ferrari.jpg" alt="" width='360' height='490'/>
                    </div>
                </article>
            </section>
        </div>
    )
}