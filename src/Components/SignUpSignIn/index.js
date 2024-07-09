import React, {useState} from 'react'
import './style.css'
import Input from '../Input'
import Button from '../Button'
import { toast } from 'react-toastify';
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../../firebase'

function SignUpSignIn() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading,setLoading] = useState(false);

  function signupWithEmail(){
    setLoading(true);
    console.log('Name', name);
    console.log('Email',email);
    console.log('Password', password);
    console.log('confirmPassword', confirmPassword);

    //Authenticate the user
    if(name != '' && email != '' && password != '' && confirmPassword != ''){
      if(password == confirmPassword){
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed up 
          const user = userCredential.user;
          console.log('User>>>',user)
          toast.success('User Created!')
          setLoading(false)
          setName("")
          setPassword("")
          setEmail("")
          setConfirmPassword("")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          toast.error(errorMessage)
          setLoading(false)
          // ..
        });
      } else{
          toast.error("Password and Confirm Password don't match")
          setLoading(false)
      }
    }else {
      toast.error('All fiels are mandatory')
      setLoading(false)
    }
  }
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
          type = 'email'
          label={'Email'} 
          state = {email} 
          setState = {setEmail} 
          plaseholder={'example123@gmail.com'}
        />
        <Input 
          type = 'password'
          label={'Password'} 
          state = {password} 
          setState = {setPassword} 
          plaseholder={'Example@123'}
        />
        <Input 
          type = 'password'
          label={'Confirm Password'} 
          state = {confirmPassword} 
          setState = {setConfirmPassword} 
          plaseholder={'Example@123'}
        />
        <Button disabled={loading} text={loading? 'Loading ...' : 'SignUp using Email and Pasword'} onClick={signupWithEmail}/>
        <p style= {{textAlign: 'center', margin:0}}>or</p>
        <Button text={loading? 'Loading ...' :  'SignUp using Google'}  blue={true}/>
      </form>
    </div>
  )
}

export default SignUpSignIn