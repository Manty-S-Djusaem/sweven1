import google_image from '../../assets/google.png'
import facebook_image from '../../assets/facebook.png'
import {auth, provider, providerFacebook} from '../../app/firebase'
import {signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth'
import module from './Authorization.module.scss'
import {useState} from 'react'
import Email_icon from '../assets/email_icon.png'
import google from '../assets/google.png'
import facebook from '../assets/facebook.png' 
import key_icon from '../assets/key_icon.png'
import Password from './Password-recovery'
import { Link } from 'react-router-dom'

const Authorization = (props) => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)

    async function signInWithGoogle() {
        try {
            await signInWithPopup(auth, provider)
            props.closeModal({ type: "modal", active:"false"})
        } catch (error) {
            console.log(error)
        }
    }

    async function signInWithFacebook() {
        try {
            await signInWithPopup(auth, providerFacebook)
            props.closeModal({ type: "modal", active:"false"})
        } catch (error) {
            console.log(error)
        }
    }

    async function signIn(e) {
        e.preventDefault()
        try {
            setError(false)
            await signInWithEmailAndPassword(auth, login, password)
        } catch(error) {
            setError(true)
        }
    }

    function inputLogin(e) {
        setLogin(e.target.value)
    }

    function inputPassword(e) {
        setPassword(e.target.value)
    }

    return (
        <div className={module.container_auth}>
            <div className={module.title}>Авторизация</div>
            <div className={module.error} style={{
                display: (error) ? 'block' : 'none',
                color: 'red'
            }}> 
                Такого пользователя не существует, проверьте введеный логин и пароль 
            </div>
            <form onSubmit={signIn}>
                <div className={module.input_login}>
                    <p>E-mail</p>
                    <label htmlFor="login"></label>
                    <div> <img id={module.img} src={Email_icon}/> <input type="text" name="login" placeholder="введите логин или почту" onChange={inputLogin}/>  </div> 
                    <div className={module.line}> </div> 
                </div>
                
                <div className={module.input_login}>
                <p>Password</p>
                    <label htmlFor="password"></label>
                
                    <div> <img id={module.img} src={key_icon}/> <input type="password" name="password" placeholder="введите пароль" onChange={inputPassword}/> </div>
                    <div className={module.line}> </div> 
                </div>
                <div className={module.forget}>
                    {/* <p> <button className={module.tick}> </button> Запомнить меня</p>/ */}
                    <p> <Link to='/recoverypasswoed'>Забыли пароль?</Link></p>
                </div>
                <div>
                    <label htmlFor="login"></label>
                    <input className={module.login_button} type="submit" value="Отправить" style={{
                        cursor: 'pointer'
                    }}/>
                </div>
                <div className={module.icons}>
                    <img id={module.icon}
                    className={module.icon}
                        src={google} 
                        alt="" 
                        onClick={signInWithGoogle} />
                        <img id={module.one}
                        className={module.icon}
                        src={facebook} 
                        alt="" 
                        onClick={signInWithFacebook} />
                </div>
                <div className={module.signin}><p> Нет аккаунта? <a href='registration'> Зарегистрироваться </a> </p> </div>
            </form>
        </div>
    )

};

export default Authorization