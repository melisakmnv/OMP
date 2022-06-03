import './navbar.css'
import logo from '../../assets/2.png';


const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="navbar__container">
                <span to='/beers' className="navBar__item underline">Nos Bières</span>
                <span to="/about-us"className="navBar__item underline">Notre Histoire</span>
                <span  to="/" className="logoBox navBar__item">
                    <img  id="logo" src={logo} alt="logo" /> 
                </span>
                <span to="/events" className="navBar__item underline">Nos Events</span>
                <span to="/signin" className="navBar__item underline">Se Connecter</span>
            </div>

            <hr className="nav__hr" />
        </nav>
    )
}

export default Navbar