import React from 'react'
const Todo = ({todoss,numss,num3,indexx, deleteTodo}) => {
return (
    <>
    <div className="list">
    <p>{numss} ------ {todoss}----{num3}</p><button className="btn-delete" onClick={()=> deleteTodo(indexx)}>x</button>
    </div>
    </>
) 
}
export default Todo