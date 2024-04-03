import { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';

const renderData='This Confidentiality Agreement (“<b>Agreement</b>”), by and between <span data-dpFor="first_party_name"></span>, <span data-dpFor="first_party_state_of_organization"></span> <span  data-dpFor="first_party_type"></span> (“<b>Discloser</b>”).'
function AssignmentTwo() {
    const [loading, setLoading] = useState(true);
    const [displayText, setDisplayText] = useState('');
    const [partyName,setPartyName]=useState('');
    const [partyState,setPartyState]=useState('');
    const [partType,setPartyType]=useState('');
    const apiFunction=()=>{
        setTimeout(()=>{
            setLoading(false)
            setDisplayText("Piysu")
        },3000)
    }
    useEffect(()=>{
        apiFunction()
    },[]);
    useEffect(() => {
        const partyNameElement = document.querySelector('span[data-dpFor="first_party_name"]');
        const partyStateElement = document.querySelector('span[data-dpFor="first_party_state_of_organization"]');
        const partyTypeElement = document.querySelector('span[data-dpFor="first_party_type"]');
        if (partyNameElement) {
          partyNameElement.innerHTML =partyName;
        }
        if (partyStateElement) {
            partyStateElement.innerHTML =partyState;
          }
          if (partyTypeElement) {
            partyTypeElement.innerHTML =partType;
          }
      }, [partyName,partyState,partType]);
    return (
        <div>{displayText}
            <div dangerouslySetInnerHTML={{ __html: renderData }}></div>
            <div>
                <TextField id="outlined-basic" label="First Party Name" variant="outlined" onChange={(e)=>setPartyName(e.currentTarget.value)}/>
                <TextField id="outlined-basic" label="First Party State of organization" onChange={(e)=>setPartyState(e.currentTarget.value)} variant="outlined" />
                <TextField id="outlined-basic" label="First Party Type" variant="outlined" onChange={(e)=>setPartyType(e.currentTarget.value)} />
            </div>
        </div>
        
    )
}

export default AssignmentTwo;