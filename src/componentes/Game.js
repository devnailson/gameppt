import { useState } from 'react'
import Pedra from '../imgs/pedra.png'
import Papel from '../imgs/papel.png'
import Tesoura from '../imgs/tesoura.png'
import Resultado from '../componentes/Result'

import style from './css/Game.module.css'

export default function Game(){

    const [venc, setVenc] = useState('')
    const [comecou, setComecou]=useState(false)
    const [comptn, setComptn] = useState(0)
    const [compt, setCompt] = useState('')
    const [player, setPlayer] = useState('')

    const Result=(e)=>{
        setVenc('')
        setComptn(Math.floor(Math.random() * 3 + 1))
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
        setComecou(true)
        /*if(player=='pedra' && compt=='tesoura'){
            setVenc('player, pedra > tesoura')
        }else if(player=='tesoura' && compt=='papel'){
            setVenc('player, tesoura > papel')
        }else if(player=='papel' && compt=='pedra'){
            setVenc('player, papel > pedra')
        }else if(compt=='pedra' && player=='tesoura'){
            setVenc('Enemy, pedra > tesoura')
        }else if(compt=='tesoura' && player=='papel'){
            setVenc('compt, tesoura > papel')
        }else if(compt=='papel' && player=='pedra'){
            setVenc('compt, papel > pedra')
        }else if(compt==player){
            setVenc('EMPATE')
        }
        console.log('player ' + player)
        console.log('compt ' + compt)
        */
       verifica()
    }
    function verifica(){
        if(player=='pedra' && compt=='tesoura'){
            setVenc('player, pedra > tesoura')
        }else if(player=='tesoura' && compt=='papel'){
            setVenc('player, tesoura > papel')
        }else if(player=='papel' && compt=='pedra'){
            setVenc('player, papel > pedra')
        }else if(compt=='pedra' && player=='tesoura'){
            setVenc('Enemy, pedra > tesoura')
        }else if(compt=='tesoura' && player=='papel'){
            setVenc('compt, tesoura > papel')
        }else if(compt=='papel' && player=='pedra'){
            setVenc('compt, papel > pedra')
        }else if(compt==player){
            setVenc('EMPATE')
        }
        console.log('player ' + player)
        console.log('compt ' + compt)
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
            <h2>{venc}</h2>
            <Resultado/>
            </div>
        </div>
    )
}