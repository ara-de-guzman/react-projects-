import React from 'react'

export const ProgressBarComp = ({bgColor,completed}) => {
    const containerStyle = {
       height:25,
       background:'#e0e0de',
       borderRadius:50,
       margin:50,
       width:'100%',

    }
    const fillerStyle = {
       background:bgColor,
       height:'100%',
       width:`${completed}%`,
       borderRadius:'inherit',
       textAlign:'right',
       transition:'width 1s ease-in-out'
    }
    const labelStyle = {
        padding:15,
        margin:10,
        color:'#fff',
        fontWeight:'bold'
    }

  return (
    <div style={containerStyle}>
        <div style={fillerStyle}>
            <span style={labelStyle}>{`${completed}%`}</span>
        </div>
    </div>
  )
}
