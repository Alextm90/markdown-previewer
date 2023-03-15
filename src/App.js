import React from "react";
import './index.css';
import { marked } from 'marked'
import { useState } from "react";
import initialMarkdown from "./initialMarkdown";

function App() {

  const [markdown, setMarkdown] = useState(() => {
  return initialMarkdown
});

marked.setOptions({
 breaks: true
})
 
const handleChange = (event) => {
  setMarkdown(event.target.value)
}

return (
<div className="container">
  <article className="text-editor">
    <textarea id="editor" className="textarea" type="text"  value={markdown} rows="27" cols="70" onChange={(event) => handleChange(event)}></textarea>
  </article>
  <article className="content">
    <div id="preview" className="preview" dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
  </article>
</div>
  );
}

export default App;


