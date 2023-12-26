import React from 'react'
import { Link } from 'react-router-dom';

const Button = ({text,styles,linkTo}) => {
  
  return (
    
      <Link to={linkTo}> <button className={styles}>{text}</button> </Link>
   
  )
}

export default Button