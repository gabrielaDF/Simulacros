import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function UserLogin() {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="w-full max-w-sm p-6 bg-white border border-blue-500 rounded shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Iniciar Sesión</h1>
        <form
        //onSubmit={handleSubmit}
        >
          <div>
            <label className="block text-blue-500 mb-2">Usuario</label>
            <input
              type="text"
              name="username"
              placeholder="Ingrese su usuario"
              value={input.username}
              onChange={handleChange}
              className="border rounded p-3 w-full bg-white focus:outline-none"
            />
          </div>
          <div className="mt-4">
            <label className="block text-blue-500 mb-2">Contraseña</label>
            <input
              type="password"
              name="password"
              placeholder="Ingrese su Contraseña"
              value={input.password}
              onChange={handleChange}
              className="border rounded p-3 w-full bg-white focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white mt-6 py-3 px-6 rounded-full w-full"
          >
            Enviar
          </button>
          <div className="mt-4 text-center">
            <span>¿No tiene una cuenta?</span>
            <NavLink to="/userform">
              <span className="ml-2 text-blue-500">Regístrese</span>
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserLogin;
