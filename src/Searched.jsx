import React, { useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import './App.css';
import Search from './Search';


function Searched() {
  const params = useParams()

  const [searches, setSearches] = useState([])

  const getSearch = async (name) => {
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
    const data = await response.json()
    console.log(data)
    setSearches(data.results)
  }

  useEffect(() => {
    getSearch(params.search)
    document.title = `Flavouria - ${params.search.charAt(0).toUpperCase() + params.search.slice(1)}`

  },[params.search])

  return (
    <div className='App'>
      <Search/>
        <div className='Recipes'>
          {(searches.length > 0) ? <div className='Recipes'>
            {searches.map((search) => {
            return(
              <Link to={'/recipe/' + search.id} className='link' key={search.id}>
                <div className="recipeCard">
                  <img src={search.image} alt="" className='recipeimg' />
                  <h1 className='recipeTitle'>{search.title}</h1>             
                </div>
              </Link>
                
            )
          })}
          </div> : <div className='noresult'>No results</div>}
          
        </div>
    </div>
  )
}

export default Searched