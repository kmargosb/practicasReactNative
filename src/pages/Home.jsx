import React from 'react'

const Home = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white flex flex-col justify-center items-center">
      <header>
        <h1 className="text-4xl font-bold mb-4">¡Hola, soy Nelson Camargo Rios!</h1>
        <p className="text-lg">Frontend Web Developer</p>
      </header>
      <section className="text-center mt-8">
        <p className="text-lg">¡Bienvenido a mi de practica personal!</p>
        <p className="text-lg">Explora algunas de mis prácticas a continuación:</p>
      </section>
      <section className="mt-6">
        <h2 className="text-2xl font-bold mb-3">Prácticas Recientes</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <li className="bg-white p-4 rounded-md shadow-md">
            <div  className="text-blue-500">Proyecto 1</div>
            <p className="mt-2">Descripción corta del proyecto...</p>
          </li>
          <li className="bg-white p-4 rounded-md shadow-md">
            <div  className="text-blue-500">Proyecto 2</div>
            <p className="mt-2">Descripción corta del proyecto...</p>
          </li>
          <li className="bg-white p-4 rounded-md shadow-md">
            <div  className="text-blue-500">Proyecto 3</div>
            <p className="mt-2">Descripción corta del proyecto...</p>
          </li>
        </ul>
      </section>
      <footer className=" fixed bottom-0 flex justify-center">
        <p>&copy; 2023 Nelson Camargo Rios. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Home