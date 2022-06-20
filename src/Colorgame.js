import { useState } from "react";
import { Colorbox } from "./Colorbox";

export function Colorgame() {
  const [color, setColor] = useState("green");
  const [colorList, setColorList] = useState(["orange", "grey", "green"]);
  //const color="yellow";
  const styles = {
    fontSize: "24px",
    backgroundColor: color,
    
  };
  return (
    <div>
      <div className="addcolor">
        <input
          onChange={(event) => setColor(event.target.value)}
          style={styles}
          type="text"
          placeholder="Enter a color"
          value={color}
        ></input>
        <button onClick={() => setColorList([...colorList, color])}>Addcolor</button>
      </div>
      {colorList.map((clr) => <Colorbox color={clr} />)}

    </div>
  );
}
