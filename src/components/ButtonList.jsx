import React from 'react'
import ButtonsExercise from './ButtonsExercise';


const ButtonList = ({ numero }) => {

    const arrayBtns = [];
    for (let i = 0; i <= numero; i++) {
        arrayBtns.push(i)
    }

    return (
        <div className='flex p-44 items-center flex-wrap gap-2 justify-center '>
            {arrayBtns.map((number, i) => {
                return (
                    <ButtonsExercise key={i} num={number}/>
                )
            })}
        </div>
    )
}

export default ButtonList