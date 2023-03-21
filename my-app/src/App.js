import React, { useState } from 'react'
import Pokemon from './Pokemon'

function App() {
  const [input, setInput] = useState("")
  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const [poke, setPoke] = useState("")
  const handleSearch = () => {
    setPoke(input)
  }

  return (
    <div>
      <input value={input} onChange={handleInput} type="text" placeholder='search pokemon'></input>
      <button onClick={handleSearch}>Search</button>
      <Pokemon pokeName={poke}/>
    </div>
  )
}

export default App

