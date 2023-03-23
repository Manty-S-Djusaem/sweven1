import React from 'react';
import module from './Card.module.scss'
import img from '../assets/img_card.png'
import green from '../assets/green.png'
import red from '../assets/red.png'
import blue from '../assets/blue.png'
import bluee from '../assets/bluee.png'
import yellow from '../assets/yellow.png'
import left from '../assets/shape_left.png'
import right from '../assets/shape_right.png'
import reki1 from '../assets/verevka.png'
import reki2 from '../assets/verevka2.png'
import reki3 from '../assets/verevka3.png'

function Card(props) {
    return (
        <div className={module.box1}>
            <div className={module.box}>
                <div className={module.container}>
                    <div> <h2> Вязание</h2> <img src={img}></img>
                        <div className={module.img}>
                            <img src={green}></img>
                            <img src={red}></img>
                            <img id={module.img1} src={blue}></img>
                            <img src={bluee}></img>
                            <img src={yellow}></img>
                        </div>
                    </div>
                </div>
                <div className={module.container2}> <h2>Пряжа ARACHNA Raffia 100%  </h2> <h2 id={module.h2}>полипропилен 50 г 200 м ± 12 м</h2>
                    <p>Пряжа ARACHNA "RAFFIA" используется для вязания ярких фантазийных мочалок и банных предметов, а также различных аксессуаров -
                        кошельков, клатчей, сумок, авосек. Пряжа отличается прочностью, хорошо держит форму в готовом изделии.</p>
                    <h4>Уход за готовым изделием: </h4> <p>
                        Ручная стирка t-30, не гладить, не отбеливать, сушить в расправленном виде на горизонтальной поверхности.</p>
                    <div className={module.container3}> <p> количество </p> <p> цена </p></div>
                    <div>
                        <div className={module.price}>
                            <div className={module.qual}> <button> <img src={left} alt="" /> </button> <p> 1 </p> <button> <img src={right} alt="" /> </button>  </div>
                            <div className={module.line}> </div>
                            <div className={module.priice}> <p>60c.</p></div>
                        </div>
                        <div>
                            <button className={module.login_button}>в корзину </button>
                            <button className={module.login_button2}>купить сейчас </button>
                        </div>
                        <div>
                            <button className={module.link_button}> Поделиться </button>
                        </div>
                    </div>

                </div>
            </div>
            <div className={module.reki}> <h2>ВАС ТАКЖЕ МОЖЕТ ЗАИНТЕРЕСОВАТЬ </h2> 
            <div className={module.rek}> 
               <div> <div className={module.recom}> <img src={reki1} alt="" /> </div> <p> Нитки для вышивания GAMMA мулине (0207-0819) 100% хлопок 8 м </p>  </div>
               <div> <div  className={module.recom}> <img src={reki2} alt="" />  </div><p> Нитки для вышивания GAMMA мулине (0001-0206) 100% хлопок 8 м </p> </div>
               <div> <div  className={module.recom}> <img src={reki3} alt="" /> </div> <p>Нитки для вышивания GAMMA мулине (0820-3070) 100% хлопок 8 м</p></div>
            </div></div>
        </div>

    );
}

export default Card;