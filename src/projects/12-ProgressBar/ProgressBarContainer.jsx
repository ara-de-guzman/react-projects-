import React, { useRef, useEffect, useState } from "react";
import Title from "../components/Title";
import { ProgressBarComp } from "../components/ProgressBarComp";

function ProgressBarContainer() {
  const [compeleted, setCompleted] = useState(50);
  const [status, setStatus] = useState({
    ui: 55,
    ux: 73,
    data: 20,
  });

  const projectData = [
    {
      bgColor: "#7633f9",
      completed: status.ui,
    },
    {
      bgColor: "#28a745",
      completed: status.ux,
    },
    {
      bgColor: "#dc3545",
      completed: status.data,
    },
  ];
  

  const inputStyle = {
    width: 50,
    border: "none",
    outline: "none",
    textAlign: "center",
    borderBottom: "1px solid lightgrey",
  };

  const uiInput = useRef(null);

  useEffect(() => {
    uiInput.current.focus();
    setInterval(() =>{
       setCompleted(Math.floor(Math.random() *100 + 1))
    },5000)
  },[]);
  return (
    <div className="container container-sm ma-auto text-center">
      <Title text="Progress Bar" />
      <h2>Project Status:</h2>
      <ul>
        <li>
          UI Status:
          <input
            type="number" 
            style={inputStyle}
            ref={uiInput}
            value={status.ui}
            onChange={(e) => {
                if (e.target.value <= 100 && e.target.value >=0) {
                    setStatus({ ...status, ui : e.target.value });
                  }
            }}
          />
        </li>
        <li>
          UX Status:
          <input
            type="number"
            style={inputStyle}
            onChange={(e) => {
                if (e.target.value <= 100 && e.target.value >=0) {
                    setStatus({ ...status, ux : e.target.value });
                  }
            }}
          />
        </li>
        <li>
          DATA Status:
          <input
            type="number"
            style={inputStyle}
            onChange={(e) => {
                if (e.target.value <= 100 && e.target.value >=0) {
                    setStatus({ ...status, data : e.target.value });
                  }
            }}
          />
        </li>
      </ul>
      {projectData.map((data, index) => (
        <ProgressBarComp
          key={index}
          bgColor={data.bgColor}
          completed={data.completed}
        />
      ))}
        <ProgressBarComp
          bgColor={compeleted > 50 ? "#7633f9": 'pink' }
          completed={compeleted}
        />
    </div>
  );
}

export default ProgressBarContainer;
