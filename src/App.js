import { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';


function App() {
  // LOGIC START HERE
  const [val, setVal] = useState("")

  function getbtnvalue(e)
  {
    const output= (val.concat(e.target.name));
    setVal((output))
  }
  function clearvalue(){
    setVal("")
  }

  //section2
  let a=10;
  let b=200;
  let inp_val ="";
  function result()
  {
          try
          {
                setVal(eval(val).toString())
          }
          catch(err)
          {
                  setVal("Error!")
          }

                
  }
  function delvalue()
  {
          setVal(val.slice(0,-1))
  }



  return (
        <div className="main_container">  
          <div className="calc_container shadow-lg p-3 mb-5 bg-dark rounded">
                <div className="top_controls">
                    <input className="fw-bold bg-dark fs-1" id="inpt" type="text" value={val} placeholder="0"/>
                </div>
       <h1>{inp_val}</h1>
               <div className="row justify-content-md-center  cus_margin m-0">
                      <button className="col vals col-lg-0 text-center fw-bold m-1 fs-3 py-2 shadow p-3 mb-1 btn_clr rounded cus_margin bg-light" onClick={getbtnvalue} id="vals" name="1">1</button>
                      <button className="col vals col-lg-0 text-center fw-bold m-1 fs-3 py-2 shadow p-3 mb-1 btn_clr rounded bg-light"onClick={getbtnvalue} id='val2' name="2">2</button>
                      <button className="col vals col-lg-0 text-center fw-bold m-1 fs-3 py-2 shadow p-3 mb-1 btn_clr rounded bg-light"onClick={getbtnvalue} id='val3' name="3">3</button>
                      <button className="col vals col-lg-0 text-center fw-bold m-1 fs-3 py-2 shadow p-3 mb-1 new_bg  rounded cus_margin_right btn_op_clr"name="/"onClick={getbtnvalue}>/</button>
              </div>
              <div className="row justify-content-md-center  cus_margin m-0">
                      <button className="col vals col-lg-0 text-center fw-bold m-1 fs-3 py-2 shadow p-3 mb-1 btn_clr rounded cus_margin bg-light"onClick={getbtnvalue} name="4">4</button>
                      <button className="col vals col-lg-0 text-center fw-bold m-1 fs-3 py-2 shadow p-3 mb-1 btn_clr rounded bg-light"name="5"onClick={getbtnvalue}>5</button>
                      <button className="col vals col-lg-0 text-center fw-bold m-1 fs-3 py-2 shadow p-3 mb-1 btn_clr rounded bg-light"name="6"onClick={getbtnvalue}>6</button>
                      <button className="col col-lg-0 text-center fw-bold m-1 fs-3 py-2 shadow p-3 mb-1 bg-warning new_bg rounded cus_margin_right btn_op_clr"name="*"onClick={getbtnvalue}>X</button>
              </div>
              <div className="row justify-content-md-center  cus_margin m-0">
                      <button className="col vals col-lg-0 text-center fw-bold m-1 fs-3 py-2 shadow p-3 mb-1 btn_clr rounded cus_margin bg-light"name="7"onClick={getbtnvalue}>7</button>
                      <button className="col vals col-lg-0 text-center fw-bold m-1 fs-3 py-2 shadow p-3 mb-1 btn_clr rounded bg-light"name="8"onClick={getbtnvalue}>8</button>
                      <button className="col vals col-lg-0 text-center fw-bold m-1 fs-3 py-2 shadow p-3 mb-1 btn_clr rounded bg-light"name="9"onClick={getbtnvalue}>9</button>
                      <button className="col col-lg-0 text-center fw-bold m-1 fs-3 py-2 shadow p-3 mb-1 bg-warning new_bg rounded cus_margin_right btn_op_clr "name="-"onClick={getbtnvalue}>-</button>
              </div>
              <div className="row justify-content-md-center  cus_margin m-0">
                      <button className="col vals col-lg-0 text-center fw-bold m-1 fs-3 py-2 shadow p-3 mb-1 btn_clr rounded cus_margin bg-light"name="0" onClick={getbtnvalue}>0</button>
                      <button className="col vals col-lg-0 text-center fw-bold m-1 fs-3 py-2 shadow p-3 mb-1 btn_clr rounded bg-light"name="." onClick={getbtnvalue}>.</button>
                      <button className="col vals col-lg-0 text-center fw-bold m-1 fs-3 py-2 shadow p-3 mb-1 btn_c rounded bg-danger"name="c" onClick={clearvalue}>C</button>
                      <button className="col vals col-lg-0 text-center fw-bold m-1 fs-3 py-2 shadow p-3 mb-1 btn_c rounded bg-danger"name="c" onClick={delvalue}>Del</button>
                      <button className="col col-lg-0 text-center fw-bold m-1 fs-3 py-2 shadow p-3 mb-1 bg-warning new_bg rounded cus_margin_right btn_op_clr "name="+"onClick={getbtnvalue}>+</button>
              </div>
              <div className="row justify-content-md-center  cus_margin m-0">
                      <button className="col shadow-lg p-3 btn_eq_hvr mb-5 bg-success rounded text-white text-center new_bg fw-bold m-1 fs-2 py-2 cus_margin_eq "name="=" onClick={result}>=</button>
              </div>
              
        </div>
        </div>
  );
}

export default App;
