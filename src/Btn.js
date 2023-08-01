import React from 'react'

function Btn() {

    const clickhandler = () => console.log('mouse over');
  return (
    <div>
    <button onMouseOver={clickhandler}>
         Click me
    </button>
    </div>
  )
}

export default Btn