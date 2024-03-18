import './App.css';
import Search from './Search';
import  { useEffect , useState } from 'react';
import { Link } from 'react-router-dom';

function App() {
  //api 4f1446724d614d4dbf58ee1d2cca9287
  
  
  const [recipes, setRecipes] = useState([])

  const getRandomRecipes = async () => {
    const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`)
    const data = await response.json()
    setRecipes(data.recipes)
  }

  useEffect(() => {
    getRandomRecipes()
    document.title = "Flavouria - Delicious Recipes"
  },[])
  

  return (
    <div className="App">
      
      <h1 className='popularbig'>Flavouria</h1>
      <Search/>
      
      <div className='Recipes'>
         {recipes.map((recipe) => { return ( <Link to={'/recipe/' + recipe.id} className='link' key={recipe.id}>
            <div  className="recipeCard">
              <img src={recipe.image} alt="" className='recipeimg' />
              <h2 className='recipeTitle'>{recipe.title}</h2>
            </div>
            </Link> ) })}
      </div>
    </div>
  );
}

export default App;
