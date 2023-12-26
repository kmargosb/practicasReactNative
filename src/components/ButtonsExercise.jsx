import React from 'react';

const ButtonsExercise = ({ num }) => {
    let bgBtn = "";

    if (esPrimo(num)) {
        bgBtn = "bg-red-500";
    } else if (num % 2 !== 0) {
        bgBtn = "bg-yellow-500";
    } else if (num % 2 === 0) {
        bgBtn = "bg-green-500";
    }

    function esPrimo(num) {
        if (num <= 1) {
            return false;
        }
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }    

    return (
        
        <button className={`w-20 h-20 text-xl font-bold ${bgBtn} text-black`}>{num}</button>
    );
};

export default ButtonsExercise;

