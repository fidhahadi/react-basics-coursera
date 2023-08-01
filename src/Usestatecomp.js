import React from 'react'
import { useState } from 'react'

function Usestatecomp() {
const [inputText, setInputTexT] = useState('hello');

const handleChange = (e) => {
    setInputTexT(e.target.value);
}

  return (
    <div>
        <input value={inputText} onChange={handleChange}/>
        <p>You typed {inputText}</p>
        <button onClick={() => setInputTexT('reset to hello')}>Reset</button>
    </div>
  )
}

export default Usestatecomp