import React, { useState } from "react";

const EnvironmentalCalculator = () => {
  // Estados para los insumos
  const [latas, setLatas] = useState(0);
  const [cuadernos, setCuadernos] = useState(0);
  const [botellas, setBotellas] = useState(0);

  // Estado para almacenar los resultados
  const [results, setResults] = useState({
    lata_energia: 0,
    lata_agua: 0,
    lata_co2: 0,
    cuaderno_energia: 0,
    cuaderno_agua: 0,
    cuaderno_co2: 0,
    botella_energia: 0,
    botella_agua: 0,
    botella_co2: 0,
    total_energia: 0,
    total_agua: 0,
    total_co2: 0,
    hectareas: 0,
    peso_latas: 0,
    peso_cuadernos: 0,
    peso_botellas: 0,
    peso_total: 0,
  });

  // Estado para el acordeón (mostrar/ocultar calculadora)
  const [accordionOpen, setAccordionOpen] = useState(false);

  const calculateImpact = () => {
    const cantidadLatas = Number(latas) || 0;
    const cantidadCuadernos = Number(cuadernos) || 0;
    const cantidadBotellas = Number(botellas) || 0;

    // Cálculos de impacto por insumo
    const lata_energia = cantidadLatas * 15;
    const lata_agua = cantidadLatas * 1.5;
    const lata_co2 = cantidadLatas * 2.7;

    const cuaderno_energia = cantidadCuadernos * 2;
    const cuaderno_agua = cantidadCuadernos * 10;
    const cuaderno_co2 = cantidadCuadernos * 1.5;

    const botella_energia = cantidadBotellas * 1.9;
    const botella_agua = cantidadBotellas * 3;
    const botella_co2 = cantidadBotellas * 0.9;

    // Totales
    const total_energia = lata_energia + cuaderno_energia + botella_energia;
    const total_agua = lata_agua + cuaderno_agua + botella_agua;
    const total_co2 = lata_co2 + cuaderno_co2 + botella_co2;

    // Huella ecológica (ejemplo: total_co2 / 2.7)
    const hectareas = total_co2 / 2.7;

    // Cálculo de pesos en gramos
    const pesoLatas = cantidadLatas * 12;
    const pesoCuadernos = cantidadCuadernos * 160;
    const pesoBotellas = cantidadBotellas * 20;
    const pesoTotal = pesoLatas + pesoCuadernos + pesoBotellas;

    setResults({
      lata_energia,
      lata_agua,
      lata_co2,
      cuaderno_energia,
      cuaderno_agua,
      cuaderno_co2,
      botella_energia,
      botella_agua,
      botella_co2,
      total_energia,
      total_agua,
      total_co2,
      hectareas,
      peso_latas: pesoLatas,
      peso_cuadernos: pesoCuadernos,
      peso_botellas: pesoBotellas,
      peso_total: pesoTotal,
    });
  };

  const resetCalculator = () => {
    setLatas(0);
    setCuadernos(0);
    setBotellas(0);
    setResults({
      lata_energia: 0,
      lata_agua: 0,
      lata_co2: 0,
      cuaderno_energia: 0,
      cuaderno_agua: 0,
      cuaderno_co2: 0,
      botella_energia: 0,
      botella_agua: 0,
      botella_co2: 0,
      total_energia: 0,
      total_agua: 0,
      total_co2: 0,
      hectareas: 0,
      peso_latas: 0,
      peso_cuadernos: 0,
      peso_botellas: 0,
      peso_total: 0,
    });
  };

  return (
    <div className="min-h-screen bg-gray-200 p-4">
      {/* Encabezado con patrocinadores */}
      <header className="flex justify-center items-center space-x-4 py-4 bg-blue-600">
        <img
          src="https://www.fedusocial.org/midsit.png"
          alt="Patrocinador 1"
          className="max-w-[130px]"
        />
        <img
          src="https://www.fedusocial.org/LOGO%20FSG.png"
          alt="Patrocinador 2"
          className="max-w-[150px]"
        />
        <img
          src="https://www.fedusocial.org/Logo%20RH%20-1-%20-1--1.png"
          alt="Patrocinador 3"
          className="max-w-[120px]"
        />
        <img
          src="https://us.iearn.org/assets/imgs/partners_americas_logo.jpg"
          alt="Patrocinador 4"
          className="max-w-[230px]"
        />
        <img
          src="https://www.fedusocial.org/cedecur%20-%20copia.png"
          alt="Patrocinador 5"
          className="max-w-[130px]"
        />
      </header>

      <h1 className="text-3xl text-center font-bold py-4 bg-blue-600 text-white">
        PROGRAMA TRUEQUE AMBIENTAL
      </h1>

      {/* Sección de videos */}
      <div className="flex flex-col items-center space-y-4">
        <iframe
          width="150"
          height="85"
          src="https://www.youtube.com/embed/jL4cwuC4Mls"
          frameBorder="0"
          allowFullScreen
          title="Video 1"
        ></iframe>
        <iframe
          src="https://archivo.lostutores.co/embed/0e3x2a02600b4ce7147e1bff0dac587636f1e?toolbar=false&appearance=light&themecolor=green"
          scrolling="no"
          frameBorder="0"
          allowFullScreen
          width="800"
          height="620"
          title="Video 2"
        ></iframe>
      </div>

      {/* Acordeón para mostrar/ocultar la calculadora */}
      <div className="mt-8">
        <div
          className="bg-gray-800 text-white p-4 text-center cursor-pointer select-none"
          onClick={() => setAccordionOpen(!accordionOpen)}
        >
          {accordionOpen
            ? "▲ OCULTAR CALCULADORA"
            : "▼ CALCULA TU HUELLA ECOLÓGICA AQUÍ"}
        </div>
        {accordionOpen && (
          <div className="p-4 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Columna Latas */}
              <div className="flex flex-col items-center border p-4 rounded-md bg-gray-100">
                <img
                  src="https://via.placeholder.com/250x150.png?text=Lata"
                  alt="Lata"
                  className="w-64 h-40 object-cover mb-2"
                />
                <p className="text-sm mb-2">Ingrese cantidad</p>
                <input
                  type="number"
                  value={latas}
                  onChange={(e) => setLatas(e.target.value)}
                  className="text-center border rounded-md p-2 mb-2 w-24"
                />
                <div className="text-center">
                  <strong>Recursos Ahorrados</strong>
                  <p>
                    <strong>{results.lata_energia.toFixed(2)} kWh</strong>
                  </p>
                  <p>
                    <strong>{results.lata_agua.toFixed(2)} litros</strong>
                  </p>
                  <p>
                    <strong>{results.lata_co2.toFixed(2)} kg</strong>
                  </p>
                </div>
              </div>
              {/* Columna Cuadernos */}
              <div className="flex flex-col items-center border p-4 rounded-md bg-gray-100">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScxVEpoR3bIZFcvBesZIcdQgRusfmSuaDn9A&usqp=CAU"
                  alt="Cuadernos"
                  className="w-52 h-32 object-cover mb-2"
                />
                <p className="text-sm mb-2">Ingrese cantidad</p>
                <input
                  type="number"
                  value={cuadernos}
                  onChange={(e) => setCuadernos(e.target.value)}
                  className="text-center border rounded-md p-2 mb-2 w-24"
                />
                <div className="text-center">
                  <strong>Recursos Ahorrados</strong>
                  <p>
                    <strong>{results.cuaderno_energia.toFixed(2)} kWh</strong>
                  </p>
                  <p>
                    <strong>{results.cuaderno_agua.toFixed(2)} litros</strong>
                  </p>
                  <p>
                    <strong>{results.cuaderno_co2.toFixed(2)} kg</strong>
                  </p>
                </div>
              </div>
              {/* Columna Botellas */}
              <div className="flex flex-col items-center border p-4 rounded-md bg-gray-100">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyWggOejQ39UhGciKwdzdqdlqsH-E6SNu8fw&usqp=CAU"
                  alt="Botellas"
                  className="w-64 h-40 object-cover mb-2"
                />
                <p className="text-sm mb-2">Ingrese cantidad</p>
                <input
                  type="number"
                  value={botellas}
                  onChange={(e) => setBotellas(e.target.value)}
                  className="text-center border rounded-md p-2 mb-2 w-24"
                />
                <div className="text-center">
                  <strong>Recursos Ahorrados</strong>
                  <p>
                    <strong>{results.botella_energia.toFixed(2)} kWh</strong>
                  </p>
                  <p>
                    <strong>{results.botella_agua.toFixed(2)} litros</strong>
                  </p>
                  <p>
                    <strong>{results.botella_co2.toFixed(2)} kg</strong>
                  </p>
                </div>
              </div>
            </div>
            {/* Botones Calcular y Reiniciar */}
            <div className="flex justify-center space-x-4 mt-4">
              <button
                onClick={calculateImpact}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Calcular
              </button>
              <button
                onClick={resetCalculator}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
              >
                Reiniciar
              </button>
            </div>
            {/* Sección de Impacto Total */}
            <div className="mt-8 text-center">
              <h2 className="text-xl font-bold mb-4">
                ESTE ES TU IMPACTO TOTAL
              </h2>
              <div className="flex justify-center space-x-4">
                <div>
                  <strong>{results.total_energia.toFixed(2)} kWh</strong>
                </div>
                <div>
                  <strong>{results.total_agua.toFixed(2)} litros</strong>
                </div>
                <div>
                  <strong>{results.total_co2.toFixed(2)} kg</strong>
                </div>
              </div>
              <div className="mt-4">
                <p>
                  <strong className="text-blue-600">
                    Tu Huella Ecológica:
                  </strong>{" "}
                  <span className="text-green-600 text-lg mx-2">
                    {results.hectareas.toFixed(2)}
                  </span>{" "}
                  <strong className="text-blue-600">Hectáreas Globales</strong>
                </p>
              </div>
              {/* Tabla de Pesos */}
              <div className="mt-4 overflow-x-auto">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="bg-green-600 text-white">
                      <th className="p-2 border">
                        Tipo de Material Reciclable
                      </th>
                      <th className="p-2 border">Peso Promedio (gramos)</th>
                      <th className="p-2 border">Peso Total (gramos)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-center">
                      <td className="p-2 border">Cuaderno de 100 hojas</td>
                      <td className="p-2 border">160</td>
                      <td className="p-2 border">{results.peso_cuadernos}</td>
                    </tr>
                    <tr className="text-center">
                      <td className="p-2 border">Lata de aluminio</td>
                      <td className="p-2 border">12</td>
                      <td className="p-2 border">{results.peso_latas}</td>
                    </tr>
                    <tr className="text-center">
                      <td className="p-2 border">Botella plástica de 500 mL</td>
                      <td className="p-2 border">20</td>
                      <td className="p-2 border">{results.peso_botellas}</td>
                    </tr>
                    <tr className="text-center font-bold">
                      <td className="p-2 border">
                        Peso Total del Material Reciclado
                      </td>
                      <td className="p-2 border"></td>
                      <td className="p-2 border">{results.peso_total}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* Tabla de Recomendaciones */}
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-2">
                  Recomendaciones Ambientales
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse">
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th className="p-2 border">AHORRO DE ENERGÍA</th>
                        <th className="p-2 border">AHORRO DE AGUA</th>
                        <th className="p-2 border">MENOS EMISIONES DE CO2</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="text-left">
                        <td className="p-2 border">
                          Reduce el consumo de Energía (kWh) - Usa Energía
                          Renovable: Cambia a fuentes de energía renovable, como
                          la energía solar o eólica, para reducir la dependencia
                          de combustibles fósiles. - Aplica la Eficiencia
                          Energética: Mejora la eficiencia energética en tu
                          hogar o negocio. Utiliza bombillas LED,
                          electrodomésticos eficientes y aísla bien tu vivienda.
                        </td>
                        <td className="p-2 border">
                          Reduce el consumo de Agua (Litros) - Reutilizar y
                          Reciclar: Utiliza sistemas de reciclaje de agua para
                          reutilizar el agua de lluvia y aguas grises para fines
                          no potables, como el riego del jardín. - Arreglar
                          Fugas: Repara las fugas de agua en tuberías y grifos,
                          ya que las fugas desperdician grandes cantidades de
                          agua.
                        </td>
                        <td className="p-2 border">
                          Reduce las emisiones de CO2 (Kg) - Transporte
                          Sostenible: Opta por el transporte público, carpooling
                          o usa vehículos eléctricos para reducir las emisiones
                          de CO2 relacionadas con el transporte. - Reducir Uso
                          de Combustibles Fósiles: Disminuye tu dependencia de
                          combustibles fósiles, como la gasolina, y considera
                          utilizar vehículos más eficientes en términos de
                          consumo de combustible.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Pie de página */}
      <footer className="bg-gray-800 text-white text-center p-2 mt-8">
        &copy; 2025 Calculadora Ambiental. Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default EnvironmentalCalculator;
