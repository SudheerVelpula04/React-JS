import React from "react";
const RecipeIndex=({alphaIndex})=>{
    const alpha=['A', "B", "C", "D", "E", "F", "J", "I", "J", "k", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    var num=0;
 return(
    
    <>
      {
      alpha.map(item=>{
        return(
            <div className="numBox" key={num++} onClick={()=>alphaIndex(item)}>
                <center ><h3>{item}</h3></center>

            </div>
        )
      })
      }
    </>
 )
}
export default RecipeIndex