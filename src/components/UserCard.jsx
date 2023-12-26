import React from 'react'
import Rating from './Rating.jsx'
import { people } from "../people.js";

const UserCard = () => {
    
    const users = people

    return (
        <div className='flex flex-wrap justify-center gap-4 pt-20 py-8 text-white'>
            {users.map((user, i) => {
                return (
                    <div key={i} className='bg-blue-300 rounded w-80 p-4'>
                    <h2>{user.name}</h2>
                    <Rating num={user.rating}/>
                    <p>{user.gender}</p>
                    <p>{user.job}</p>
                    <p>{user.city}</p>
                    </div>
                )
            })}
        </div>
        
    )
}

export default UserCard