import {useEffect, useState} from 'react'
import HangFeedCard from './HangFeedCard.js'

function HangFeed({API}) {
    const currentTime = new Date()
    const currentTimeStamp = Date.parse(currentTime)
    const [hangs, setHangs] = useState([])

    const [hangsIndex, setHangsIndex] = useState(0)

    useEffect (() => {
        fetch(`${API}/hangs`)
        .then (res => res.json())
        .then(hangs => setHangs(hangs))
    }, [API]

    )



    const pastHangs = hangs.filter(hang => Date.parse(hang.time) < currentTimeStamp )
    // .slice(hangsIndex,hangsIndex + 10)





 
    const hangCards = pastHangs.map(hang => {
        return (
            <HangFeedCard API={API} key = {hang.id} hang = {hang} />
        )
    })

    console.log(pastHangs)

    

return (
    <div>
    <div>
    {hangCards}
    </div>
    <div>HI</div>
    </div>
)
}

export default HangFeed