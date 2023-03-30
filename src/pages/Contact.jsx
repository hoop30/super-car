import React, { useState } from 'react'

export default function Contact() {

    const [alertMessage, setAlertMessage] = useState('')
    const [loading, setLoading] = useState(false)

    async function submit(e) {
        e.preventDefault()
        setLoading(true)
        setAlertMessage('')
        const form = document.contact
        
        // simulation d'envoie de mail
        const isSend = await sendSimulation(form)

        if (isSend) {
            setAlertMessage('merci, Votre message a bien été envoyer !')
            form.reset()
        } else {
            setAlertMessage("Oops, une erreur c'est produite!")
        }

        setLoading(false)
    }

    console.log(loading);
    return (
        <div className='contact'>
            <div className="overlay">
                <img src="./img/r8-back.jpg" alt="" />
            </div>
            <div className="card">
                <div className="background">
                    <img src="./img/background.jpg" alt="" width='500' height='800' />
                </div>
                <div className="text">
                    <h2>Contact Us</h2>
                    <p>
                        N'hésitez pas à nous contacter pour toute question, demande de renseignement ou prise de rendez-vous. Nous sommes là pour vous aider à répondre à vos besoins.
                    </p>
                </div>
                <div className="formAlert">
                    <p>{alertMessage}</p>
                </div>
                <form onSubmit={submit} name='contact'>
                    <div className="input med">
                        <input id='firstname' name='firstname' type="text" required />
                        <label className="input_label" htmlFor="firstname">Firstname</label>
                    </div>
                    <div className="input med">
                        <input id='lastname' name='lastname' type="text" required />
                        <label className="input_label" htmlFor="lastname">Lastname</label>
                    </div>
                    <div className="input min">
                        <input id='subject' name='subject' type="text" required />
                        <label className="input_label" htmlFor="subject">Subject</label>
                    </div>
                    <div className="input">
                        <textarea name="message" id="message" cols="30" rows="3" required></textarea>
                        <label className="input_label" htmlFor="message">Your message</label>
                    </div>
                    <button type="submit">
                        {loading ? <span className="loader"></span> : <p>Send</p>}
                    </button>
                </form>
            </div>
        </div>
    )
}


async function sendSimulation(form) {
    return new Promise(send => {
        setTimeout(() => {
            const newForm = {
                firstname: form.firstname.value,
                lastname: form.lastname.value,
                subject: form.subject.value,
                message: form.message.value,
            }

            console.table(newForm);
            send(true)
        }, 2000);
    });
}