import lupa from '../assets/lupa.png'
const Button = (props) => {

    return (
        <button className="button-green">
            Выйти
           {/* {props.text && <img src={lupa}></img>} */}
        </button>
    );
};

export default Button