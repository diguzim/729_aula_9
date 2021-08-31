import { useState } from "react"

export function TextInput() {
  const [text, setText] = useState('Rodrigo')
  
  function handleOnChange(event) {
    setText(event.target.value)
  }
  
  return (
    <input type="text" value={text} onChange={handleOnChange} />
  )
}