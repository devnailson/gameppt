import style from './css/Header.module.css'
import logo from '../imgs/logo.png'
import { Link } from 'react-router-dom'

export default function Header(){
    return(
        <ul className={style.princ}>
            <li><Link to='/'><img height='60' src={logo} alt='logo_game'/></Link></li>
            <li className={style.botoes}>
                <Link to='/'><button>Game</button></Link>
                <Link to='/regras'><button>Regras</button></Link>
                <Link to='/sobre'><button>Sobre</button></Link>
            </li>
        </ul>
    )
}