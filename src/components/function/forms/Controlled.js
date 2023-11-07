import { useState } from "react";
import "./ControlComponent.css"

const ControlledComponent=()=>{
     const [Employee,setEmployee]=useState("")
     const [Age,setAge]=useState("")
     const [MObile,setMobile]=useState("")
     const [Designation,setDesignation]=useState("")
     const [Salary,setSalary]=useState("")
     
     const Data=[]

     const [currentData,setData]=useState(Data)

     const employeeName=(event)=>{
            const username=event.target.value;
            if(username.length<3){
                alert("emplye name most be more than 3")
            }
            setEmployee(username)
     }
     const onHandleSalary=(event)=>{
        const SalaryOfEmployee=event.target.value;
        if(Number(setSalary)<25000 ){
            alert("Employe is fresher")

        }else if(Number(SalaryOfEmployee)>25000 && Number(SalaryOfEmployee)<50000){
            alert("emplye is exprerence")
        }
        setSalary(SalaryOfEmployee)

     }


     const onHandleMobile=(event)=>{
        const userMobile=event.target.value;
        const length=10
        if(userMobile !==length){
            alert("Enter the 10 diget of mobile number")
        }
        setMobile(userMobile)
     }



     const onHandleAge=(event)=>{
            const userAge=event.target.value;
            if(Number(userAge)<22){
                alert("Employe age is less than 22 years")
            }
            setAge(userAge)
     }
     const onHandleDis=(event)=>{
        const userDesignation=event.target.value;
        alert(`Employee designation is ${userDesignation}`)
        setDesignation(userDesignation)
     }
     const onHandleSubmit=(event)=>{
        event.preventDefault()
        let obj={
            username:Employee,
            userAge:Age,
            userMobile:MObile,
            userDesignation:Designation,
            userSalary:Salary
        }
        let Updated=[...currentData,obj]
        setEmployee("");
        setAge("");
        setMobile("");
        setDesignation("");
        setSalary("");



        setData(Updated)
     }









    // const Role = ['React js developer', 'Node js developer', 'UI developer', 'Front End Developer'];
    return(
        <>
        {/* Take controlled input employee name , age,mobile, salary,designation (dropdown) , show in Table */}
        <form className="Register" onSubmit={onHandleSubmit}>
            <h2>Register</h2>
            <label>Employee Name*:</label>
            <input type={"text"}value={Employee} onChange={(event)=>{employeeName(event)}}/>
            <label>Designation*:</label>
            <select value={Designation} onChange={(event)=>{onHandleDis(event)}}>
            <option></option>
                    <option>Reactjs Developer</option>
                    <option>React native Developer</option>
                    <option>Angular Developer</option>
            </select>
            <label>Salary*:</label>
            <input type={"text"} value={Salary} onChange={(event)=>{onHandleSalary(event)}}></input>
            <label>Mobile Num*:</label>
            <input type={"text"} value={MObile} onChange={(event)=>{onHandleMobile(event)}}></input>
            <label>Age*:</label>
            <input value={Age} onChange={(event)=>{onHandleAge(event)}} />


            <button type={"submit"} className="button1" >Submit</button>

                {/* <label>USERNAME</label>
                <input type={"text"} ></input>
                <label>PASSWORD</label>
                <input type={"password"} ></input>
                <input type={"submit"} ></input> */}
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
                        currentData.map((someOfData)=>{
                            return(
                                <tr>
                                <td>{someOfData.username}</td>
                                <td>{someOfData.userAge}</td>
                                <td>{someOfData.userMobile}</td>
                                <td>{someOfData.userSalary}</td>
                                <td>{someOfData.userDesignation}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>


        </>
    )

}
export default ControlledComponent