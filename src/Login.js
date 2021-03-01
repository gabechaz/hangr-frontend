import React, { useState, } from 'react'

function Login ({login, errors}) {

  const [usernameInput, setUsernameInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')

  function handleUsernameInput (e) {

    setUsernameInput(e.target.value)
  }

  function handlePasswordInput (e) {
    setPasswordInput(e.target.value)
  }

  function handleSubmit (e) {
    e.preventDefault()
    const credObject = {
      username: usernameInput,
      password: passwordInput
    }
    login(credObject)
  }


  return (
    <form  onSubmit={handleSubmit}>
      <div >
        <label>Username</label>
        <input type="text" name="username" placeholder="Username" value={usernameInput} onChange={handleUsernameInput}/>
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" placeholder="Password" value={passwordInput} onChange={handlePasswordInput}/>
      </div>
      <button type="submit">Login</button>
      {errors[0] ? <p>{errors}</p> : null}
    </form>
  )

}

export default Login