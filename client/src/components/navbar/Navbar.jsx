import './navbar.css'
import logo from '../../assets/2.png';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="navbar__container">
                <NavLink to='/beers' className="navBar__item underline">Nos Bières</NavLink>
                <NavLink to="/about-us" className="navBar__item underline">Notre Histoire</NavLink>
                <NavLink to="/" className="logoBox navBar__item">
                    <img id="logo" src={logo} alt="logo" />
                </NavLink>
                <NavLink to="/events" className="navBar__item underline">Nos Events</NavLink>
                <NavLink to="/signin" className="navBar__item underline">Se Connecter</NavLink>
            </div>

            <hr className="nav__hr" />
        </nav>
    )
}

export default Navbar