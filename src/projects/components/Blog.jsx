import React, { useContext } from "react";
import Title from "./Title";
import Button from "./Button";
import { ThemeContext } from "../07-WindowTheme/context/theme-context";

function Blog() {
  const {theme,changeTheme} = useContext(ThemeContext);
  
  return (
    <div className="container p-1">
      <Title text={`My Blog with ${theme} Theme`} />
      <span style={{ position: "absolute", top: 10, right: 10 }}>
        <Button text={theme === 'Dark' ? 'Light' : 'Dark'} onClick={changeTheme}
         btnClass={theme === ` ${'Dark' && 'btn-light'} btn-sm`}/>
      </span>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus,
        perspiciatis? Laborum natus iusto ab atque perferendis facere molestiae
        nobis provident ut, in, consequuntur dolor debitis enim perspiciatis
        laboriosam? Itaque, voluptatum?
      </p>
    </div>
  );
}

export default Blog;
