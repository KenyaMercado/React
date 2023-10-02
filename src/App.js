import React, { useState } from 'react';
import HomePage from './HomePage'; // Importa la página de inicio donde se obtiene el nombre
import PostPage from './PostPage'; // Importa la página de publicaciones

function App() {
  const [userName, setUserName] = useState(''); // Estado para almacenar el nombre del usuario

  const handleNameSubmit = (name) => {
    setUserName(name); // Almacena el nombre del usuario en el estado
  };

  return (
    <div className="App">
      {userName ? (
        // Si se ha ingresado un nombre, muestra la página de publicaciones y pasa el nombre como prop
        <PostPage name={userName} />
      ) : (
        // Si no se ha ingresado un nombre, muestra la página de inicio para pedir el nombre
        <HomePage onNameSubmit={handleNameSubmit} />
      )}
    </div>
  );
}

export default App;
