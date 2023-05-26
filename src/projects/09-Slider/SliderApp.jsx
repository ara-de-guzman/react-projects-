import {useState} from "react";
import SliderComp from "./SliderComp";
import Title from "../components/Title";

function SliderApp() {
    const [slideValue,setSlideValue] = useState(100);

    function handleSliderValueChange(e) {
        setSlideValue(e.target.value)
    }
    let bgColor;
    let textColor;

    if(slideValue < 25) {
      bgColor = 'blue';
      textColor ='yellow'
    };
    if(slideValue >= 25 && slideValue <=50) {
      bgColor = 'pink';
      textColor ='white'
    };

    if(slideValue > 50) {
      bgColor = 'green';
      textColor ='purple'
    };


  return (
    <div className="container text-center">
      <Title text={"Slide to Grow"} />
      <SliderComp setValue={slideValue} handleInput={handleSliderValueChange} bgColor={bgColor} textColor={textColor} />
    </div>
  );
}

export default SliderApp;
