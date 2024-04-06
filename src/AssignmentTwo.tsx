import React, { useEffect, useState ,ReactNode} from "react";
import TextField from '@mui/material/TextField';
import './AssignmentTwo.css';
const renderData:string='This Confidentiality Agreement (“<b>Agreement</b>”), by and between <span data-dpFor="first_party_name"></span>, <span data-dpFor="first_party_state_of_organization"></span> <span  data-dpFor="first_party_type"></span> (“<b>Discloser</b>”).'
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
    return <div>
        <h1>Assignment 2</h1>
         <div className="mainContainer">
                    <div className="outputContainer" ><HTMLComponent htmlString={renderData} /></div>
                    <div className="inputContainer">
                        <TextField className="customTextField" label="First Party Name" variant="outlined" />
                        <TextField className="customTextField" label="First Party State of organization" variant="outlined" />
                        <TextField className="customTextField" label="First Party Type" variant="outlined"  />
                    </div>
                </div>
        
    </div>
    
}

export default AssignmentTwo;