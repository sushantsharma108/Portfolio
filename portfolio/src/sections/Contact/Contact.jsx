import React from 'react'
import styles from '../Contact/ContactStyles.module.css'

const Contact = () => {
    return (
        <section id='contact' className={styles.container}>
            <h1>Contact</h1>
            <form action='' className={styles.contactForm} autoComplete='off'>
                <div className="formGroup">
                    <label htmlFor="name" hidden>Name</label>
                    <input id={styles.name} name="name" type="text" placeholder="Name" required />
                </div>
                <div className="formGroup">
                    <label htmlFor="email" hidden>Email</label>
                    <input id={styles.email} name="email" type="text" placeholder="Email" required />
                </div>
                <div className="formGroup">
                    <label htmlFor="message" hidden>Message</label>
                    <textarea id={styles.message} name="message" type="textbox" placeholder="Message" required />
                </div>
                <input className="hover btn" type="submit" value="Submit" />
            </form>
        </section>
    )
}

export default Contact