import './css-files/HangFeedCard.css'
// import { useState} from 'react'
import {useHistory} from 'react-router-dom'

function HangFeedCard ({hang, API}) {



    const comments = hang.review_info.map( r => {
        console.log(r)
        function goToCommenterProfile() {
            history.push(`/profile/${r.id}`)
        }

        return (
            
                 <div className="box-footer box-comments">
         <div className="box-comment">
             <img onClick={goToCommenterProfile} className="img-circle img-sm" src={r.user_image} alt="User Avatar" />
    <div className="comment-text"> 
 
    <span className="username"> {r.user} </span> 
    {r.comment} 
    </div>
</div>
</div>

        )
    })

   const history = useHistory()
                  
   function goToProfile () {
       history.push(`profile/${hang.user.id}`)
   }

    
return (
    <div className="page-content page-container" id="page-content">
    <div className="padding">
        <div className="row container d-flex justify-content-center">
            <div className="col-md-6">
                <div className="box box-widget">
                    <div className="box-header with-border">
                        <div className="user-block"> <img onClick={goToProfile} className="img-circle" src={hang.user.img } alt="User" /> <span className="username">{hang.user.name}'s night of {hang.game_name}</span> <span className="description">{hang.time_string}</span> </div>
                         
                    </div>
                    <div className="box-body"> <img className="img-responsive pad" src={hang.images ? hang.images[0] : hang.game_image } alt="hang" />
                    </div>
                    {comments}
                </div>
            </div>
           
        </div>
    </div>
</div>
)
}

export default HangFeedCard