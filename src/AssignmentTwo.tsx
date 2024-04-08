import React, { useEffect, useState, ReactNode } from "react";
import TextField from '@mui/material/TextField';
import './AssignmentTwo.css';

interface HTMLComponentProps {
  htmlString: string;
}

const HTMLComponent: React.FC<HTMLComponentProps> = ({ htmlString }) => {
  const parseHTML = (html: string): ReactNode[] => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    return Array.from(tempDiv.childNodes).map((node, index) => {
      return createReactElement(node as HTMLElement, index);
    });
  };

  const createReactElement = (node: Node, index: number): ReactNode | null => {
    if (node.nodeType === Node.TEXT_NODE) {
      return (node as Text).textContent;
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      const element = node as HTMLElement;
      const tagName = element.tagName.toLowerCase();
      const props: { [key: string]: string } = {};
      for (let i = 0; i < element.attributes.length; i++) {
        const { name, value } = element.attributes[i];
        props[name] = value;
      }

      const children = Array.from(element.childNodes).map((child, idx) => createReactElement(child, idx));
      return React.createElement(tagName, { key: index, ...props }, ...children);
    } else {
      return null;
    }
  };

  return <div>{parseHTML(htmlString)}</div>;
};

function AssignmentTwo() {
  const [firstPartyName, setFirstPartyName] = useState("");
  const [firstPartyState, setFirstPartyState] = useState("");
  const [firstPartyType,setFirstPartyType]=useState("");
  
  const handleFirstPartyNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstPartyName(event.target.value.trim());
  };
  const handleFirstPartyStateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstPartyState(event.target.value.trim());
  };
  const handleFirstPartyTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstPartyType(event.target.value.trim());
  };
  const HTMLComponent: React.FC<HTMLComponentProps> = ({ htmlString }) => {
    const parseHTML = (html: string): ReactNode[] => {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = html;
      return Array.from(tempDiv.childNodes).map((node, index) => {
        return createReactElement(node as HTMLElement, index);
      });
    };
  
    const createReactElement = (node: Node, index: number): ReactNode | null => {
      if (node.nodeType === Node.TEXT_NODE) {
        return (node as Text).textContent;
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        const element = node as HTMLElement;
        const tagName = element.tagName.toLowerCase();
        const props: { [key: string]: string } = {};
        for (let i = 0; i < element.attributes.length; i++) {
          const { name, value } = element.attributes[i];
          props[name] = value;
        }
  
        const children = Array.from(element.childNodes).map((child, idx) => createReactElement(child, idx));
        if(tagName==='span' && props['data-dpfor']){
          switch (props['data-dpfor']) {
            case "first_party_name":
              return React.createElement(tagName, { key: index, ...props },firstPartyName);
 
            case "first_party_state_of_organization":
              return React.createElement(tagName, { key: index, ...props },firstPartyState);

            case "first_party_type":
              return React.createElement(tagName, { key: index, ...props },firstPartyType);
            
            default:
              break;
          }
          
        }
        return React.createElement(tagName, { key: index, ...props }, ...children);
      } else {
        return null;
      }
    };
  
    return <div>{parseHTML(htmlString)}</div>;
  }; 
  const renderData: string = `This Confidentiality Agreement (“<b>Agreement</b>”), by and between <span data-dpFor="first_party_name"></span>, <span data-dpFor="first_party_state_of_organization"></span> <span  data-dpFor="first_party_type"></span> (“<b>Discloser</b>”).`;

  return (
    <div>
      <h1>Assignment 2</h1>
      <div className="mainContainer">
        <div className="outputContainer" ><HTMLComponent htmlString={renderData} /></div>
        <div className="inputContainer">
          <TextField className="customTextField" label="First Party Name" variant="outlined" onChange={handleFirstPartyNameChange} />
          <TextField className="customTextField" label="First Party State of organization" variant="outlined" onChange={handleFirstPartyStateChange}/>
          <TextField className="customTextField" label="First Party Type" variant="outlined" onChange={handleFirstPartyTypeChange}/>
        </div>
      </div>
    </div>
  );
}

export default AssignmentTwo;
