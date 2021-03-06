import './css-files/App.css'
import React, { useState } from "react"; 


function Signup ({ signup }) {
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [favGame, setFavGame] = useState("")
  const [favGenre, setFavGenre] = useState("")
  const [location, setLocation] = useState("")


  function handleFavGame (e) {
    setFavGame(e.target.value)
  }



  function handleLocation (e) {
    setLocation(e.target.value)
  }

  function handleFavGenre (e) {
    setFavGenre(e.target.value)
  }

  
  const handleName = (event) => {
    setName(event.target.value)
  }

  const handleUsername = (event) => {
    setUsername(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const [imgInt, setImgInt] = useState(getRandomInt(1, 100))



  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
  }


  const [img, setImg] = useState(`https://avatars.dicebear.com/api/gridy/${imgInt}.svg`)



  const handleSubmit = (event) => {
    event.preventDefault()
    const newSignup = {name, username, password, favGenre, favGame, location, img}
    signup(newSignup)

   
  }

  function changeAvatar () {
    let randomNum = (getRandomInt(1, 100))
      setImg(`https://avatars.dicebear.com/api/gridy/${randomNum}.svg`)
  }

  return (



    <div>
      <div className="container-fluid">
    <div className="row no-gutter">
        {/* <!-- The image half --> */}
        <div className="col-md-6 d-none d-md-flex bg-image"><img src={img} /> </div>


        {/* <!-- The content half --> */}
        <div className="col-md-6 bg-light">
            <div className="login d-flex align-items-center py-5">

                {/* <!-- Demo content--></div> */}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-xl-7 mx-auto">
                            <h3 className="display-4">Sign up</h3>
                            <p className="text-muted mb-4"></p>
                            <form onSubmit={handleSubmit}>
                              <label>Username</label>
                                <div className="form-group mb-3">
                                    <input onChange={handleUsername} value={username} id="inputEmail" type="text" placeholder="Username" required="" autofocus="" className="form-control rounded-pill border-0 shadow-sm px-4" />
                                </div>

                                <label>Password</label>
                                <div className="form-group mb-3">
                                    <input value={password} onChange={handlePassword} id="inputPassword" type="password" placeholder="Password" required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                </div>
                                <label>Name</label>
                                <div className="form-group mb-3">
                                    <input value={name} onChange={handleName} id="inputEmail" type="text" placeholder="Name" required="" autofocus="" className="form-control rounded-pill border-0 shadow-sm px-4" />
                                </div>
                                <label>Location</label>
                                <div className="form-group mb-3">
                                    <input value={location} onChange={handleLocation}  id="inputEmail" type="text" placeholder="Location" required="" autofocus="" className="form-control rounded-pill border-0 shadow-sm px-4" />
                                </div>
                                  <label>Favorite Game</label>
                                <div className="form-group mb-3">
                                    <input value={favGame} onChange={handleFavGame} id="inputEmail" type="text" placeholder="Favorite Game" required="" autofocus="" className="form-control rounded-pill border-0 shadow-sm px-4" />
                                </div>
                                <label>Favorite Game Genre</label>
                                <div className="form-group mb-3">
                                    <input value={favGenre} onChange={handleFavGenre} id="inputEmail" type="text" placeholder="Favorite Genre" required="" autofocus="" className="form-control rounded-pill border-0 shadow-sm px-4" />
                                </div>

                           
                      


                                <button  type="submit" className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Sign Up</button>

                            </form>
                            <p>Your avatar is displayed on the left. If you would like a different one, press this button until you find one you like</p>
                            <br />
                            <button onClick={changeAvatar} className ="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">New Avatar</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
</div>
    </div>




)



    // <div>
    // <form  onSubmit={handleSubmit}>
    //   <div >
    //     <label>*Name</label>
    //     <input type="text" name="name"  required value={name} onChange={handleName}/>
    //   </div>
    //   <div className="field">
    //     <label>*Username</label>
    //     <input type="text" name="Username"  required value={username} onChange={handleUsername}/>
    //   </div>
    //   <div className="field">
    //     <label>*Password</label>
    //     <input type="password" name="Password"  value={password} onChange={handlePassword}/>
    //   </div>
    //   <div className="field">
    //     <label>Favorite Board Game</label>
    //     <input type="text" name="fave-game"  value={favGame} onChange={handleFavGame}/>
    //   </div>
    //   <div className="field">
    //     <label>Favorite Board Game Genre</label>
    //     <input type="text" name="favGenre"  value={favGenre} onChange={handleFavGenre}/>
    //   </div>
    //   <div className="field">
    //     <label>Location</label>
    //     <input type="text" name="location"  value={location} onChange={handleLocation}/>
    //   </div>
    //   <div className="field">
    //     <label>Bio</label>
    //     <input type="text" name="bio"  value={bio} onChange={handleBio}/>
    //   </div>
    //   <button type="submit">Signup</button>
    // </form>
    // <img src={img} />
    // </div>
  











}

export default Signup