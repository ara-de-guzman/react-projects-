import { useState,useEffect, useRef } from "react";
import { BsSearch } from "react-icons/bs";

function HiddenSearchBar() {
  const [uiProp,setUiProp] = useState({
    bg:'purple',
    shadow:'',
    transition:'all .3s ease',
    opacity:0,
    showSearchIcon:true,
    showSearchBar:false,
    borderBottomColor:'#fff'
  })
  let body = document.body.style;

  let inputStyle = {
    margin: "10vh 25vw",
    width: "20vh",
    height: "30px",
    padding: "1rem .3rem",
    outline: "none",
    border: "none",
    background: "transparent",
    borderBottom:`1px solid ${uiProp.borderBottomColor}`,
    fontSize:'1.3rem',
    color:'#eee',
    boxShadow:'0px 55px 60px -15px rgba(0,0,0,.75)',
    opacity: uiProp.opacity,
    transition: 'all .3s ease'
  };

  let bsSearchStyle = {
    color: "#fff",
    fontSize: "50px",
    cursor: "pointer",
    position: "absolute",
    top: 20,
    right: 20,
  };
  const inputEl = useRef(null);

  useEffect(() => {
    body.background = uiProp.bg;
    body.boxShadow=uiProp.shadow;
    body.transition=uiProp.transition;
    uiProp.showSearchBar && inputEl.current.focus();
  },[uiProp.shadow],[uiProp.showSearchBar])

  const showSearch = () => {
    setUiProp({
      opacity:1,
      showSearchIcon:false,
      showSearchBar:true
    });

  };

 const handleSearchFocus = () =>{
  setUiProp({
    shadow:'inset 0 -60vh 30vw 200px rgba(0,0,0,0.8)',
    borderBottomColor:'green'
  })
 }

 const handleSearchBlur =() => {
  setUiProp({
    shadow:'none',
    opacity:0,
    borderBottomColor:'#fff',
    showSearchIcon:true
  })
 }



  return (
    <div className="container" style={{height:'100vh'}}>

     {uiProp.showSearchIcon? <BsSearch style={bsSearchStyle} onClick={showSearch}/> : <input type="text" placeholder="search" style={inputStyle} onFocus={handleSearchFocus} onBlur={handleSearchBlur} ref={inputEl}/>}
    </div>
  );
}

export default HiddenSearchBar;
