import React, { useState, useEffect } from "react";
import { colombiaData } from "./data";

function UserForm() {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    institution: "",
    grade: "",
    password: "",
    confirmPassword: "",
    department: "",
    city: "",
  });

  const [errors, setErrors] = useState({});
  const [cities, setCities] = useState([]);

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    if (input.department) {
      setCities(colombiaData[input.department] || []);
    } else {
      setCities([]);
    }
  }, [input.department]);

  const validate = () => {
    let errors = {};

    if (!input.firstName) errors.firstName = "Nombre es obligatorio";
    if (!input.lastName) errors.lastName = "Apellido es obligatorio";
    if (!input.email) {
      errors.email = "Email es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(input.email)) {
      errors.email = "Email no es válido";
    }
    if (!input.institution) errors.institution = "Institución es obligatorio";
    if (!input.grade) errors.grade = "Grado es obligatorio";
    if (!input.password) {
      errors.password = "Contraseña es obligatoria";
    } else if (input.password.length < 6) {
      errors.password = "La contraseña debe tener al menos 6 caracteres";
    }
    if (input.password !== input.confirmPassword) {
      errors.confirmPassword = "Las contraseñas no coinciden";
    }
    if (!input.department) errors.department = "Departamento es obligatorio";
    if (!input.city) errors.city = "Ciudad es obligatorio";

    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Submit form
      console.log("Formulario enviado", input);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen mt-32">
      <div className="w-full max-w-md p-6 bg-white border border-gray-300 rounded shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Registro de Estudiantes
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 mb-2">Nombre</label>
            <input
              type="text"
              name="firstName"
              placeholder="Ingrese su nombre"
              value={input.firstName}
              onChange={handleChange}
              className="border rounded p-3 w-full bg-white focus:outline-none"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Apellido</label>
            <input
              type="text"
              name="lastName"
              placeholder="Ingrese su apellido"
              value={input.lastName}
              onChange={handleChange}
              className="border rounded p-3 w-full bg-white focus:outline-none"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Ingrese su email"
              value={input.email}
              onChange={handleChange}
              className="border rounded p-3 w-full bg-white focus:outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 mb-2">
              Institución Educativa
            </label>
            <input
              type="text"
              name="institution"
              placeholder="Ingrese su institución educativa"
              value={input.institution}
              onChange={handleChange}
              className="border rounded p-3 w-full bg-white focus:outline-none"
            />
            {errors.institution && (
              <p className="text-red-500 text-sm">{errors.institution}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Grado</label>
            <input
              type="text"
              name="grade"
              placeholder="Ingrese su grado"
              value={input.grade}
              onChange={handleChange}
              className="border rounded p-3 w-full bg-white focus:outline-none"
            />
            {errors.grade && (
              <p className="text-red-500 text-sm">{errors.grade}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Contraseña</label>
            <input
              type="password"
              name="password"
              placeholder="Ingrese su contraseña"
              value={input.password}
              onChange={handleChange}
              className="border rounded p-3 w-full bg-white focus:outline-none"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 mb-2">
              Confirmar Contraseña
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirme su contraseña"
              value={input.confirmPassword}
              onChange={handleChange}
              className="border rounded p-3 w-full bg-white focus:outline-none"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Departamento</label>
            <select
              name="department"
              value={input.department}
              onChange={handleChange}
              className="border rounded p-3 w-full bg-white focus:outline-none"
            >
              <option value="">Seleccione su departamento</option>
              {Object.keys(colombiaData).map((department) => (
                <option key={department} value={department}>
                  {department}
                </option>
              ))}
            </select>
            {errors.department && (
              <p className="text-red-500 text-sm">{errors.department}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Ciudad</label>
            <select
              name="city"
              value={input.city}
              onChange={handleChange}
              className="border rounded p-3 w-full bg-white focus:outline-none"
              disabled={!input.department}
            >
              <option value="">Seleccione su ciudad</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            {errors.city && (
              <p className="text-red-500 text-sm">{errors.city}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white mt-6 py-3 px-6 rounded-full w-full"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserForm;
