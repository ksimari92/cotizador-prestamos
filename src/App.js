import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Mensaje from './components/Mensaje';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';


function App() {
  //Definir state
  const [cantidad, setCantidad] = useState(0);
  const [plazo, setPlazo] = useState("");
  const [total, setTotal] = useState(0);
  const [load, setLoad] = useState(false);

  let componente;
if(load){
  componente = <Spinner/>

}else if (total === 0) {
    componente = <Mensaje />
  } else {
    componente = <Resultado
                  total={total}
                  plazo={plazo}
                 cantidad={cantidad}
                />
  }

  return (
    <div className="App">
      <Header />

      <div className="container">
        <Formulario
          cantidad={cantidad}
          setCantidad={setCantidad}
          plazo={plazo}
          setPlazo={setPlazo}
          total={total}
          setTotal={setTotal}
          setLoad={setLoad}
        />
       <div className="total">
       {componente}
       </div>
      </div>
    </div>
  );
}

export default App;
