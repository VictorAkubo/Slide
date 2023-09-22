import React, { useState } from 'react'
import './Slide.css'
//document.getElementById('slide').style.backgroundImage = "url('./assets/1.jpg')";

const Slide = () => {
    const [picture, setPic] = useState(1)

    const forward = () => {
        setPic(picture + 1)
        if(picture === 12){
            setPic(1)
        }

    }
    const backward = () => {
        setPic(picture - 1)
        if(picture === 1){
            setPic(12)}
    }
    return (
        <div >
            <div>
            <img alt = 'mountain' src={`assets/${picture}.jpg`}/>
            
            
            <button onClick={backward}> Previous</button>
            {picture}
            <button onClick={forward}> Next </button>
            </div>
        </div>
    )
}

export default Slide