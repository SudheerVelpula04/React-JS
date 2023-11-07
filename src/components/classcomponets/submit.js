import { Component } from "react";
import "../ExternalStyle/SubmitButton.css";


class SubmitButton extends Component{
    state={
       textMassage:"Place Submit",
       count:0,
       studentData:[
        {name:"sun",
         age:1622,
         class:"space"

        },{
            name:"moon",
            age:666,
            class:"space"
        },{
            name:"earth",
            age:444,
            class:"space"
        },
    ]
    }
    handleClick=()=>{
        
        this.setState(

            {
                textMassage:"your form is submited"
            }
        )

    }
    incrementHandle=()=>{
        this.setState(
            {
                count:this.state.count+1
            }
        )
    }
    decrementHandle=()=>{
         this.setState(
            {
                count:this.state.count-1
            }
         )

    }
    resetHandle=()=>{
         this.setState(
            {
                count:0
            }
         )

    }


    render(){
        return(
            <div>
                <button className="button" onClick={this.handleClick}>{this.state.textMassage}</button>
                <h1>{this.state.count}</h1>
                <button onClick={this.incrementHandle}>inc</button>
                <button onClick={this.decrementHandle}>dec</button>
                <button onClick={this.resetHandle}>reset</button>
                {this.state.studentData.map((student)=>{
                    return(
                        <p>{student.name}</p>
                    )
                })}
                
            </div>
        )
    }
}
export default SubmitButton