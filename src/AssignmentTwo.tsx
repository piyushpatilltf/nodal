import { useEffect, useState } from "react";
const renderData='This Confidentiality Agreement (“<b>Agreement</b>”), by and between <span data-dpFor="first_party_name"></span>, <span data-dpFor="first_party_state_of_organization"></span> <span  data-dpFor="first_party_type"></span> (“<b>Discloser</b>”).'
function AssignmentTwo() {
    const [loading, setLoading] = useState(true);
    const [displayText, setDisplayText] = useState('');
    const apiFunction=()=>{
        setTimeout(()=>{
            setLoading(false)
            setDisplayText("Piysu")
        },3000)
    }
    useEffect(()=>{
        apiFunction()
    },[]);
    return (
        <div>{displayText}<div dangerouslySetInnerHTML={{ __html: renderData }}></div></div>
        
    )
}

export default AssignmentTwo;