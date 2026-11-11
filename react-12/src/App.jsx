import { useState } from 'react';
import axios from 'axios';
import './App.css'

function App() {

  const [fact, setFact] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async(event) =>{
    setError(null)
    setFact("")
    event.preventDefault();

      try{
        const response = await
        axios.get('https://catfact.ninja/fact')
        setFact(response.data.fact)
        
      }catch(error){
        setError("Error")

      }
    

  };

  return (
    <div>
      <h1>Cat Fact Finder</h1>
      <form onSubmit={handleSubmit}>
        <button type='submit'>Get Cat Fact</button>
      </form>
      {fact && <p>{fact}</p>}
      {error && <p style={{color: 'red'}}>{error}</p>}
    </div>
  );
}

export default App
