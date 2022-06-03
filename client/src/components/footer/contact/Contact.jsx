import './contact.css'
import phone from "./../../../assets/phone.png"
import twitter from "./../../../assets/twitter.png"
import instagram from "./../../../assets/instagram.png"
import facebook from "./../../../assets/facebook2.png"
import mail from "./../../../assets/mail.png"

const Contact = () => {
    return (
        <div className="contact">
            <div className='contact__item'>
                <div className="contact__logo_wrapper">
                    <div className='contact__logo'>
                        <img src={phone} alt="phone-logo" />
                    </div>
                </div>
                <div className="contact__info">
                    <span>+33(0)777777777</span>
                </div>
            </div>

            <div className='contact__item'>
                <div className="contact__logo_wrapper">
                    <div className='contact__logo'>
                        <img src={mail} alt="mail-logo" />
                    </div>
                </div>
                <div className="contact__info">
                    <span>omp@gmail.com</span>
                </div>
            </div>

            <div className='contact__item'>
                <div className="contact__logo_wrapper">
                    <div className='contact__logo'>
                        <img src={facebook} alt="facebook-logo" />
                    </div>
                </div>
                <div className="contact__info">
                    <span>OMASSYPAL</span>
                </div>
            </div>

            <div className='contact__item'>
                <div className="contact__logo_wrapper">
                    <div className='contact__logo'>
                        <img src={instagram} alt="instagram-logo" />
                    </div>
                </div>
                <div className="contact__info">
                    <span>@omassypal</span>
                </div>
            </div>

            <div className='contact__item'>
                <div className="contact__logo_wrapper">
                    <div className='contact__logo'>
                        <img src={twitter} alt="twitter-logo" />
                    </div>
                </div>
                <div className="contact__info">
                    <span>@omassypal</span>
                </div>
            </div>
        </div>
    )

}

export default Contact