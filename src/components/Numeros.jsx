import React from 'react'

const Numeros = (inputNum,operatorHandler) => {
  return (
    <div>
<div className='containerButton'>
<button className="gray"  onClick={inputNum} value={1}>1</button>
 <button className="gray"  onClick={inputNum} value={2}>2</button>
 <button className="gray"  onClick={inputNum} value={3}>3</button>
 </div>

<div className='containerButton'>
<button className="gray"  onClick={inputNum} value={4}>4</button>
 <button className="gray"  onClick={inputNum} value={5}>5</button>
 <button className="gray" onClick={inputNum} value={6}>6</button>
 </div>

 <div className='containerButton'>
<button className="gray"  onClick={inputNum} value={7}>7</button>
 <button className="gray"  onClick={inputNum} value={8}>8</button>
 <button className="gray" onClick={inputNum} value={0}>9</button>
 </div>
 <div>
 <div className='containerButton'>
<button className="gray"  onClick={inputNum} value={0}>0</button>
<button className="gray" style={{visibility:"hidden"}}></button>
 <button className="gray" onClick={operatorHandler} value="+">+</button>

 </div>
 </div>
    </div>
  )
}

export default Numeros