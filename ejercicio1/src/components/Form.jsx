import React, {useState} from 'react';
import Todo from '../components/Todo';
import 'bootstrap/dist/css/bootstrap.min.css'
import{Dropdown,DropdownItem,DropdownMenu,DropdownToggle}from 'reactstrap'

const Form = () => {

const accio=()=>{

  alert("soy la accion "  );
  
}
    
const [num2, setTodooo] = useState({
        
})
    const [num, setTodoo] = useState({
        
    })
    
    const [todo, setTodo] = useState({

    })
    const [todos, setTodos] = useState( [
        {num: 'Nombre del producto', todo: ' $*****', num2: 'holaaa'}
        
    ])
    const handleChange = e => setTodo({[e.target.name]: e.target.value})
    const handleChang = e => setTodoo({[e.target.name]: e.target.value}) + setTodooo({[e.target.name]: e.target.value})
   
    const handleClick = e => {
        if(Object.keys(todo).length === 0 || todo.valor1.trim()=== '' || Object.keys(num).length === 0 || num.valor2.trim()=== ''){
alert('el campo no puede estar vacio')
return
        }
        setTodos([...todos,{todo:todo.valor1.trim(),num:num.valor2.trim(),num2:num2.valor2.trim()}]);
       
       
    }
    
   const deleteTodo = indice => {
        const newTodos = [...todos]
        newTodos.splice(indice, 1)
        setTodos(newTodos)
       
    }
    return (
        
        <>
       
        <h1>LISTA DE COMPRAS</h1>
       
        <form onSubmit={e => e.preventDefault()}>
             <input type="text" name="valor1" onChange={handleChange} onClick={handleClick}/>
             <input type="text" name="valor2" onChange={handleChang} onClick={handleClick}/>
            <button onClick={handleClick} >agregar</button>
            </form>
            
       {
           todos.map((valu, index) => (
            <Todo todoss={ valu.todo } numss={valu.num} num3={valu.num2}   key={index} indexx={index} deleteTodo={deleteTodo}
             />
                        
            ))
           }
            
            {
           // num.map((valu, index) => (
             //   <Todo todoss={ valu.todo } numss={valu.num}  key={index} indexx={index} deleteTodo={deleteTodo} />
                
              //  ))
       }
          {
           // todo.map((valu, index) => (
             //   <Todo todoss={ valu.todo } numss={valu.num}  key={index} indexx={index} deleteTodo={deleteTodo} />
                
              //  ))
       }
        </>
    )
}
export default Form