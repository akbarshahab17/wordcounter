import { useState } from "react";
import { useRef } from "react";

export const Home = () => {

  const [count, setCount] = useState(0);
  const [charcount, setCharcount] = useState(0);
  const [maxlen, setMaxlen] = useState(1000);
  const [size, setSize] = useState(16);
  const textareaRef = useRef(null);

  const clearTextarea = () => {
    if (textareaRef.current) {
      textareaRef.current.value = ''; // Directly manipulate the DOM value
      textareaRef.current.focus(); // Optional: bring focus back to the textarea
    }
  };

  let change = (e) => {
    wordcount(e.target.value);
  };

  function wordcount(str) {
    let c = 0;
    let str1 = str.split(" ");
    charCout(str);

    for (let i = 0; i < str1.length; i++) {
      if (str1.length === 0) {
        setCount(0);
      }
      if (str1[i] !== "") {
        c++;
      }
      setCount(c);
    }
  }

  function charCout(str) {
    let c = 0;
    for (var i = 0; i < str.length; i++) {
      if (str[i] !== " ") {
        c++;
      }
    }
    setCharcount(c);
  }
  let maxfun = (e) => {
    setMaxlen(e.target.value);
  };

  const sizechange = (e) => {
    setSize(e.target.value);
  };

  return (
    <div>
      <div>
        <h1>Word Counter</h1>
        <p>Free online character and word count tool.</p> 
      </div>
      <div>
         <label>Font size picker</label>
        <input type="range" min="16" max="32" onChange={sizechange}></input>
        <label>Word limit input</label>
        <input type="number" onChange={maxfun} id="char-limit-input" />
        <br />
        <textarea className="textarea"
          ref={textareaRef}
          onChange={change}
          maxLength={maxlen}
          placeholder="Type or paste your text here"
          style={{ fontSize: `${size}px` }}>
        </textarea>
        <br />
        <button onClick={clearTextarea} className="button1">Clear</button>
        </div>
      <div>

        <button className="button2" id="char-counter">Characters: {charcount} </button>
        <button className="button2" id="word-counter">Words: {count}</button>
  
      </div>    
    </div>
  )
}