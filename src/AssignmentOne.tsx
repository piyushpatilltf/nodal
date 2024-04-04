import React, { useEffect, useState } from "react";
import './AssignmentOne.css'

const renderData = '<u>Remedies</u>. Recipient acknowledges and agrees that money damages <span data-dpId="#np_0001"> would</span> not be a sufficient remedy for, and irreparable harm may arise from, any <span  data-dpId="#np_0002"> breach or threatened breach</span> of this Agreement (“<b>Violation</b>”) by Recipient or its Representatives. Therefore, in addition to all other remedies available at law, Discloser <span  data-dpId="#np_0003"> is entitled to seek</span> specific performance, injunction, or other equitable relief as a remedy for any such Violation.'

function AssignmentOne() {
    const [loading, setLoading] = useState<boolean>(true);
    const [displayText, setDisplayText] = useState<string>('');

    useEffect(() => {
        const parser = new DOMParser();
        const parseDocument = parser.parseFromString(renderData, 'text/html');
        const rootElement = parseDocument.documentElement;
        const spanElements = rootElement.querySelectorAll('span');
        
        spanElements.forEach(span => {
            span.setAttribute('data-dpId', span.innerText);
        });

        const temp = rootElement.querySelector('body')?.innerHTML.toString();
        if (temp) {
            setDisplayText(temp);
        }
        setTimeout(() => {
            setLoading(false); 
        }, 2000);
        
    }, []);

    return (
        <div>
            <h1>Assignment One</h1>
            {loading ? (
                <h1>Loading</h1>
            ) : (
                <div dangerouslySetInnerHTML={{ __html: displayText }} />
            )}
        </div>
    );
}

export default AssignmentOne;
