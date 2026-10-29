import React, { useRef } from 'react'
import Button from './components/Button'
import Input from './components/Input'
import './App.css'

function App() {
  // useRef создаёт «ящик» для ссылки на DOM-элемент поля ввода.
  // Перерисовки компонента при изменении ref не происходит.
  const inputRef = useRef(null)

  // Обработчик кнопки «Очистить»: если ссылка на input уже есть,
  // записываем в value пустую строку — поле очищается.
  const handleClear = () => {
    if (inputRef.current) {
      inputRef.current.value = ''
      inputRef.current.focus() // удобство: возвращаем курсор в поле
    }
  }

  return (
    <div className="app-container">
      {/* ref связывает inputRef с DOM-элементом внутри Input */}
      <Input ref={inputRef} placeholder="Введите текст..." />
      {/* Передаём handleClear в Button через проп onClick */}
      <Button onClick={handleClear} />
    </div>
  )
}

export default App
