import React, { useState } from 'react';
import './App.css';
import ButtonFilter from "./components/ButtonFilter";
import RangeFilter from "./components/RangeFilter";
import Button from "./components/Button";

function App() {

  const formas = [
    {src : "img/Forma/redondo.png", label : "Redondo"},
    {src : "img/Forma/princesa.png", label : "Princesa"},
    {src : "img/Forma/esmeralda.png", label : "Esmeralda"},
    {src : "img/Forma/ovalo.png", label : "Ovalo"},
    {src : "img/Forma/marquesa.png", label : "Marquesa"},
    {src : "img/Forma/pera.png", label : "Pera"},
    {src : "img/Forma/asscher.png", label : "Asscher"},
    {src : "img/Forma/corazon.png", label : "Corazon"},
    {src : "img/Forma/cojin.png", label : "Cojin"},
    {src : "img/Forma/baguette.png", label : "Baguette"},
    {src : "img/Forma/trillon.png", label : "Trillon"},
    {src : "img/Forma/radiante.png", label : "Radiante"},
  ]

   const colores = [
    {src : "img/Color/incoloro.png", label : "Transparente"},
    {src : "img/Color/casi-incoloro.png", label : "Casi incoloro"},
    {src : "img/Color/ligeramente-amarillo.png", label : "Ligeramente amarrillo"},
    {src : "img/Color/amarillo-claro.png", label : "Amarillo claro"},
  ]

   const claridades = [
    {src : "img/Claridad/perfecta.png", label : "Perfecta"},
    {src : "img/Claridad/imperfecciones-no-visibles.png", label : "Imperfecciones no visibles"},
    {src : "img/Claridad/imperfecciones-10x.png", label : "Imperfecciones a 10x"},
    {src : "img/Claridad/imperfecciones-simple-vista.png", label : "Imperfecciones a simple vista"},
  ]

   const cortes = [
    {src : "img/Corte/excelente.png", label : "Excelente (maximo brillo)"},
    {src : "img/Corte/muy-bueno.png", label : "Muy bueno (muy brillante)"},
    {src : "img/Corte/bueno.png", label : "Bueno (brillante)"},
    {src : "img/Corte/regular.png", label : "Regular (poco brillante)"},
  ]

   const rangoQuilatajes = {
    min : 0,
    max : 30,
    imageFrom : "img/Quilataje/pequeno.png",
    imageTo : "img/Quilataje/grande.png"
  }

   const rangoPrecio = {
    min : 200,
    max : 5000000,
    imageFrom : "",
    imageTo : ""
  }

  const [form, setForm] = useState("");
  const [color, setColor] = useState("");
  const [clarity, setClarity] = useState("");
  const [cut, setCut] = useState("");
  const [carat, setCarat] = useState({
    start : rangoQuilatajes.min,
    end : rangoQuilatajes.max
  })
  const [price, setPrice] = useState({
    start : rangoPrecio.min,
    end : rangoPrecio.max
  })

  const search = () => {
    let busqueda = {
      "Forma" : form,
      "Color" : color,
      "Claridad" : clarity,
      "Corte" : cut,
      "Quilataje" : {
        "Desde" : carat.start,
        "Hasta" : carat.end
      },
      "Precio" : {
        "Desde" : price.start,
        "Hasta" : price.end
      }
    }
    console.log(busqueda);
  }

  const limpiar = () => {
    setForm("");
    setColor("");
    setClarity("");
    setCut("");
    setCarat({
      start : rangoQuilatajes.min,
      end : rangoQuilatajes.max
    });
    setPrice({
      start : rangoPrecio.min,
      end : rangoPrecio.max
    })
  }

  
    

  return (
    <div className="Container">
      <div className={"row"}>
        <div className={"col-6"}>
          <ButtonFilter
              title={"Forma"}
              buttons={formas}
              tooltip={"Selecciona la forma del diamante"}
              state={form}
              setState={setForm}
          />
          <ButtonFilter
              title={"Color"}
              buttons={colores}
              tooltip={"Selecciona el color del diamante"}
              state={color}
              setState={setColor}
          />
          <ButtonFilter
              title={"Claridad"}
              buttons={claridades}
              tooltip={"Selecciona la claridad del diamante"}
              state={clarity}
              setState={setClarity}
          />
        </div>
        <div className={"col-6"}>
          <ButtonFilter
            title={"Corte"}
            buttons={cortes}
            tooltip={"Selecciona el corte del diamante"}
            state={cut}
            setState={setCut}
          />
          <RangeFilter title={"Quilataje"}
            tooltip={"Selecciona el rango del quilataje del diamante."}
            min={rangoQuilatajes.min}
            max={rangoQuilatajes.max}
            imageFrom={rangoQuilatajes.imageFrom}
            imageTo={rangoQuilatajes.imageTo}
            step={1}
            state={carat}
            setState={setCarat}
          />
          <RangeFilter title={"Precio"}
            tooltip={"Selecciona el precio del quilataje del diamante."}
            min={rangoPrecio.min}
            max={rangoPrecio.max}
            imageFrom={rangoPrecio.imageFrom}
            imageTo={rangoPrecio.imageTo}
            step={100000}
            state={price}
            setState={setPrice}
          />
        </div>
      </div>
      <div className={"row"}>
        <div className={"col"} id={"botones"}>    
          <Button label={"Buscar"} color={"blue"} submit={search}/>
          <Button label={"Limpiar"} color={"white"} submit={limpiar}/>
        </div>
      </div>
    </div>
  );
}

export default App;
