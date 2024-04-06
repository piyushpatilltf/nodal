import React, { useEffect, useState ,ReactNode} from "react";
import './AssignmentOne.css'
import parse from 'html-react-parser';



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
      if (tagName === 'span' && props['data-dpid']) {
        props['tootTipText'] = element.innerText;
      }
      const children = Array.from(element.childNodes).map((child, idx) => createReactElement(child, idx));
      return React.createElement(tagName, { key: index, ...props }, ...children);
    } else {
      return null; 
    }
  };

  return <div>{parseHTML(htmlString)}</div>;
};
function AssignmentOne() {
    const renderData =  '<u>Remedies</u>. Recipient acknowledges and agrees that money damages <span data-dpId="#np_0001"> would</span> not be a sufficient remedy for, and irreparable harm may arise from, any <span  data-dpId="#np_0002"> breach or threatened breach</span> of this Agreement (“<b>Violation</b>”) by Recipient or its Representatives. Therefore, in addition to all other remedies available at law, Discloser <span  data-dpId="#np_0003"> is entitled to seek</span> specific performance, injunction, or other equitable relief as a remedy for any such Violation.';
    return (
      <div>
        <h1>Assigment One</h1>
        <HTMLComponent htmlString={renderData} />
      </div>
    );
      
} 
export default AssignmentOne;
