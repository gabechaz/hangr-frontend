import {useState} from 'react'
import ReactStars from "react-rating-stars-component";
import './css-files/KarmaForm.css'
function KarmaForm ({API, currentUser, attendee, hangId}) {

    const [comment, setComment] = useState("")
    const [rating, setRating] = useState(5)
    const [reviewed, setReviewed] = useState(false)

    const ratingChanged = (newRating) => {
        setRating(newRating);
      }

      function handleCommentChange (e) {
          setComment(e.target.value)
      }

      function submitReview (e) {
          e.preventDefault()
          setReviewed(true)
        fetch(`${API}/make-review`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(reviewObj)
          })
          .then(res => res.json())
          .then(review => console.log(review))
      }



      const reviewObj = {
          reviewer_id: currentUser.id,
          hang_id: hangId,
          reviewee_id: attendee.id,
          comment: comment,
          karma: rating,

      }
      console.log(reviewObj)
      console.log(attendee)
    return (
      <div className = 'outer-form-div'>
   
<form>
               


 <label>Leave a Comment and rating for {attendee.name}!</label> <img src ={attendee.img}  className = "karma-form-user-image" />

  
 <div className="five-star">
 <ReactStars
count={5}
onChange={ratingChanged}
size={24}
activeColor="#ffd700"
 /> </div>
 <br />
<div className='comment-div'>
 <div className="form-group mb-3">
                <input id="inputEmail" type="email" value={comment} onChange={handleCommentChange} placeholder="comment" required="" autofocus="" className="form-control rounded-pill border-0 shadow-sm px-4" />
       </div>
       </div>


 <br />
 {!reviewed ?<button onClick ={submitReview}>Submit User Review</button> : <p>Nice Review!</p>}
 </form>
 </div>
) }

export default KarmaForm