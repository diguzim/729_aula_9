export function Button(props) {
  const { estado, mudaEstado } = props

  function onClick() {
    if (estado) {
      mudaEstado(false)
    } else {
      mudaEstado(true)
    }
  }

  return (
    <>
      <button onClick={onClick}>Clique aqui para mudar a visibilidade do texto</button>
    </>
  )
}