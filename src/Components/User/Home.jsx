import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-3xl text-blue-900 ">Seguimiento Academido</h1>
        <button
          type="submit"
          className="bg-blue-500 text-white py-3 px-6 rounded-full w-20px mt-5"
        >
          <NavLink to="/Login" className="hover:underline ">
            Ingresar
          </NavLink>
        </button>
      </div>
    </div>
  );
};
export default Home;
