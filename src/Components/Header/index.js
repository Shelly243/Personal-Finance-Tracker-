import React from 'react'
import './style.css'

function Header() {
  function logoutFnc(){
    alert("Logout");
  }

  return (
    <div className="navbar">
      <p className='logo'>BudgetBuddy</p>
      <p className='logo link' onClick={logoutFnc}>Logout</p>
    </div>
  )
}

export default Header