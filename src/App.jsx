import { useState } from 'react';
import axios from 'axios'

function App() {
  const [pokemon, setPokemon] = useState("")
  const [pokemonData, setPokemonData] = useState([])

  const getPokemon = async () => {
    const array = []
    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      array.push(res.data)
      setPokemonData(array)
    } catch (e) {
      console.log(e);
    }
  }

  const handleChange = (e) => {
    setPokemon(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    getPokemon()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
      </form>
      {pokemonData.map(data => (
        <div>
          <p>{data.name}</p>
          <img src={data.sprites.front_default} alt="" />
        </div>
      ))}
    </div>
  )
}

export default App;
