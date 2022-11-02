import React, { useEffect } from "react";
import { useState } from "react";

function Home(){

    const [count, setCount]=useState(0)
    const interval = React.useRef(null)

    const cb=()=>{
       setCount(prev=>prev+1)
    }
       useEffect(()=>{
       
            interval.current=setTimeout(cb,1000)
            console.log(interval)
            return  ()=>stop();
        },[])

        const start =()=>{
            interval.current=setTimeout(cb,1000);
        }


        const reset =()=>{
            clearTimeout(interval.current)
            setCount(0)
        }
        const stop =()=>{
            clearTimeout(interval.current)
        }


        return (
        <>
        <div className="display"> 
        <span className="count">{count }</span>
        {/* <span className="count">{count.m }</span>
        <span className="count">{count.s} </span>
        <span className="count">{count.ms} </span> */}
     </div>
     <div className="btn">
         <button id="btn" onClick={start}>start</button>
         <button id="btn" onClick={stop}>stop</button>
         <button id="btn" onClick={reset}>reset</button>
     </div>
     
     </>
     )
}

export default Home;