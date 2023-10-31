import React from "react"


const TOdoListing = ({ todos, addTodo }) => {
    console.log("todo listing")
    return (
        <>
            <button onClick={addTodo}>Click to add todo</button>
            {
                todos.map((eachTodo) => {
                    return (
                        <>
                            <h1>{eachTodo}</h1>
                        </>
                    )
                })

            }
        </>
    )
}
export default React.memo(TOdoListing)