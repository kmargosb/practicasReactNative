import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const PokedexId = () => {

    const { id } = useParams()
    const linkApi = `https://pokeapi.co/api/v2/pokemon/${id}`

    const [pokemonsData, setPokemonsData] = useState(null);

    useEffect(() => {

        const getData = async (url) => {

            try {
                const response = await fetch(url);
                const data = await response.json();
                setPokemonsData(data)
                console.log(data)
            }
            catch (error) {
                console.log(error + "Este es un error")
            }
        }
        getData(linkApi);
    }, [linkApi]);

    if (!pokemonsData) {
        return <div className='flex justify-center items-center h-screen text-2xl'>Cargando Pokemon...</div>;
    }

    return (
        <div className='flex justify-center pt-20 py-10 h-full'>
            <div className='flex flex-col border-black border-2 justify-center items-center h-fit w-[450px] p-4 bg-lime-300 
            transition-transform duration-300 transform hover:scale-105 rounded-xl shadow-2xl '>
                <div className='flex w-full items-center gap-6 pb-2 font-bold'>
                    <h2 className='flex justify-center 
                        items-center border-2 border-black 
                        bg-gradient-to-b  from-red-500 to-white 
                        rounded-full w-9 h-9'>
                        {pokemonsData.id}
                    </h2>
                    <h2>{(pokemonsData.name).toUpperCase()}</h2>
                </div>
                <img src={pokemonsData.sprites.other.dream_world.front_default}
                    alt={pokemonsData.name}
                    className='w-[320px] h-[320px] p-3  border-black border-2 bg-white rounded-xl ' />
                <div className='flex justify-evenly w-full pt-4'>
                    <div className='flex flex-col'>
                        <h2 className='font-bold bg-lime-700 text-white w-fit rounded-lg px-2'>Abilities</h2>
                        {pokemonsData.abilities.map((item, i) => {
                            return (
                                <ul key={i}>
                                    <li key={i}>{item.ability.name}</li>
                                </ul>
                            )
                        })}
                    </div>
                    <div className='flex flex-col'>
                        <h2 className='font-bold bg-lime-700 text-white w-fit rounded-lg px-2'>Moves</h2>
                        {pokemonsData.moves.slice(0, 5).map((item, i) => {
                            return (
                                <ul key={i}>
                                    <li key={i}>{item.move.name}</li>
                                </ul>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokedexId