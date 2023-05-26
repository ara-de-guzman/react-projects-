import React from 'react'

function SliderComp({setValue,handleInput,bgColor,textColor}) {
  return (
    <div className='container d-flex flex-column' style={{gap:100}}>
      <input type="range" min='0' max={100} value={setValue} onInput={handleInput} />
      <div style={{
        color:!textColor ? 'gray' : textColor,
        background:!bgColor ? 'lightgray' : bgColor,
        height:`${setValue * 30}px`,
        width:`${setValue * 30}px`,
        fontWeight:600,
        display:'flex',
        justifyContent:'center',
        borderRadius:'50%',
        textAlign:'center',
       
}}>
        <span style={{textAlign:'center'}}>{setValue}</span>
      </div>
    </div>
  )
}

export default SliderComp
