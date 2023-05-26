import React from 'react'
import Button from './Button'

function PopUpComp({type,title,text,handleClose}) {
    const popUpContainer = {
        position:'absolute',
        top:0,
        height:'100vh',
        width:'100vw',
        background:'rgba(0,0,0,0.1)',
        zIndex:'-1'
    }
    const popUpStyle = {
        position:'relative',
        margin: '40vh auto',
        zIndex:'1',
        background:'green'
    }
  return (
    <div style={popUpContainer}>
     <div className={`${type}`} style={popUpStyle}>
          
        <div className='alert-close'>
           <div className="d-flex flex-column">
             <h4 className="mb-1">{title ? title :'popup title'}</h4>
             <p>{text? text:'no-text'}</p>
             <Button btnClass={'btn-close'} text='&times;' onClick={()=>{
              handleClose(false);
             }} />
            </div> 
            
        </div>

     </div>
    </div>
  )
}

export default PopUpComp
