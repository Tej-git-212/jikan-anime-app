import React from 'react';
import './Loader.css';

function Loader() {
    return (
        <div className='loader-div'>
            <h1 className="load-head">Loading....</h1>
            <div className="loader"></div>
        </div>
    )
}

export default Loader;
