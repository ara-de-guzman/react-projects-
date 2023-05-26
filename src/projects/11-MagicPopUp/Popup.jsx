import React, { useEffect, useState } from "react";
import PopUpComp from "../components/PopUpComp";
import Button from "../components/Button";
import Title from "../components/Title";

function Popup() {
  const [trigger, setTrigger] = useState(false);
  const [timeTrigger,setTimeTrigger] = useState(false)

  const triggerPopUp = () => {
    setTrigger(true)
  };

useEffect(() => {
  setTimeout(() =>{
    setTimeTrigger(true)
  },5000)
})

  return (
    <div className="text-center">
      <Title text={"Click for pop up or wait 3 seconds"} />

      <Button btnClass={"btn-primary"} onClick={triggerPopUp} />
      {(trigger  || timeTrigger) && (<PopUpComp style={'hello'} title={'triggered Pop Up'} handleClose={(setTrigger,setTimeTrigger)}/>)}
    </div>
  );
}

export default Popup;
