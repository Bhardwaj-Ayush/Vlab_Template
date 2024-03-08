import './Simulation.css';
import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function Code() {
  const [currentLanguage, setCurrentLanguage] = useState('python');
  const [copied, setCopied] = useState(false);

  const codeString = {
    python: `
    ADD Python code
    `,
      Java: `
      ADD JAVA CODE  
      `,
      'C++' : `
      ADD C++ CODE
       ` ,
  };

  const handleCopy = () => {
    const code = codeString[currentLanguage];
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };


  return (
    <>
      <div className="container">
        <div className="box" id="code">
          <div className="title">
            <h2 className="font-Robo text-xl md:text-3xl text-center">Code</h2>
          </div>
          <div className="desc1">
            <div className="code_header">
              <button
                className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg mx-1 ${currentLanguage === 'python' ? 'active' : ''}`}
                onClick={() => setCurrentLanguage('python')}
              >
                Python
              </button>
              <button
                className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg mx-1 ${currentLanguage === 'java' ? 'active' : ''}`}
                onClick={() => setCurrentLanguage('Java')}
              >
                Java
              </button>
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg mx-1"
                // style={{ backgroundColor: 'Black', color: 'white', marginBottom: '-20px' }}
                onClick={() => setCurrentLanguage('C++')}
              >
                C++
              </button>
              <button className=" bg-gray-300 hover:bg-gray-800 hover:text-white text-black font-bold py-1 px-2 rounded-sm float-right mt-2" onClick={handleCopy} >
              {copied ? 'Copied!' : 'Copy Code'}
              </button>

            </div>
            <div className="max-w-2x1 min-w-[25rem]  rounded-md overflow-hidden">
              
              <div className="grid place-items-center border-2 border-black p-4 bg-slate-950">
                <p className="text-xl text-white">
                  {currentLanguage}
                </p>
                <SyntaxHighlighter language="jsx" style={atomOneDark} customStyle={{ padding: '20px', paddingTop: '6px' }}>
                  {codeString[currentLanguage]}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
