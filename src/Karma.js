import './css-files/Karma.css'
import {useEffect, useState} from 'react'
import KarmaCard from './KarmaCard.js'
import ReviewCard from './ReviewCard.js'



function Karma ({currentUser, API}) {

    

    const [hangs, setHangs] = useState([])
    const currentTime = new Date()
    const currentTimeStamp = Date.parse(currentTime)
    const [reviewToggle, setReviewToggle] = useState(false)
    // console.log(currentTimeStamp,'current time stamp')

    // hangs.forEach(hang => {
    //     console.log(hang)
    //     console.log(Date.parse(hang.time), hang.location)
    // })

        //  console.log(tBR)
        //  console.log(hangs)
    // console.log(hangs.length)

    function toggle () {
        setReviewToggle(!reviewToggle)
    }

    useEffect(() =>  {
        
        fetch(`${API}/users/${currentUser.id}`)
        .then(res => res.json())
        .then(data => setHangs(data.rsvps))
        }
        
    ,[API, currentUser.id]
    )

    const tBR = hangs
    
    .filter(hang => Date.parse(hang.time) < currentTimeStamp 
         )
         console.log(currentUser.reviews)

        const reviewCards = currentUser.reviews.map( review => {
            return (
                <ReviewCard key = {review.id} review = {review} />
            )
    
        })

    const karmaCards = tBR.map (hang => {
        return (
            <KarmaCard currentUser = {currentUser} API={API} key ={hang.id} hang={hang} />
        )
    })



    return (
        <div className = 'outer-karma-div'>
            <h1 className = 'karma-header'>Review Your Past Hangs here!</h1>
            <button onClick={toggle} className = 'button'>{reviewToggle ?<p className = 'button-p'>See Your Own Reviews Here</p> : <p className='button-p'>Enter Your Reviews Here</p>}</button>

     <div className='karma-div'>
     {reviewToggle ? <div className='to-be-reviewed'>
        {karmaCards}
     </div>
     :
     <div className = 'review-cards-div'>
         <h1 className = 'review-header'>{currentUser.name}'s Reviews</h1>
         {reviewCards}
     </div>}
     
     </div>
     </div>

    )
 
}

export default Karma