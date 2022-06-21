import React from 'react'
import Button from './Button'
import './style.css'

const App = () => {
  return (
    <div>
      <h1>Useful Website</h1>
      <h3>which website do you want to open?</h3>
      <Button name="Google" link="https://google.com"/>
      <Button name="Facebook" link="https://facebook.com"/>
      <Button name="Youtube" link="https://Youtube.com"/>
      <br />
      <Button name="LinkedIn" link="https://linkedin.com"/>
      <Button name="Github" link="https://github.com"/>
      <Button name="IPO Result" link="https://iporesult.cdsc.com.np"/>
    </div>
  )
}

export default App