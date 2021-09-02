export function Input({ type, value, onChangeValue }) {
  function handleOnChange(e) {
    if (onChangeValue) {
      onChangeValue(e.target.value)
    }
  }

  return (
    <input type={type} value={value} onChange={handleOnChange}></input>
  )
}