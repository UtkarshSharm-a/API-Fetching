import React, { useEffect } from 'react'

const Servise = () => {
    useEffect(()=>{
        console.log("services is on")
        return ()=>{
            console.log("services is off")
        }

    })
  return (
    <div>
        services
      
    </div>
  )
}

export default Servise
