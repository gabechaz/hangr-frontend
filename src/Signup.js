import React, { useState } from "react"; 


function Signup ({ signup }) {
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  
  const handleName = (event) => {
    setName(event.target.value)
  }

  const handleUsername = (event) => {
    setUsername(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }



  const handleSubmit = (event) => {
    event.preventDefault()
    const newSignup = {name, username, password}
    signup(newSignup)

   
  }

  return (
    <form  onSubmit={handleSubmit}>
      <div >
        <label>*Name</label>
        <input type="text" name="name" placeholder="Name" required value={name} onChange={handleName}/>
      </div>
      <div className="field">
        <label>*Username</label>
        <input type="text" name="Username" placeholder="Username" required value={username} onChange={handleUsername}/>
      </div>
      <div className="field">
        <label>*Password</label>
        <input type="password" name="Password" placeholder="Password" value={password} onChange={handlePassword}/>
      </div>
      <button type="submit">Signup</button>
    </form>
  )
}

export default Signup