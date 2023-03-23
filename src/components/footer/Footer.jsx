import React from 'react';
import module from './Footer.module.scss'
import phone_icon from '../assets/phone_icons.png'
import email_icon from '../assets/email_icons.png'
import location_icon from '../assets/location_icons.png'
import inst from '../assets/instag.png'
import tg from '../assets/teleg.png'
import ut from '../assets/face.png'
function Footer(props) {
    return (
        <footer>
            <div className={module.container}>
                <div className={module.contacts}>
                    <div className={module.company}>
                    
                        <ul><h4>Компания</h4>
                            <li>О нас</li>
                            <li>Оферта</li>
                            <li>Поставщикам</li>
                        </ul>
                    </div>
                    <div className={module.customers}>
                    
                             <ul><h4>Покупателям </h4>
                                <li>Как оформить заказ</li>
                                <li>Условия доставки</li>                            
                            </ul>
                    </div>



                    <div className={module.our_conts}>
                    <ul> <h4> Наши контакты </h4>
                            <li className={module.phone_num}>  <p> <img  id={module.phone_icon}src={phone_icon}></img> +996 (550)(205)(707) </p></li> 
                            <li className={module.phone_num}> <p> <img id={module.email_icon} src={email_icon}></img>  sweven@gmail.com  </p> </li>
                            <li className={module.phone_num}> <p> <img id={module.location_icon} src={location_icon}></img> ул. Иманова 71/5 </p> </li>
                        </ul>
                    </div>         
                </div> <div className={module.line}> </div>    
                        <div> <img id={module.icon} src={inst}></img> <img id={module.icon} src={tg}></img> <img id={module.icon} src={ut}></img> </div>

             </div>               
              
        </footer>
    );
}

export default Footer;


// const Footer = (Props) => {
//     return (
//         <>
            
//         </footer>
//     );
// };

// export default Footer