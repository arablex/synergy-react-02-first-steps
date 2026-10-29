import React from 'react'
import './Button.css' // стили кнопки лежат рядом с компонентом

// Компонент кнопки. Принимает проп onClick — функцию, которую родитель
// хочет вызвать при нажатии (в нашем случае — очистку поля ввода).
const Button = ({ onClick }) => {
  return (
    <button className="custom-button" onClick={onClick}>
      Очистить
    </button>
  )
}

export default Button
