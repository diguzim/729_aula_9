import { MeuTexto } from './components/MeuTexto'

const pessoas = [
  {
    id: 1,
    nome: 'Rodrigo',
    idade: 32
  },
  {
    id: 2,
    nome: 'Dodó',
    idade: 10
  },
  {
    id: 3,
    nome: 'Nina',
    idade: 9
  },
  {
    id: 4,
    nome: "Lucia",
    idade: 53
  },
  {
    id: 5,
    nome: "Claudio",
    idade: 53
  }
]

function App() {
  function retornaPessoa(pessoa, index) {
    return (
      <MeuTexto key={pessoa.nome} nome={pessoa.nome} idade={pessoa.idade} />
    )
  }
  
  return (
    <div className="App">
      {pessoas.map(retornaPessoa)}
    </div>
  );
}

export default App;
