import './css-files/Profile.css'
import {useEffect, useState} from 'react'


function Profile ({API, setCurrentUser, currentUser}) {


useEffect(() => {
  fetch(`${API}/users/${currentUser.id}`)
  .then(res => res.json())
  .then(user =>setCurrentUser(user) )
}

)



    return (
<div className="container">
  <div className="row">
    <div className="col-md-6 img">
      <img src={currentUser.img}  alt="avatar" className="img-rounded" />
    </div>
    <div className="col-md-6 details">
      <blockquote>
        <h1>{currentUser.name}</h1>
        <small><cite title="Source Title"> Location: <br /> {currentUser.location}<i className="icon-map-marker"></i></cite></small>
      </blockquote>
      <p>
        Username: {currentUser.username} <br />
        Favorite Board Game: {currentUser.favGame}<br />
        Favorite Genre: {currentUser.favGenre}<br />
        Karma: {currentUser.karma > 0 ? currentUser.karma : currentUser.name + ' has no karma reviews yet!' }
      </p>
    </div>
  </div>
</div>

    )

}

export default Profile