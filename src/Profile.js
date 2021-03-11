import './css-files/Profile.css'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'


function Profile ({API, setCurrentUser, currentUser}) {

  const [profiledUser, setProfiledUser] = useState("")
const {id }= useParams()
useEffect(() => {
  fetch(`${API}/users/${currentUser.id}`)
  .then(res => res.json())
  .then(user =>setCurrentUser(user) )
}, []

)

useEffect(() => {
  fetch(`${API}/users/${id}`)
  .then(res => res.json())
  .then(user =>setProfiledUser(user) )
}, []

)


    return (
<div className="container">
  <div className="row">
    <div className="col-md-6 img">
      <img src={profiledUser.img}  alt="avatar" className="img-rounded" />
    </div>
    <div className="col-md-6 details">
      <blockquote>
        <h1>{profiledUser.name}</h1>
        <small><cite title="Source Title"> Location: <br /> {profiledUser.location}<i className="icon-map-marker"></i></cite></small>
      </blockquote>
      <p>
        Username: {profiledUser.username} <br />
        Favorite Board Game: {profiledUser.favGame}<br />
        Favorite Genre: {profiledUser.favGenre}<br />
        Karma: {profiledUser.karma > 0 ? profiledUser.karma : profiledUser.name + ' has no karma reviews yet!' }
      </p>
    </div>
  </div>
</div>

    )

}

export default Profile