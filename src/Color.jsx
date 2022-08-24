import React from "react";
import { useState } from "react";
import { useDispatch, } from "react-redux";
import { changeTheme } from "./features/themeSlice";




export function Color() {
  const dispatch = useDispatch()
 const  [colour, setColour] = useState("black")
  
  return (
    <div>
     <pre>{JSON.stringify({colour},2,null)}</pre>
      <div className="div">
        <input type="text" onChange={(e)=>setColour(e.target.value)} />
        <button onClick={()=>{
          dispatch(changeTheme(colour))
        }}> Change Color </button>
      </div>
    </div>
  );
}

export default Color;
