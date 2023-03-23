import React from 'react';
import module from './Catalogue.module.scss'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ruchka from '../assets/ruchka.png'
import igla from '../assets/igla.png'
import nitki from '../assets/nitki.png'
import palletka from '../assets/palletka.png'
import glina from '../assets/glina.png'
import img from '../assets/img_card.png'

function Catalogue(props) {
    return (
        <div className={module.catalogue}>
            <div className={module.title}>
            <ul className={module.ul}>
                    <li> ГЛИНА </li>
                    <li> ТОВАРЫ ДЛЯ ХУДОЖНИКОВ</li>
                    <li> ВЯЗАНИЕ  </li>
                    <li> КОНЦЕЛЯРСКИЕ ТОВАРЫ </li>
                    <li> ШИТЬЕ  ПЭЧВОРК </li>
                </ul>
            </div>
            <div className={module.categorii}> 
<div className={module.podcat}> <img src={glina}></img> <ul> <li><h4> Гончарная машина </h4></li> <li id={module.li2}> Приспособление </li></ul></div>
<div className={module.podcat}> <img src={palletka}></img> <ul> <li><h4>Мольберты </h4></li> <li id={module.li2}> Инструменты </li></ul></div>
<div className={module.podcat}> <img src={nitki}></img> <ul> <li><h4> Пряжа </h4></li> <li id={module.li2}> Набор </li></ul></div>
<div className={module.podcat}> <img src={ruchka}></img> <ul> <li><h4> Ручки </h4></li> <li id={module.li2}> Комплект  </li></ul></div>
<div className={module.podcat}> <img src={igla}></img> <ul> <li><h4> Ткани </h4></li> <li id={module.li2}> Состав </li></ul></div>
</div>
<div>
<h1>Каталог товаров</h1>
  <div className={module.catalog}>
    <div className={module.product}>
      <Link to='/card'><img src={img} alt="Товар 1"/></Link>
      <h2>Пряжа ARACHNA Raffia 100%</h2>
      <p>полипропилен 50 г 200 м ± 12 м</p>
      <span className={module.price}>235c</span>
    </div>
    <div className={module.product}>
    <Link to='/card'><img src={img} alt="Товар 2"/></Link>
      <h2>Пряжа ARACHNA Raffia 100%</h2>
      <p>полипропилен 50 г 200 м ± 12 м</p>
      <span className={module.price}>235c</span>
    </div>
    <div className={module.product}>
    <Link to='/card'><img src={img} alt="Товар 3"/></Link>
      <h2>Пряжа ARACHNA Raffia 100%</h2>
      <p>полипропилен 50 г 200 м ± 12 м</p>
      <span className={module.price}>235c</span>
    </div>
    <div className={module.product}>
    <Link to='/card'><img src={img} alt="Товар 4"/></Link>
      <h2>Пряжа ARACHNA Raffia 100%</h2>
      <p>полипропилен 50 г 200 м ± 12 м</p>
      <span className={module.price}>235c</span>
    </div>
  </div>

</div>
        </div>
    );
}

export default Catalogue;