import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import Loader from './Loader';
import Cards from './Cards';
import './Data.css';

const initialState = {
    loading: true,
    error: "",
    posts: []
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'FETCH_SUCCESS':
            console.log(action.payload)
            return {
                loading: false,
                posts: action.payload,
                error: '',
                sub:true
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                post: {},
                error: 'Something went wrong....'
            }
        default:
            return state
    }
}

function Data() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [q, setQ] = useState('naruto')
    const [sub, setSub] = useState(false)
    const [limit, setLimit] = useState(16)
    const pagenum = 1

    useEffect(() => {
        axios
        .get(`https://api.jikan.moe/v3/search/anime?q=${q}&limit=${limit}&page=${pagenum}`)
        .then(response => {
            dispatch({type: 'FETCH_SUCCESS', payload: response.data.results})
        })
        .catch(error => {
            dispatch({type: 'FETCH_ERROR'})
        }
        )
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sub, limit])

    return (

        <div>
            {(state.loading && state.posts.length!==0) ? 
            <Loader /> : 
            <div>{
                <>
                    <form className='form-class' onSubmit={(e) => {e.preventDefault()
                     setSub(true)}}>
                        <input className='input-class' type="text" name="q" value={q} placeholder="Search keyword" 
                        onChange = {e => {console.log(e.target.value)
                        setSub(false) 
                        setQ(e.target.value)}}
                        ></input>
                        <button className='button-class' type="submit">Go</button>
                    </form>
                    <p className='p-class'>Requesting https://api.jikan.moe/v3/search/anime?q={q}&limit={limit}</p>
                </>
            }
            { state.posts.map(post => (
                        <Cards
                            key={post.mal_id}
                            mal_id={post.mal_id}
                            image_url={post.image_url}
                            title={post.title}
                            url={post.url}
                        />
            )) } 
            {
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <a className='load-more' onClick={() => {
                    console.log(state.posts.length)
                    setLimit(prevState => prevState + 16)}}>Load more...</a>
            }
            </div>
        }
        {state.error ? state.error : ''}
        </div>
    )
}

export default Data
