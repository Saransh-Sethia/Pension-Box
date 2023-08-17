import React from "react";
import Slider from "@mui/material/Slider";
function Slide() {
   const [range, setRange] = React.useState([1, 1000]);

   function handleChanges(event, newValue) {
      setRange(newValue);
   }
   return (
      <div>
        <h5>Price Range</h5>
         <Slider value = {range} onChange = {handleChanges} valueLabelDisplay="auto"/>
         The selected range is {range[0]} - {range[1]}
      </div>
   );
}
export default Slide;