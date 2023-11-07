import { useState } from "react"

const ArrayOfObj=()=>{
    const Data=[{
                    name:"sudheer",
                    age:25,
                    Branch:"ECE",
                    AccontNo:123456789
                },
                {
                    name:"man",
                    age:22,
                    Branch:"CSE",
                    AccontNo:98745612
                },
                {   name:"ram",
                    age:24,
                    Branch:"MECH",
                    AccontNo:546127893
                }
    ]
    const [student,setStudent]=useState(Data)
    const handleDelet=()=>{
        const deletData=[...student]
        deletData.pop()
        setStudent(deletData)
    }
    return(
        <>
            {
                student.map(student=>{
                    return(
                        <>
                            <h1>{student.name}</h1>
                            <h1>{student.age}</h1>
                            <h1>{student.Branch}</h1>
                        </>
                    )
                })
            }

            
    <button onClick={handleDelet}>Delete</button>
        </>
    )
}
export default ArrayOfObj