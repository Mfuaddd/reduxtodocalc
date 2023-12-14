import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { divide, minus, multy, plus } from '../../redux/calculatorSlider'

function Calculator() {
    const result = useSelector((state) => state.calculator.value)
    const dispatch = useDispatch()
    const [num1, setNum1] = useState("")
    const [num2, setNum2] = useState("")
  return (
    <div>
        <div>
            <input type="text" onChange={e=>setNum1(e.target.value)} value={num1}/>
            <input type="text" onChange={e=>setNum2(e.target.value)} value={num2}/>
            {result}
            <button onClick={()=>dispatch(plus([num1,num2]))}>+</button>
            <button onClick={()=>dispatch(minus([num1,num2]))}>-</button>
            <button onClick={()=>dispatch(divide([num1,num2]))}>/</button>
            <button onClick={()=>dispatch(multy([num1,num2]))}>*</button>

            </div>

    </div>
  )
}

export default Calculator