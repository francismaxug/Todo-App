import React from 'react'
import Select from './Select'
import Startfile from './Startfile'
import './All.css'
const Mainpage = ({onLasttkeForm}) => {
 const  valueAdded = (prev)=>{
  onLasttkeForm(prev)
 }
  return (
    <div className='main-page'>
    <Startfile  onSecondTkeForm={valueAdded}/>
    <Select/>
  </div>
  )
}

export default Mainpage
