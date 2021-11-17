import React from 'react';
import './Cards.css';

function Cards (props) {
   
    return (
        <div className='card-div'>
        <div key={props.mal_id} className='card-box'>
            <a href={props.url}> <img src={props.image_url} alt={props.title} /></a>
            <h5>{props.title}</h5>
            </div> 
        </div>
    )
}

export default Cards