import React from 'react'
import Setup from './Setup'

const GetList = ({retrieve,takeMessage, setTakeMessage}) => {
  console.log(retrieve);
  return (
    <div className='pronoun'>
     {retrieve.length=== 0 ? <h3>No Todo found</h3> : retrieve.map((todo)=>(<Setup parag={todo} todo={todo} key={todo.id} setTakeMessage={setTakeMessage} takeMessage={takeMessage} />))}
    </div>
  )
}
export default GetList
