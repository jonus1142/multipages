// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Counter from './components/Counter/Counter'
import Timer from './components/Timer/Timer'
import Variable from './components/Variable/Variable'
import Add from './components/Add/Add'
import Temperatures from './components/temperatures/Temperatures'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'

import './Component.css'

// parent component
function Component() {
  // const [count, setCount] = useState(0)

  return (
    <div className="component-container">

      <h2 className='title'>REACT COMPONNENTS</h2>
      {/* child component */}
      <span className="all-container" >
        <span className='counter-timer-container2'>
        <Counter name={'Counter 1'} value={10} />
        <Timer name={'Timer 1'}  />
        </span>
      <span className='add-container2'>
        <Add />
      </span>
      </span>
      <Temperatures name={'Temperatures'} celsiusValue={25}/>
        <br/>
      <h3 className='name'>นายกันณพิช เบ้าศรี รหัส 66088226</h3>
    </div>
  )
}

export default Component