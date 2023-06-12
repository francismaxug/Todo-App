import React from 'react'
import './All.css'
const Setup = ({parag, takeMessage, todo, setTakeMessage}) => {
  const constable = takeMessage.filter((todos)=>{
    return todos.id !== todo.id
    
  })
  console.log(constable);
  const gotIt = ()=>{
    console.log(todo);
    setTakeMessage(()=>{
      return constable
    })
  }
  return (
    <div className='woman'>
      <div className='noun'>
      <p>{parag.title}</p>
      </div>
      <div>
      <button className='check'><i className="fa-sharp fa-solid fa-check"></i></button>
      </div>
      <div className='trash'>
      <button onClick={gotIt}><i className="fa-solid fa-trash-can" ></i></button>
      </div>
    </div>
  )
}

export default Setup
