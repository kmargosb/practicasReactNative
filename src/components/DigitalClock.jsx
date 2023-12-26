import React, { useEffect, useState } from 'react';

const DigitalClock = () => {
    const [time, setTime] = useState(new Date());

    

    // const reloj = setInterval(() => {
    //     setTime(new Date())
    //     console.log(time)
    //     clearInterval(reloj)
    // }, 1000)

    // El useEffect ejecuta la funcion si se cumple la condicion
    // Como no hay condicion se ejecuta una sola vez "EFICIENCIA"

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date())

        }, 1000)
        console.log(time)

        return () => clearInterval(timer)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



    return (
        <div className='flex justify-center bg-black items-center h-screen'>
            <div className='flex justify-center text-7xl flex-col items-center border-8 border-green-400 p-5 rounded-xl'>
                <h2 className='text-white'>DIGITAL CLOCK</h2>
                <h2 className='text-green-400 font-bold'>{time.toLocaleTimeString()}</h2>
            </div>
        </div>
    )
}

export default DigitalClock