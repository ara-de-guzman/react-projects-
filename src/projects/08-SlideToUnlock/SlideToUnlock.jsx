import React, { useState,useEffect } from "react";
import LockSlider from "./LockSlider";
import { AiFillUnlock } from "react-icons/ai";
import Sg from './imgFolder/bkg.jpg'
import Bg from './imgFolder/tekken.jpg'

function SlideToUnlock() {
  const [uiProps,setUiProps]  = useState({
    uiText: 'Unlock Screen',
    uiColor:'#eee',
    uiBg:`url(${Bg})`
  })   
  const [showLock, setShowLock] = useState(true);
  
  const [sliderValue, setlideValue] = useState(0);

  const handleSliderInput = (e) => {
    setlideValue(e.target.value)


  }
  
 const lockScreen = () => {
   setlideValue(0)
   setShowLock(true)
   setUiProps({
    uiText: 'Unlock Screen',
    uiColor:'#eee',
    uiBg:`url(${Bg}) center/cover  no-repeat`
   })
 }

 useEffect(() => {
    document.body.style.background ='#333'

    if(sliderValue === '100') {
        setShowLock(false);
        setUiProps({
            uiText: 'Lock Screen',
            uiColor:'#333',
            uiBg:`url(${Sg})`
        })
    }
 },[sliderValue])

  let phoneContainerStyle = {
    height: "70vh",
    marginTop: "15vh",
    width: 340,
    border: "4px solid #000",
    borderRadius: "15px",
    background: uiProps.uiBg,
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover'
  };

  return (
    <div
      className="container text-center d-flex flex-column shadow-md"
      style={phoneContainerStyle}
    >
      <h1 className="title" style={{color:uiProps.uiColor}}>{uiProps.uiText}</h1>
      {showLock ? (
        <LockSlider width={"250px"}  handleInput={handleSliderInput} value={sliderValue}/>
      ) : (
        <AiFillUnlock className="unlockIcon"  onClick={lockScreen}/>
      )}
    </div>
  );
}

export default SlideToUnlock;
