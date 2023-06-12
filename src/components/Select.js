import React from 'react'
import './All.css'
const Select = () => {
  return (
    <div className='setet'>
    <select>
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="uncompleted">Uncompleted</option>
    </select>
  </div>
  )
}

export default Select
