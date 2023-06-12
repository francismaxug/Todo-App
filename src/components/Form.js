import React, {useState} from 'react'
import './All.css'
const Form = ({onTkeTheForm}) => {
  const [getInput, setGetInput] = useState("")
  const [isValid, setIsValid] = useState(true)
  const takeInput = (e)=>{
    console.log(e.target.value);
    // if(e.target.value.trim().length>0){
    //   setIsValid(true)
    //we can also use do the above using the code below
    if(e.target.value!==""){
      setIsValid(true)
    }
setGetInput(e.target.value)
  }
const autoSubmit = (e)=>{
e.preventDefault()
// if(getInput.trim().length===0){
//   setIsValid(false)
//we can also do the above using the  code below
if(getInput===""){
  setIsValid(false)
return;
}
  const correct = {
    title : getInput.toLowerCase().split(" ").map((el)=>el[0].toUpperCase()+el.slice(1)).join(" "),
    id : Math.random()*1000
  }
  onTkeTheForm(correct)
  setGetInput("")
  console.log(correct);


}
//we can add the folowing style to the imput to change it state dynamically
//style={{ background:!isValid ? "red" : "white" }}
//or we can dynamicall add the classname to the main div below
  return (
    <form className='heyy' onSubmit={autoSubmit}>
    <div className={`makola ${ !isValid ? "invalid" : ""}`}>
      <input spellCheck="false" value={getInput} onChange={takeInput} type='text' placeholder='create todo here' />
    </div>
    <div className='div-button'>
    <button type='submit'><i className="fa-solid fa-square-plus"></i></button>
    </div>
  </form>
  )
}

export default Form
