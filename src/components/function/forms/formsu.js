import React, { useState } from 'react'

import "../Stylesheet/ExternalStyle.css"

const ControlledForm = () => {

    const [userName,setUserName] = useState("")
    const [userAge,setUserAge] = useState("")
    const [userMobile,setUserMobile] = useState("")
    const [userSalary,setUserSalary] = useState("")
    const [userDesignation,setUserDesignation] = useState("")


    const Data=[]

    const [currentData,setData]=useState(Data)


    const userNameValidation=(event)=>{

        const username=event.target.value;

        if(username.length < 3){
            alert("Employee Name must be atleast more than 3 characters")
        }

        setUserName(username)

    }

    const userAgeValidation=(event)=>{
    

        const userage=event.target.value;

        if(Number(userage) < 22){
            alert("Employee Age must be  equal or more than 22 years")

        }

    
        setUserAge(userage)

    }

    const userMobileValidation=(event)=>{
        
        

        const usermobile=event.target.value;

        const Length=10

        

        if(usermobile !== Length){

            alert("Enter the valid 10 digits Mobile number")
        
        }
        

        setUserMobile(usermobile)


    }

    const userSalaryValidation=(event)=>{
        

        const usersalary=event.target.value;

        if(Number(usersalary) < 25000){
            alert("Empolyee is a Fresher")
        }
        else if(Number(usersalary) >  25000 && Number(usersalary) < 50000 ){
            alert("Employee is a Senior")
        }
        else{
            alert("Employee is 10years Experience")
        }


        setUserSalary(usersalary)
    }

    const userDesignationValidation=(event)=>{
        

        let userdesignation=event.target.value;

        alert(`Employee designation is ${userdesignation}`)

        setUserDesignation(userdesignation)


    }


    const SubmitHandler=(event)=>{
        event.preventDefault()

        let obj={
            username:userName,
            userage:userAge,
            usermobile:userMobile,
            usersalary:userSalary,
            userdesignation:userDesignation
        }

        let Updated=[...currentData,obj]



            setUserName("");
            setUserAge("");
            setUserMobile("");
            setUserSalary("");
            setUserDesignation("");

        setData(Updated)

    }

    return (
        <>
            <form onSubmit={SubmitHandler} className='form'>
                <label>Employee Name</label>
                <input type={"text"} value={userName} onChange={(event)=>{userNameValidation(event)}} />
                <label>Employee Age</label>
                <input type={"text"} value={userAge} onChange={(event)=>{userAgeValidation(event)}} />
                <label>Employee Mobile no</label>
                <input type={"text"} value={userMobile} onChange={(event)=>{userMobileValidation(event)}} />
                <label>Employee Salary</label>
                <input type={"text"} value={userSalary} onChange={(event)=>{userSalaryValidation(event)}} />
                <label>Designation</label>
                
                <select value={userDesignation} onChange={(event)=>{userDesignationValidation(event)}}>
                    <option></option>
                    <option>Reactjs Developer</option>
                    <option>React native Developer</option>
                    <option>Angular Developer</option>
                </select>


                <input type={"submit"} style={{backgroundColor:"red"}}/>
            </form> 



                <table>
                    <thead>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Mobile</th>
                        <th>Salary</th>
                        <th>Designation</th>
                    </thead>
                    <tbody>

                    {
                        currentData.map((detail)=>{
                            return(
                                <tr>
                                    <td>{detail.username}</td>
                                    <td>{detail.userage}</td>
                                    <td>{detail.usermobile}</td>
                                    <td>{detail.usersalary}</td>
                                    <td>{detail.userdesignation}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default ControlledForm