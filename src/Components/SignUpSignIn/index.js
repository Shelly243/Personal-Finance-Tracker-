import React, {useState} from 'react'
import './style.css'
import Input from '../Input'
import Button from '../Button'
import { toast } from 'react-toastify';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword} 
from 'firebase/auth'
import {auth} from '../../firebase'
import { useNavigate } from 'react-router-dom';

function SignUpSignIn() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading,setLoading] = useState(false);
  const [loginForm, setLoginForm] = useState('false');
  const navigate = useNavigate();

  //login with email and password
  function loginUsingEmail(){
    console.log('Email',email);
    console.log('Password', password);

     //Authenticate the user
    if(email != '' && password != ''){
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          toast.success('User Logged In!')
          console.log("User Logged In",user)
          navigate("/dashboard");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          toast.error(errorMessage);
        });
    }else {
      toast.error('All fiels are mandatory')
      setLoading(false)
    }
  }

  //sign up with email and password
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
          createDoc(user);
          navigate("/dashboard");
          //create a doc with user id as the following id
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

  function createDoc(){
    //
  }

  return (
      <>
      {loginForm ? 
        //login
        <div className='signup-wrapper'>
          <h2 className='title'>Login on 
            <span style= {{color: "var(--theme)"}}>BudgetBuddy</span>
          </h2>
          <form>
            <Input 
              type = 'email'
              label={'Email'} 
              state = {email} 
              setState = {setEmail} 
              placeholder={'example123@gmail.com'}
            />
            <Input 
              type = 'password'
              label={'Password'} 
              state = {password} 
              setState = {setPassword} 
              placeholder={'Example@123'}
            />
            <Button disabled={loading} text={loading? 'Loading ...' : 'Login using Email and Pasword'} onClick={loginUsingEmail}/>
            <p className='p-login'>or</p>
            <Button text={loading? 'Loading ...' :  'Login using Google'}  blue={true}/>
            <p className='p-login' onClick={() => setLoginForm(!loginForm)}>Or Don't Have An Account? Click Here</p>
          </form>
        </div> 
        : 
        //sign up
        <div className='signup-wrapper'>
          <h2 className='title'>Sign Up on 
            <span style= {{color: "var(--theme)"}}>BudgetBuddy</span>
          </h2>
          <form>
            <Input 
              label={'Full Name'} 
              state = {name} 
              setState = {setName} 
              placeholder={"Example"}
            />
            <Input 
              type = 'email'
              label={'Email'} 
              state = {email} 
              setState = {setEmail} 
              placeholder={'example123@gmail.com'}
            />
            <Input 
              type = 'password'
              label={'Password'} 
              state = {password} 
              setState = {setPassword} 
              placeholder={'Example@123'}
            />
            <Input 
              type = 'password'
              label={'Confirm Password'} 
              state = {confirmPassword} 
              setState = {setConfirmPassword} 
              placeholder={'Example@123'}
            />
            <Button disabled={loading} text={loading? 'Loading ...' : 'SignUp using Email and Pasword'} onClick={signupWithEmail}/>
            <p className='p-login'>or</p>
            <Button text={loading? 'Loading ...' :  'SignUp using Google'}  blue={true}/>
            <p className='p-login' onClick={() => setLoginForm(!loginForm)}>Or Have An Account Already? Click Here</p>
          </form>
        </div>
        }
      </>
  )
}

export default SignUpSignIn