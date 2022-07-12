import React from "react"
import profile_pic from "../images/profilepic.png"
import gmaillogo from "../images/gmail-logo.png"
import linkedin from "../images/linkedin.png"
export default function Infosection(){

return (<div className="topsection">
<img className="profilepic"src={profile_pic} />
<div className="infosection"> 
<h4>Aryan Katiyar</h4>
<h5>Web Developer</h5>
<h6>Delhi</h6>
</div>
<div className="buttons">
<div className="button"><img src={gmaillogo}/>Email</div>
<div className="button"><img src={linkedin}/>LinkedIn</div>
</div>
</div>
)}