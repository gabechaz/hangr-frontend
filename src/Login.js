import './css-files/App.css'
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
  <div>
  <div className="container-fluid">
<div className="row no-gutter">
    {/* <!-- The image half --> */}
    <div className="col-md-6 d-none d-md-flex bg-image"></div>


    {/* <!-- The content half --> */}
    <div className="col-md-6 bg-light">
        <div className="login d-flex align-items-center py-5">

            {/* <!-- Demo content--></div> */}
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 col-xl-7 mx-auto">
                        <h3 className="display-4">Welcome back!</h3>
                        <p className="text-muted mb-4">Enter your info to find some cool people to play games with</p>
                        <form>
                            <div className="form-group mb-3">
                                <input id="inputEmail" type="email" value={usernameInput} onChange={handleUsernameInput} placeholder="User name" required="" autofocus="" className="form-control rounded-pill border-0 shadow-sm px-4" />
                            </div>
                            <div className="form-group mb-3">
                                <input id="inputPassword" value={passwordInput} onChange={handlePasswordInput} type="password" placeholder="Password" required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                            </div>

                            <button onClick={handleSubmit} className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Sign in</button>
                            <p>{errors[0] ? errors[0] : null}</p>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    </div>

</div>
</div>
</div>

    // <form  onSubmit={handleSubmit}>
    //   <div >
    //     <label>Username</label>
    //     <input type="text" name="username" placeholder="Username" value={usernameInput} onChange={handleUsernameInput}/>
    //   </div>
    //   <div>
    //     <label>Password</label>
    //     <input type="password" name="password" placeholder="Password" value={passwordInput} onChange={handlePasswordInput}/>
    //   </div>
    //   <button type="submit">Login</button>
    //   {errors[0] ? <p>{errors}</p> : null}
    // </form>
  )

}

export default Login