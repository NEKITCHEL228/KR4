import { useState } from 'react'
import './App.css'

function App() {
  const [firstValue, setFirstValue] = useState('')
  const [secondValue, setSecondValue] = useState('')
  const [answer, setAnswer] = useState('')
  const [operation, setOperation] = useState('')
  const [lastOperation, setLastOperation] = useState('')


  function addition() {
    if (firstValue && secondValue) {
      let num1 = parseFloat(firstValue)
      let num2 = parseFloat(secondValue)
      setAnswer(num1 + num2)
      setOperation('+')
    }
  }

  function division() {
    if (firstValue && secondValue) {
      let num1 = parseFloat(firstValue)
      let num2 = parseFloat(secondValue)
      setOperation('/')
      if (num2 !== 0) {
        setAnswer(num1 / num2)
      } else {
        setAnswer('Ошибка: деление на ноль')
      }
    }
  }

  function substraction() {
    if (firstValue && secondValue) {
      let num1 = parseFloat(firstValue)
      let num2 = parseFloat(secondValue)
      setAnswer(num1 - num2)
      setOperation('-')
    }
  }

  function multiplication() {
    if (firstValue && secondValue) {
      let num1 = parseFloat(firstValue)
      let num2 = parseFloat(secondValue)
      setAnswer(num1 * num2)
      setOperation('*')
    }
  }

  return (
    <>
      <header className="main-header">
        <h1>Простой калькулятор</h1>
      </header>

      <div className="input-lines">
        <div className="input-line">
          <input type="number" onChange={(e) => setFirstValue(e.target.value)} placeholder="Первое число"></input>
        </div>
        <div className="input-line">
          <input type="number" onChange={(e) => setSecondValue(e.target.value)} placeholder="Второе число"></input>
        </div>
      </div>

      <div className="operation-line">
        <div className="container">
          <button className="addition" onClick={addition}>+</button>
        </div>

        <div className="container">
          <button className="substraction" onClick={substraction}>-</button>
        </div>

        <div className="container">
          <button className="multiplication" onClick={multiplication}>*</button>
        </div>

        <div className="container">
          <button className="division" onClick={division}>/</button>
        </div>
      </div>

      <div className='container'>
        <div className="output-line">
          <span className="output-line-value">{firstValue} {operation} {secondValue} = {answer}</span>
        </div>
      </div>

    </>
  )
}

export default App
