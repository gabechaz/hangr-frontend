import {useState} from 'react'
import ReactStars from "react-rating-stars-component";
function KarmaForm ({API, currentUser, attendee, hangId}) {

    const [comment, setComment] = useState("")
    const [rating, setRating] = useState(5)

    const ratingChanged = (newRating) => {
        setRating(newRating);
      }

      function handleCommentChange (e) {
          setComment(e.target.value)
      }

      function submitReview (e) {
          e.preventDefault()
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

    return (
<form>
               


 <label>Leave a Comment and rating for {attendee.name}!</label>
 <div className="five-star">
 <ReactStars
count={5}
onChange={ratingChanged}
size={24}
activeColor="#ffd700"
 /> </div>
 <br />
 <input type='text' value={comment} onChange = {handleCommentChange}></input>
 <br />
 <button onClick ={submitReview}>Submit User Review</button>
 </form>
) }

export default KarmaForm