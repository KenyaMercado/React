import React, { useState } from 'react';

function HomePage({ onNameSubmit }) {
  const [name, setName] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNameSubmit(name);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 mt-5">
          <h1 className="text-center">Bienvenido</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Ingresa tu nombre:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Nombre"
                value={name}
                onChange={handleNameChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Ingresar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
