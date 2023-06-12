import React from 'react'
import Form from './Form'
const Startfile = ({onSecondTkeForm}) => {
  const getTheValue = (prev)=>{
onSecondTkeForm(prev)
  }
  return (
    <div>
      <Form  onTkeTheForm = {getTheValue}/>
    </div>
  )
}

export default Startfile
