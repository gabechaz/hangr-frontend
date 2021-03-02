function HangCard ({hang}) {
    console.log(hang)
    return (
<div>
    <div>
    {hang.activity_name}
    </div>
    <div>
       People Needed {hang.people_needed}
    </div>
    <div>
       Time: {hang.time}
    </div>
    <div>
      Location:  {hang.location}
    </div>

</div>
    )
}

export default HangCard