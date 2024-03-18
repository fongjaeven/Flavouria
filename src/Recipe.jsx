import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Search from './Search';
import {IoIosArrowBack} from 'react-icons/io'
import { useNavigate } from 'react-router-dom';


function Recipe() {
    const [details, setDetails] = useState({})
    const [summary, setSummary] = useState("")
    const [whichBtn, setwhichBtn] = useState(true)
    const [recipe, setRecipe] = useState("")
    const [ingredients, setIngredients] = useState([])

    const [title, setTitle] = useState("")

    const navigate = useNavigate()

    const params = useParams()
    const fetchDetails = async () => {
        const response = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
        const data = await response.json()
        setDetails(data)
        setTitle(data.title)
        setRecipe(data.instructions.replace(/<\/?[^>]+>/gi, ''))
        setIngredients(data.extendedIngredients)
    } 
    
    const fetchSummary = async () => {
        const response = await fetch(`https://api.spoonacular.com/recipes/${params.id}/summary?apiKey=${process.env.REACT_APP_API_KEY}`)
        const data = await response.json()
        setSummary(data.summary.replace(/<\/?[^>]+>/gi, ''))
    }

    const backToTrending = () => {
        navigate('/')
    }


    useEffect(() => {
        fetchDetails()
        fetchSummary()
    },[params.id])

    useEffect(() => {
        document.title = title
    },[title])


    return (
        <div className='rec'>

            <div  className="DetailsCard">   
                <div >
                    <div  className='recipesearch'>
                        <div className="ww"><Search/> </div>
                        <button className='seaa' onClick={backToTrending}>    
                            <IoIosArrowBack className='searcha'/>
                        </button>
                    </div>
                        
                    <img src={details.image} alt="" className='detailsimg' /></div>        
                <div className='otherthanimg'>
                    <h1 className='detailsTitle'>{details.title}</h1>
                    <div className="btns">
                        <button className={whichBtn ? 'ggg' : 'inff'} onClick={() => setwhichBtn(true)}>Information</button>
                        <button className={whichBtn ? 'inff' : 'ggg'} onClick={() => setwhichBtn(false)}>Recipe</button>
                    </div>

                    {whichBtn ? <p className='detailsSummary'>{summary}</p> : 
                    <div className='detailsSummary'>
                        <div className="in">{ingredients.map((ingredient) => (<p key={ingredient.original}>{ingredient.original}</p>))}</div>
                        <p className='phew'>{recipe}</p>  
                    </div>
        
                    }
                     
                </div>
                
            </div>
            
        </div>
    )
}

export default Recipe