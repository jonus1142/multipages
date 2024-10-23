import { useEffect, useState } from 'react'

// import styles
import './Variable.css'

const Variable = ({name, value, setValue, type}) => {

    // render
    return ( 
        <div className='vcontainer-container'>
        <div className='vcontainer'>
            <h3 className='title'>{name || 'Variable'}</h3>
            <button className='btn button btn-danger' onClick={() => setValue(value - 1)}> -1 </button>
            <span className='count value'> {type && type === 'int' ? value : value.toFixed(2)} </span>
            <button className='btn button btn-success' onClick={() => setValue(value + 1)}> +1 </button>
        </div>
        </div>
    );
}

export default Variable;