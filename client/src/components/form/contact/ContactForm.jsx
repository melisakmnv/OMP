import './contactForm.css'

const ContactForm = () => {
    return (
        <form action="action_page.php" className="contact-form">
            <label htmlFor="fname">Nom</label>
            <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
            />
            <label htmlFor="mail">Email</label>
            <input
                type="mail"
                id="mail"
                name="mail"
                placeholder="Email" />

            <label htmlFor="message">Message</label>
            <textarea
                id="message"
                name="message"
                placeholder="Votre message"
            ></textarea>

            <input
                className="contact-form__submit-button"
                type="submit"
                value="Submit" />
        </form>
    )
}

export default ContactForm