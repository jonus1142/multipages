import './temperatures.css';
import Variable from '../Variable/Variable';

import { useEffect, useState } from 'react';

function Temperatures({name, celsiusValue}) {

    const [celsius, setCelsius] = useState(celsiusValue);
    const [fahrenheit, setFahrenheit] = useState(celsiusValue * 1.8 + 32);
    const [kelvin, setKelvin] = useState(celsiusValue + 273.15);

    useEffect(() => {
        celsiusToOthers(celsius);
    }, [celsius]);

    useEffect(() => {
        fahrenheitToOthers(fahrenheit);
    }, [fahrenheit]);

    useEffect(() => {
        kelvinToOthers(kelvin);
    }, [kelvin]);


    // temperature conversions
    const celsiusToOthers = () => {
        setCelsius(celsius);
        setFahrenheit(celsius * 1.8 + 32);
        setKelvin(celsius + 273.15);
    }

    const fahrenheitToOthers = () => {
        setFahrenheit(fahrenheit);
        setCelsius((fahrenheit - 32) / 1.8);
        setKelvin((fahrenheit - 32) / 1.8 + 273.15);
    }

    const kelvinToOthers = () => {
        setKelvin(kelvin);
        setCelsius(kelvin - 273.15);
        setFahrenheit((kelvin - 273.15) * 1.8 + 32);
    }

    return ( <div className='temperatures-container'>
        <h3 className='title'>{name || 'Temperatures'}</h3>
        <h2 className='temperatures-display'>
            <span className='badge bg-primary'>Celsius : {celsius.toFixed(2)}</span>
            <span className='badge bg-primary'>Fahrenheit : {fahrenheit.toFixed(2)}</span>
            <span className='badge bg-primary'>Kelvin : {kelvin.toFixed(2)}</span>
        </h2>
        <div className='temp-var'>
            <Variable name={'celsius'} value={celsius} setValue={setCelsius}/>
            <Variable name={'fahrenheit'} value={fahrenheit} setValue={setFahrenheit}/>
            <Variable name={'kelvin'} value={kelvin} setValue={setKelvin}/>
        </div>

    </div>
    );
}

export default Temperatures;