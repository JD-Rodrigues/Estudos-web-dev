import { useEffect, useState } from 'react'
import './App.css'
import { api } from './api'
import { Movie } from './components/Movie'


function App() {

  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(
     ()=>{
        async function load(){
              setLoading(true)
              const response = await api.getMovies()
              setMovies(response)
              setLoading(false)
        }
        load()
    },[]
  )

  if (loading) {
    return(
      <p>Carregando...</p>
    )
  } else {
    return (
      <div className="App">
        {movies.map((movie, index)=>(
          <div key={index}>
            <Movie  movie={movie} index={index}/>
          </div>
        ))}
      </div>       
    ) 
  }
}
  

export default App
