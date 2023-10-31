import { useState } from "react"



const Table=()=>{
const Data=[{
    name:"sudheer",
    age:25,
    Branch:"ECE",
    AccontNo:123456789,
},{
    name:"sudheer",
    age:25,
    Branch:"ECE",
    AccontNo:123456789,
}]
 const [name,setName]=useState(Data)


    return(
        <>
        <h1>hello</h1>
        <td>
            {name.map((student)=>{
                return(
                   
                    <tr>
                        <td>{student.name}</td>
                        <td>{student.age}</td>
                        <td>{student.Branch}</td>
                        <td>{student.AccountNo}</td>

                    </tr>
                )
            })}
        </td>
        </>
    )
}
export default Table