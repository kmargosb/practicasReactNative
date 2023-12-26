import React, { useEffect, useState } from 'react';
import Button from './Button';

const PokeList = () => {
   const [pokemonsData, setPokemonsData] = useState([]);
   const [isLoading, setIsLoading] = useState(true); // Nuevo estado para el indicador de carga
   const linkApi = "https://pokeapi.co/api/v2/pokemon/?limit=649&offset=0";

   useEffect(() => {
      const getData = async (url) => {
         try {
            const response = await fetch(url);
            const data = await response.json();
            const { results } = data;

            const pokemonList = results.map(async (pokemon, i) => {
               const response = await fetch(pokemon.url);
               const data = await response.json();

               return {
                  id: data.id,
                  name: data.name,
                  img: data.sprites.other.dream_world.front_default
               };
            });

            setPokemonsData(await Promise.all(pokemonList));
            setIsLoading(false); // Cambiar el estado a false cuando los datos han cargado
         } catch (error) {
            console.log(error);
            setIsLoading(false); // En caso de error, también cambiar el estado a false
         }
      };

      getData(linkApi);
   }, []);

   return (
      <div>
         {isLoading ? ( // Mostrar mensaje de carga si isLoading es true
            <p className='flex justify-center items-center h-screen text-2xl'>Cargando pokemones...</p>
         ) : (
            <div className='flex gap-7 pt-24 py-5 flex-wrap justify-center'>
               {pokemonsData.map((item, i) => (
                  <div key={i} className='flex flex-col border-black border-2 justify-center 
                  items-center h-fit w-[18rem] p-5 bg-lime-300 transition-transform 
                  duration-300 transform hover:scale-105 rounded-xl shadow-2xl'>
                     <div className='flex justify-between items-center w-full pb-3 font-bold'>
                        <span className='flex justify-center 
                        items-center border-2 border-black 
                        bg-gradient-to-b  from-red-500 to-white 
                        rounded-full w-8 h-8' >{item.id}</span>
                        <h2>{(item.name).toUpperCase()}</h2>
                     </div>
                     <img src={item.img} alt={item.name} className='w-48 h-48 mb-4 p-3 border-black border-2 bg-white rounded-xl' />
                     <Button text="Ver" linkTo={`/pokedex/${item.id}`} styles="bg-slate-950 text-white hover:scale-95 duration-300 w-16 rounded-md py-1" />
                  </div>
               ))}
            </div>
         )}
      </div>
   );
};

export default PokeList;
