import React from 'react'
import Header from '../Components/Header';
import SignUpSignIn from '../Components/SignUpSignIn';

function SignUp() {
  return (
    <div>
      <Header />
      <div className='wrapper'>
        <SignUpSignIn />        
      </div>
    </div>
  )
}

export default SignUp