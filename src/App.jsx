import { useState } from 'react';
import './styles/global.css'
import axios from 'axios'

function App() {
  const [pokemon, setPokemon] = useState("")
  const [pokemonData, setPokemonData] = useState(null)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    setPokemon(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!pokemon){
      return
    }
    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      setPokemonData(res.data)
      setError(null)
    } catch (error) {
      setError("Pokemon não encontrado")
      setPokemonData(null)
    }
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <button type='submit'>buscar</button>
      </form>
      {error && <span>{error}</span>}
      {pokemonData && (
        <p>{pokemonData.name}</p>
      )}
    </div>
  )
}

export default App;
