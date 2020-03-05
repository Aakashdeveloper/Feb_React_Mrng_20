import React,{useState,useEffect} from 'react';
import axios from 'axios';


const url="xyz";

function Hooks(){
    const [title] = useState('React Hooks app')
    const [count, setCount] = useState(0);
    const [artist,setArtist] = useState()

    useEffect(() =>{
        axios.get(url)
            .then((res) => {
                const mydata = res.data
                setArtist(mydata)
            })
    },[artist])

    return(
        <div>
            <h1>{title}</h1>
            <h2>Counter value is {count}</h2>
            <button className="btn btn-info"
            onClick={()=>{setCount(count+1)}}>
                Click
            </button>
        </div>
    )
}

export default Hooks