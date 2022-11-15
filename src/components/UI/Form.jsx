import React, {useState} from 'react'
import "../../styles/form.css";
import {motion} from "framer-motion";

const Form = () => {

    const [enteredName,setEnteredName]= useState('')
    const [enteredEmail,setEnteredEmail]= useState('')
    const [enteredPhone,setEnteredPhone]= useState('')
    const [enteredSubject,setEnteredSubject]= useState('')
    const [enteredMessage,setEnteredMessage]= useState('') 

    const submitHandler =(e)=>{
        e.preventDefault()

        console.log('submitted')
    }

  return (
    
    
    <div className='form_wrapper'>
    
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}>
    <form className='form' onSubmit={submitHandler}  action="https://formsubmit.co/your@email.com" method="POST">
    <h2>How we can help !</h2>
  <div className='form_input'>
    <input type="text" placeholder='Name' value={enteredName} onChange={e=> setEnteredName(e.target.value)} />
  </div>

  <div className='form_input'>
    <input type="email" placeholder='Email' value={enteredEmail} onChange={e=> setEnteredEmail(e.target.value)} />
  </div>

  <div className='form_input'>
    <input type="phone" placeholder='Phone' value={enteredPhone} onChange={e=> setEnteredPhone(e.target.value)}/>
  </div>

  <div className='form_input'>
    <input type="subject" placeholder='Subject' value={enteredSubject} onChange={e=> setEnteredSubject(e.target.value)}/>
  </div>

  <div className='form_input'>
    <textarea placeholder='Write Message' value={enteredMessage} onChange={e=> setEnteredMessage(e.target.value)}></textarea>
  </div>
  <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className='submit_btn' type='submit'>Submit</motion.button>
</form>
</motion.div>

</div>

  )
}

export default Form

