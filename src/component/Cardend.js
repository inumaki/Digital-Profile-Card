import React from "react"
import twitter from "../images/twitter.png"
import facebook from "../images/facebook.png"
import qrcode from "../images/qr-code.png"
import github from "../images/github-sign.png"
export default function Cardend(){
return (
<footer className="endsection">
<a ><img className="twitter" src={twitter} /></a>
<a ><img src={facebook} /></a>
<a><img src={qrcode} /></a>
<a><img src={github} /></a>
</footer>
)}