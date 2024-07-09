import React, {useState} from 'react'
import './style.css'
import Input from '../Input'
import Button from '../Button'

function SignUpSignIn() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div className='Signup-wrapper'>
      <h2 className='title'>Sign Up on <span style= {{color: "var(--theme)"}}> BudgetBuddy</span>
      </h2>
      <form>
        <Input 
          label={'Full Name'} 
          state = {name} 
          setState = {setName} 
          plaseholder={'Example'}
        />
        <Input 
          label={'Email'} 
          state = {email} 
          setState = {setEmail} 
          plaseholder={'example123@gmail.com'}
        />
        <Input 
          label={'Password'} 
          state = {password} 
          setState = {setPassword} 
          plaseholder={'Example@123'}
        />
        <Input 
          label={'Confirm Password'} 
          state = {confirmPassword} 
          setState = {setConfirmPassword} 
          plaseholder={'Example@123'}
        />
        <Button text= 'SignUp using Email and Pasword' />
        <p style= {{textAlign: 'center', margin:0}}>or</p>
        <Button text= 'SignUp using Google'  blue={true}/>
      </form>
    </div>
  )
}

export default SignUpSignIn