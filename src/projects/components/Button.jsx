import React from 'react'

function Button({text='Click',btnClass,icon,onClick}) {
  return (
    <button className={`btn ${btnClass}`} onClick={onClick}>{icon}{text}</button>
  )
}

export default Button