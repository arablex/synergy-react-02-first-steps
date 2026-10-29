import React from 'react'
import './Input.css'

// Компонент поля ввода. React.forwardRef нужен, чтобы родитель (App)
// мог получить ссылку (ref) на настоящий DOM-элемент <input>
// и очистить его значение из своей функции.
// {...props} передаёт внутрь все остальные атрибуты (placeholder и т.д.).
const Input = React.forwardRef((props, ref) => {
  return <input ref={ref} className="custom-input" {...props} />
})

export default Input
