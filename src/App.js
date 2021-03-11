import './css-files/App.css'
import './css-files/index.css'
import { Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import NaviBar from './NavBar.js'
import React, { useState, useEffect} from 'react'
import FindAHang from './FindAHang.js'
import Signup from './Signup.js'
import MyHangs from './MyHangs.js'
import MakeHang from './MakeHang.js'
import Karma from './Karma.js'
import Profile from './Profile'
import Login from './Login.js'
import Hang from './Hang'
import HangFeed from './HangFeed.js'
const API = 'http://localhost:3000'



function App() {

const history = useHistory()
useEffect(() => {
  const token = localStorage.getItem("token") 
  fetch(`${API}/me`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then((response) => response.json())
    .then((userData) => { 
      // if (userData.id === true)
      setCurrentUser(userData)})
}, [])

const login = (credObject) => {
  fetch(`${API}/login`, {
    method: "POST",
    headers: {
    "Content-Type": "application/json",                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
      "Accept" : "application/json"},
      body: JSON.stringify(credObject)
    }
  )
    .then((r) => r.json())
    .then((newUser) => {
      console.log(newUser)
      if (newUser.errors){
        setErrors(newUser.errors)
        console.log(newUser.errors)
      } else {
        const {user, token}  = newUser
        localStorage.setItem("token", token)
      setCurrentUser(user)
      history.push(`/profile/${user.id}`)}

  });
};

function signup (sObj) {
  fetch(`${API}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sObj),
  })
    .then((r) => r.json())
    .then((newSignup) =>{ 
      const {user, token} = newSignup
      localStorage.setItem("token", token )
    setCurrentUser(user)
      history.push('/profile')}
      )
     
}


const logout = () => {
  localStorage.removeItem("token")
  fetch(`${API}/logout`, {
    method: "POST"
  })
    .then((user) => {
      setCurrentUser(null)
      history.push('/login')
  });
};

//State Variables
  const [currentUser, setCurrentUser] = useState(null)
  const [errors, setErrors] = useState([])






  return (
    <div className="App">
       {currentUser && <NaviBar logout={logout} currentUser = {currentUser}/>}
      <Switch>

      <Route exact path="/karma">
       {currentUser && <Karma API={API} currentUser={currentUser} />}
      </Route>

      <Route exact path="/make-hang">
        <MakeHang currentUser={currentUser} API = {API} />
      </Route>

      <Route exact path = '/hang-feed'>
        <HangFeed API = {API}/>
      </Route>

      <Route exact path="/find-hang" >
       {currentUser && <FindAHang  currentUser={currentUser} API={API} />}
      </Route>

      <Route exact path ='/login'>
        <Login login={login} errors={errors} />
      </Route>

      <Route exact path = '/signup'>
        <Signup signup={signup} />
      </Route>

      <Route  exact path = "/my-hangs">
        {currentUser && <MyHangs API={API} currentUser={currentUser} />}
      </Route>

    <Route  exact path="/profile/:id">
      {currentUser && <Profile API={API} setCurrentUser={setCurrentUser} currentUser = {currentUser} />}
    </Route>

    <Route exact path='/hangs/:id'>
       {currentUser &&  <Hang currentUser={currentUser} API={API} />}
    </Route>
    
    </Switch>
    </div>
  );
}

export default App
