import { useEffect, useState } from 'react'

// import styles
import './Counter.css'

const Counter = (props) => {

    // getter and setter
    const [value, setValue] = useState(props.value || 0);

    useEffect(() => {
        setValue(props.value || 0);
    }, [props.value]);

    const decrement = () => {
        setValue(value - 1);
    }

    const increment = () => {
        setValue(value + 1);
    }

    // const decrement5 = () => {
    //     setValue(value - 5);
    // }

    // const increment5 = () => {
    //     setValue(value + 5);
    // }

    // render
    return ( 
        <div className='container-container'>
        <div className='container'>
            <h3 className='title'>{props.name || 'Counter'}</h3>
            {/* <button className='button' onClick={decrement5}> -5 </button> */}
            <button className='btn button btn-danger' onClick={decrement}> -1 </button>
            <span className='count value'> {value} </span>
            <button className='btn button btn-success' onClick={increment}> +1 </button>
            {/* <button className='button' onClick={increment5}> +5 </button> */}
        </div>
        </div>
    );
}

export default Counter;