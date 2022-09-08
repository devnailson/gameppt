import style from './css/Resultado.module.css'

import imgLoading from '../imgs/loading.gif'
import {useState} from 'react'

function Resultado(props){

    const [loading, setLoading]=useState(false)
    const [venc,setVenc]=useState('')
    
    function Calcular(){
        if(props.player=='pedra' && props.compt=='tesoura'){
            setVenc('player, pedra > tesoura')
        }else if(props.player=='tesoura' && props.compt=='papel'){
            setVenc('player, tesoura > papel')
        }else if(props.player=='papel' && props.compt=='pedra'){
            setVenc('player, papel > pedra')
        }else if(props.compt=='pedra' && props.player=='tesoura'){
            setVenc('Enemy, pedra > tesoura')
        }else if(props.compt=='tesoura' && props.player=='papel'){
            setVenc('compt, tesoura > papel')
        }else if(props.compt=='papel' && props.player=='pedra'){
            setVenc('compt, papel > pedra')
        }else if(props.compt==props.player && props.player!=''){
            setVenc('EMPATE')
        }else{
            setVenc('')
        }
    }
    

    return(
        <div className={style.princ}>
            {loading?<img src={imgLoading} alt='LOADING...'/>:
            <button onClick={()=>Calcular()}>Calcular</button>
            } 
            <p>VOCÊ ESCOLHEU: {props.player}</p>
            <p>{venc}</p>
        </div>
    )
}
export default Resultado;