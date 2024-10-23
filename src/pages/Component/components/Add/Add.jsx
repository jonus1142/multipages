import { useState } from 'react';
import Variable from '../Variable/Variable';
import './Add.css';


function Add() {

    const [a, setA] = useState(0);
    const [b, setB] = useState(0);

    return ( 
        <div className='add-container'>
            <h3 className='title'>Add</h3>
            <h2>A=<span className='badge bg-primary'>{a}</span>
            B=<span className='badge bg-primary'>{b}</span>
            A+B=<span className='badge bg-success'>{a + b}</span></h2>
            <div className='var-container'>
                <Variable name={'a'} value={a} setValue={setA} type={'int'} />
                <Variable name={'b'} value={b} setValue={setB} type={'int'} />
            </div>
        </div> 
    );
}

export default Add;