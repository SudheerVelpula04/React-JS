import { useState } from "react"



const Delete=()=>{
    const list=["🍎 Apple",
                "🍊 Orange",
                "🍌 Banana",
                "🍇 Grapes",
                 ]
    const [fruits,setFruits]=useState(list)
    
    const handleDelete=()=>{
        const item=[...fruits]
        item.pop()
        setFruits(item)
        
    }
    


    return(
        <>
        <ul>
            {fruits.map((fruit)=>{
                return(
                    <li>
                        <h1>{fruit}</h1>
                        
                        
                    </li>
                )
            })}
            
                

        </ul>
        <button onClick={handleDelete}>Delete</button>
        </>
    )
}
export default Delete