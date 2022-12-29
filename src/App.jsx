import "./App.css";

import { useState } from "react";


function App() {
  const [num, setNum] = useState(0);
  const [oldNum, setOldNum] = useState(0);
  const [operator, setOperator] = useState();
 
  const [propina,setPropina]=useState(0)
  const [valorTotal, setValorTotal] = useState(0);
  function inputNum(e) {
    let input = e.target.value;
    if (num === 0) {
      setNum(input);
    } else {
      setNum(num + input);
    }
  }

  function clear() {
    setNum(0);
  }
  function operatorHandler(e) {
    let operatorInput = e.target.value;
    setOperator(operatorInput);
    setOldNum(num);
    setNum(0);
  }
  function calculate() {
    if (operator === "+") {
      setNum(parseFloat(oldNum) + parseFloat(num));
    }
  }
  function porcentage() {
    setPropina(num * 0.10);
  }

  function costoTotal() {
  setValorTotal(parseFloat(num) + parseFloat(propina))
  }

  return (
    <div className="container">
      <h1>To gO</h1>

      <div>
        <div className="containerButton">
          <button className="gray" onClick={inputNum} value={1}>
            1
          </button>
          <button className="gray" onClick={inputNum} value={2}>
            2
          </button>
          <button className="gray" onClick={inputNum} value={3}>
            3
          </button>
        </div>

        <div className="containerButton">
          <button className="gray" onClick={inputNum} value={4}>
            4
          </button>
          <button className="gray" onClick={inputNum} value={5}>
            5
          </button>
          <button className="gray" onClick={inputNum} value={6}>
            6
          </button>
        </div>

        <div className="containerButton">
          <button className="gray" onClick={inputNum} value={7}>
            7
          </button>
          <button className="gray" onClick={inputNum} value={8}>
            8
          </button>
          <button className="gray" onClick={inputNum} value={0}>
            9
          </button>
        </div>
        <div>
          <div className="containerButton">
            <button className="gray" onClick={inputNum} value={0}>
              0
            </button>
            <button className="gray" style={{ visibility: "hidden" }}></button>
            <button className="gray" onClick={operatorHandler} value="+">
              +
            </button>
          </div>
        </div>
      </div>

      <button className="subTotal" onClick={calculate}>
        SubTotal
      </button>
      <button className="valorAPagar" onClick={porcentage}>
        {" "}
        propina
      </button>
      <div className="botones">
        <button className="buttonReset" onClick={clear}>
          Reset
        </button>
        <button className="buttonSuma" onClick={costoTotal}>
          Valor Total
        </button>
        <h2 className="result" >
        
          subTotal= {num}
        </h2>
        <h2 className="result" >
          Propina = {propina}
        </h2>
        <h2 className="result" >
           Valor a Pagar :o = {valorTotal}</h2>
      </div>
    </div>
  );
}

export default App;
