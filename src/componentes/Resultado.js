import imgLoading from '../imgs/loading.gif'
import {useState} from 'react'

function Resultado({venc}){

    const [rvenc, setRvenc] = useState('oi')
    const [loading, setLoading]=useState(false)

    function func(){
        setLoading(true)
        setTimeout(() => {
            setRvenc(venc)
            setLoading()
        }, 1000);
        
    }

    return(
        <div>
            {loading?<img src={imgLoading} alt='LOADING...'/>:
            <p>{rvenc}</p>
            }
            <button onClick={()=>func()}>CRICA</button>
        </div>
    )
}
export default Resultado;