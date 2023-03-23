import React from 'react';
import module from './account.module.scss'
import cart from '../assets/cartt.png'
import acc from '../assets/acc.png'
import exit from '../assets/exit.png'

function account(props) {
    return (
        <div id={module.account_box}>
            <div style={{background: 'rgba(244, 244, 244, 1)',
            height: '80px',
            display:'flex',
            justifyContent: 'start',
            alignItems: 'center',
            paddingLeft: '244px'}}> <h3> Личный кабинет</h3> </div>
            <div  style={{display:'flex', justifyContent: 'space-evenly', margin:'150px'}}>  
                <button id={module.buttons}><img src={acc}></img><p> Личные данные</p></button>
                <button id={module.buttons}> <img src={cart}></img><a href='cart'> <p>Корзина </p></a></button>
                <button id={module.buttons}> <img src={exit}></img><p> Выход</p></button>

            </div>
        </div>
    );
}

export default account;