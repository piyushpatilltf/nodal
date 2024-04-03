import { useEffect, useState } from "react";
const renderData='<u>Remedies</u>. Recipient acknowledges and agrees that money damages <span data-dpId="#np_0001"> would</span> not be a sufficient remedy for, and irreparable harm may arise from, any <span  data-dpId="#np_0002"> breach or threatened breach</span> of this Agreement (“<b>Violation</b>”) by Recipient or its Representatives. Therefore, in addition to all other remedies available at law, Discloser <span  data-dpId="#np_0003"> is entitled to seek</span> specific performance, injunction, or other equitable relief as a remedy for any such Violation.'
function AssignmentOne() {
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

export default AssignmentOne;