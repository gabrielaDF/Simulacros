import React from "react";
import { simulacrosData } from "./simulacrosData";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const SimulacrosResumen = () => {
  const estudiantes = simulacrosData.map(
    (estudiante) => estudiante.nombres + " " + estudiante.apellidos
  );
  const simulacro1 = simulacrosData.map(
    (estudiante) => estudiante.simulacro1.correctas
  );
  const simulacro2 = simulacrosData.map(
    (estudiante) => estudiante.simulacro2.correctas
  );
  const simulacro3 = simulacrosData.map(
    (estudiante) => estudiante.simulacro3.correctas
  );
  const promedios = simulacrosData.map(
    (estudiante) => estudiante.promedio.correctas
  );

  const data = {
    labels: estudiantes,
    datasets: [
      {
        label: "Simulacro 1",
        data: simulacro1,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
      {
        label: "Simulacro 2",
        data: simulacro2,
        backgroundColor: "rgba(153, 102, 255, 0.6)",
      },
      {
        label: "Simulacro 3",
        data: simulacro3,
        backgroundColor: "rgba(255, 159, 64, 0.6)",
      },
      {
        label: "Promedio",
        data: promedios,
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
    ],
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Resumen de Simulacros
      </h2>
      <Bar data={data} />
    </div>
  );
};

export default SimulacrosResumen;
