import {useForm} from "react-hook-form";
import { createUserWithEmailAndPassword, sendEmailVerification  } from 'firebase/auth';
import { auth } from '../../app/firebase'
import module from './Registration.module.scss'
import Email_icon from '../assets/email_icon.png'
import lock_key from '../assets/key_icon.png' 
import login from '../assets/login.png'
import tick_icon from '../assets/tick_icon.png' 
import google from '../assets/google.png'
import apple from '../assets/apple.png'
import facebook from '../assets/facebook.png'
import eyes from '../assets/Vectorlol.png'
import { Link } from "react-router-dom";


const Registration = (props) => {
    const {register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async data => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password)
            sendEmailVerification(userCredential.user)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={module.container_auth}>
            <div className={module.title}>Регистрация</div>
            <form className="modal-form" onSubmit={handleSubmit(onSubmit)}>

                <div className={module.input_login}>
                    <label htmlFor="email">Email: </label>
                    <div className={module.image_icon}>
                    <img src={Email_icon}></img>
                    <input 
                        type="text" 
                        name="email" 
                        placeholder="Введите почту"
                        {...register("email", {
                            required: "Параметр обязателен",
                            pattern: {
                              value: /\S+@\S+\.\S+/,
                              message: "Ваш email не подходит под нужный формат"
                            }
                        })}
                    />
                    {errors.email && <span className="error" role="alert">{errors.email?.message}</span>}
                </div>
                </div>
                <div className={module.line}> </div>

                <div className={module.input_login}>
                    <label id={module.input_title} htmlFor="login">Login: </label>
                    <div className={module.image_icon}>
                    <img src={login}></img>
                    <input 
                        type="text" 
                        name="login" 
                        placeholder="Придумайте логин"
                        {...register("login", {
                            required: "Параметр обязателен",
                            pattern: {
                              value: /[A-Za-z]/,
                              message: "Логин должен содержать только латинские символы"
                            },
                            maxLength: 20, 
                            minLength: 3
                        })}
                    />
                    {errors.login && <span className="error" role="alert">{errors.login?.message}</span>}
                    </div>
                </div>
                <div className={module.line}></div>
                
                <div className={module.input_login}>
                    <label htmlFor="password">Пароль: </label>
                    <div className={module.image_icon}>
                    <img src={lock_key}></img>
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Введите пароль"
                        {...register("password", {
                            required: "Параметр обязателен",
                            minLength: {
                              value: 5,
                              message: "Минимальная длина пароля 5 символов"
                            }
                          })}
                    />
                    {errors.password && <span className="error" role="alert">{errors.password?.message}</span>}
                </div>
                </div>                  
                <div className={module.line}></div>

                <div className={module.input_login}>
                    <label htmlFor="cpassword">Повторите пароль: </label>
                    <div className={module.image_icon}>
                    <img src={lock_key}></img>
                    <input 
                        type="password" 
                        name="cpassword" 
                        placeholder="Повторите пароль"
                        {...register("cpassword", {
                            validate: (value) => {
                                if (watch('password') != value) {
                                    return "Ваши пароли не совпадают";
                                }
                            },
                            required: 'Параметр обязателен'
                        })}
                    />
                    {errors.cpassword && <span className="error" role="alert">{errors.cpassword?.message}</span>}
                </div>
                </div>
                <div className={module.line} id={module.line}></div>

                <div>
                    <label htmlFor="submit"></label>
                    <input className={module.login_button} type="submit" name="submit" value="Отправить"style={{
                        cursor: 'pointer'
                    }}/>
                    <div className={module.icons_container}> Войти с помощью:
                    <div className={module.icons}>
                        <a href='#'> <img src={google} className={module.icon} alt='gmail'></img> </a>
                        <a href='#'  id={module.one}> <img src={facebook} className={module.icon} alt='facebook'></img> </a>
                    </div>
                </div>
                <div className={module.signin}><p> У вас уже есть аккаунт?  <Link to='/authorization'>Войти</Link> </p> </div>
                </div>
            </form>
        </div>
    )

};

export default Registration