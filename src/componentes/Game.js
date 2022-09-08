import { useState } from 'react'
import Pedra from '../imgs/pedra.png'
import Papel from '../imgs/papel.png'
import Tesoura from '../imgs/tesoura.png'
import Resultado from '../componentes/Resultado'

import style from './css/Game.module.css'

export default function Game(){

    const [comptn, setComptn] = useState(0)
    const [compt, setCompt] = useState('')
    const [player, setPlayer] = useState('')
    
    const [enviar, setEnviar]=useState(false)

    function Result(e){
        setComptn(Math.floor(Math.random() * 3 + 1))
        setEnviar(true)
        if(e=='pedra'){
            setPlayer('pedra')
        }else if(e=='papel'){
            setPlayer('papel')
        }else if(e=='tesoura'){
            setPlayer('tesoura')
        }
        if(comptn==1){
            setCompt('pedra')
        }else if(comptn==2){
            setCompt('papel')
        }else{
            setCompt('tesoura')
        }
    }
    

    return(
        <div className={style.pag}>
            <p>PEDRA - PAPEL - TESOURA</p>
            <div className={style.jogo}>
                <p>Você:</p>
            <div className={style.jogoi}>
                <button id='pedra' onClick={()=>Result('pedra')}
                    value='pedra'><img className={style.img} alt="pedra" src={Pedra}/>
                </button>
                <button id='papel' onClick={()=>Result('papel')}
                    value='papel'><img className={style.img} alt="papel" src={Papel}/>
                </button>
                <button id='tesoura' onClick={()=>Result('tesoura')}
                    value='tesoura'><img className={style.img} alt="tesoura" src={Tesoura}/>
                </button>                           
            </div>
                <p>COMPUTADOR:</p>
            <div className={style.jogoi}>               
                <img className={style.img} alt="pedra" src={Pedra}/>
                <img className={style.img} alt="papel" src={Papel}/>
                <img className={style.img} alt="tesoura" src={Tesoura}/>
            </div>
            <Resultado player={player} compt={compt} enviar={enviar}/>
            </div>
        </div>
    )
}