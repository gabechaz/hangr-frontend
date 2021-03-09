import './css-files/Profile.css'


function Profile ({currentUser}) {
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
        Bio: {currentUser.bio}<br />
        Karma: {currentUser.karma > 0 ? currentUser.karma : currentUser.name + ' has no karma reviews yet!' }
      </p>
    </div>
  </div>
</div>

    )

}

export default Profile