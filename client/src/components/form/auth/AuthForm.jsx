import './authForm.css'
import { useState } from 'react';


const AuthForm = () => {

    const [signin, setSignin] = useState(true)

    return (
        <div className='auth-form__container'>
            {signin &&
                <form className="auth-form">
                    <div className="auth-form__title">
                        <h3>OMP's Sign in</h3>
                    </div>
                    <span>Weshhh ! Content de te revoir !</span>
                    <div className="auth-form__input">
                        <input type="email" placeholder="E-mail" />
                        <input type="password" placeholder="Password" />

                    </div>
                    <div className="auth-form__btn">
                        <button className="auth-btn" >Sign in</button>
                    </div>
                    <span> &#9472; Or sign in with &#9472;</span>
                    <div className="auth-form__options">
                        <button>Google</button>
                    </div>
                    <div className="auth-switch-mode">
                        <span>T'as pas de compte ?</span>
                        <span style={{cursor: 'pointer'}} onClick={() => setSignin(!signin)}><b> &nbsp; Clique here</b></span>
                    </div>
                </form>}

            {!signin && <form className="auth-form">
                <div className="auth-form__title">
                    <h3>OMP's Sign up</h3>
                </div>
                <div className="auth-switch-mode">
                    <span>T'as déjà un compte ?</span>
                    <span style={{cursor: 'pointer'}}  onClick={() => setSignin(!signin)}><b> &nbsp; Clique here</b></span>
                </div>
                <div className="auth-form__input">
                    <input type="email" placeholder="E-mail" />
                    <input type="password" placeholder="Confirm Password" />
                    <input type="password" placeholder="Password" />
                </div>
                <div className="auth-form__btn">
                    <button className="auth-btn" >Sign up</button>
                </div>

                <span> &#9472; Or sign up with &#9472;</span>
                <div className="auth-form__options">
                    <button>Google</button>
                </div>
            </form>
            }
        </div>
    )
}

export default AuthForm