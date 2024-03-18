import React, { useState } from 'react'
import {CiSearch} from 'react-icons/ci'
import './App.css';
import { useNavigate } from 'react-router-dom';

function Search() {
    const [input, setInput] = useState("")
    const navigate = useNavigate()
    const handleClick = (e) => {
        e.preventDefault()
        navigate('/search/' + input)
    }

    return (
        <div className='searchbar'>
            <form onSubmit={handleClick}>
            <button className='sea'>    
                <CiSearch className='search'/>
            </button>     
            <input type="text" placeholder='Search for a recipe' className='input'
            onChange={(e) => {setInput(e.target.value)}}/>
            </form>
        </div>
    )
}

export default Search