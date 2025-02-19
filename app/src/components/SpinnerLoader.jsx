import React, { useEffect, useState } from 'react'
import Lottie from "lottie-react";

import wandAnimation from '../assets/animation.json';

function SpinnerLoader() {
    const [text, setText] = useState ('');
    const [showSpinner, setShowSpinner] = useState (true); 

    useEffect(() =>{
        setTimeout(() =>{
            setText('Loading...')

        }, 3000)
    }, [])

  return (
    <div>
        {
            showSpinner ? (
                <Lottie animationData={wandAnimation} loop={true}></Lottie>
            ) : (
                <h3>{text}</h3>
            )
        }
      
    </div>
  )
}

export default SpinnerLoader
