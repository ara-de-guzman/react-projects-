import React from 'react'
import Title from '../components/Title'

function Randomize() {
  const handleClick = (e) => {
   console.log(e)
  }

  const handleSecClick = (e) =>{
  setInterval (() => {
       randomColor();
  },2000)
  } 

  function randomColor() {
    let letters = '0123456789ABCDEFG';
    let color = '#'

    for(let i = 0 ; i < 6; i++) {
         color += letters[Math.floor(Math.random() * 16)];
    }
    return document.body.style.backgroundColor = color;
  }

  return (
    <div className='container m-auto text-center'>
   <Title text={'Randomize Color'} classes={'mb-4'}/>
   <button className='btn btn-danger' onClick={handleSecClick}>Click Me</button>
   <button className='btn btn-success' onClick={handleSecClick}>Click Me</button>
   <button className='btn btn-primary' onClick={handleSecClick}>Click Me</button>
   <button className='btn btn-warning' onClick={handleSecClick}>Click Me</button>
    </div>
  )
}

export default Randomize