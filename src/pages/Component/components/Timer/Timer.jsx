import { useEffect, useState } from 'react'

import './Timer.css'

function Timer({name, value}) {
    const [running, setRunning] = useState(false);
    const [seconds, setSeconds] = useState(value);

    // console.log(value)

    useEffect(() => {
        setSeconds(value || 0);
        setRunning(false);
    }, [value]);

    useEffect(() => {
        let interval = null;
        if (running) {
            interval = setInterval(() => {
                setSeconds(seconds + 1);
            }, 1000);
        } else{

        }
        return () => clearInterval(interval);
    }, [running, seconds]);

    const runClick = () => {
        setRunning(!running);
    }

    const resetClick = () => {
        setRunning(false);
        setSeconds(0);
    }

    function secondsToString(seconds) {
        const minutes_seconds = 60
        const hour_seconds = minutes_seconds * 60
        const days_seconds = hour_seconds * 24
        
        const days = Math.floor(seconds / days_seconds)
        const hours = Math.floor((seconds % days_seconds) / hour_seconds)
        const minutes = Math.floor((seconds % hour_seconds) / minutes_seconds)
        const seconds_ = Math.floor((seconds % minutes_seconds))

        if (days > 0){
            return `${days}d ${hours}h ${minutes}m ${seconds_}s`
        } else if (hours > 0){
            return `${hours}h ${minutes}m ${seconds_}s`
        } else if (minutes > 0){
            return `${minutes}m ${seconds_}s`
        } else {
            return `${seconds_}s`
        }
        
        
    }

    return ( 
        <div className='timer-container'>
            <h3 className='timer-title'>{name || "Timer"}</h3>
            <p><input className='timer-display' type="text" value={secondsToString(seconds)} readOnly /></p>
            <div className='btn-container'>
                <button className='btn btn-danger' onClick={resetClick}>Reset</button>
                <button className={'btn ' + (running ? 'btn-warning' : 'btn-success')} onClick={runClick}>{running ? "Pause" : "Run"}</button>
            </div>
        </div>
     );
}

export default Timer;