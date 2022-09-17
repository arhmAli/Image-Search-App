import React,{useState} from 'react'
import './styles/form.scss'
const Form=(props)=> {
    const [userInput,setUserInput]=useState("");
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(userInput)
        props.onSearchSubmit(userInput)
        setUserInput("")
    }
    return (
    <div>
    <form onSubmit={handleSubmit} className='main-form'>
        <label className='label'>Search From Pixabay</label>
        <input
        className='input-area'
        type='text'
        placeholder='Search'
        value={userInput}
        onChange={e=>setUserInput(e.target.value)}
        name="userInput"
        />
        <button className='submit-btn'>Search</button>
    </form>
    </div>
  )
}
export default Form
