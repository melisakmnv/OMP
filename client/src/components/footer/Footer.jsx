import "./footer.css";

import Contact from "./contact/Contact";
import Schedule from "./schedule/Schedule";
import ContactForm from "../form/contact/ContactForm";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__title">
				<h2 class="divider line one-line" contenteditable>O Massy Pale</h2>
			</div>

			<div className="footer__content">
				<div className="map">
					<iframe title="minimap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2631.9911547033666!2d2.254358115669664!3d48.72476067927465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6792f91ebe247%3A0x28f6994cb9e9f7e8!2sO&#39;Massy%20Pale!5e0!3m2!1sfr!2sfr!4v1653707601666!5m2!1sfr!2sfr" width="400" height="300" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
				</div>
				<ContactForm />
			</div>
			<div className="footer__contact">
				<Contact />
				<Schedule />
			</div>
		</footer >
	);
};

export default Footer;
