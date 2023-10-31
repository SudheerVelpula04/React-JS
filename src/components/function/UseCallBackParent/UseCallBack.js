import React, { useCallback, useState } from 'react'
import TOdoListing from './Todolist'

function UseCallBack() {
    const [count, setCount] = useState(0)
    const [todos, setTodos] = useState([])


    const IncrementCount = () => {
        setCount(count + 1)
    }

    //with using a Use callback
    const addTodo = useCallback(() => {
        console.log("add todo list")
        setTodos([...todos, `new TOdo ${todos.length + 1}`])
    }, [todos])


    // with out using a use callback
    // const addTodo=(todo)=>{
    //     console.log("add todo function")
    //     setTodos([...todos,`New Todo ${todos.length+1}`])
    // }



    return (
        <div>
            <button onClick={IncrementCount}>Click to Increase Count {count}</button>

            <TOdoListing todos={todos} addTodo={addTodo}></TOdoListing>

        </div>
    )
}



export default UseCallBack