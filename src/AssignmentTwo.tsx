import { ReactHTML, useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import './AssignmentTwo.css'
import parse from 'html-react-parser';
const renderData:string='This Confidentiality Agreement (“<b>Agreement</b>”), by and between <span data-dpFor="first_party_name"></span>, <span data-dpFor="first_party_state_of_organization"></span> <span  data-dpFor="first_party_type"></span> (“<b>Discloser</b>”).'
function AssignmentTwo() {
    const [loading, setLoading] = useState<boolean>(true);
    const [displayText, setDisplayText] = useState<string>('');
    const [partyName,setPartyName]=useState<string>('');
    const [partyState,setPartyState]=useState<string>('');
    const [partType,setPartyType]=useState<string>('');
    const apiFunction=():void=>{
        setTimeout(()=>{
            setDisplayText(renderData)
            setLoading(false)
        },2000)
    }
    const handleChangeNameInput=(e:React.ChangeEvent<HTMLInputElement>)=>setPartyName(e.currentTarget.value.trim());
    const handleChangeStateInput=(e:React.ChangeEvent<HTMLInputElement>)=>setPartyState(e.currentTarget.value.trim());
    const handleChangeTypeInput=(e:React.ChangeEvent<HTMLInputElement>)=>setPartyType(e.currentTarget.value.trim());
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
        <div>
            <h1>Assignment Two</h1>
            {
                loading?
                <h1>Loading</h1>:
                <div className="mainContainer">
                    <div>{parse(displayText)}</div>
                    <div className="inputContainer">
                        <TextField className="customTextField" label="First Party Name" variant="outlined" onChange={handleChangeNameInput}/>
                        <TextField className="customTextField" label="First Party State of organization" onChange={handleChangeStateInput} variant="outlined" />
                        <TextField className="customTextField" label="First Party Type" variant="outlined" onChange={handleChangeTypeInput} />
                    </div>
                </div>
            }
        </div>
        
    )
}

export default AssignmentTwo;