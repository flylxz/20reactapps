import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './MDEditor.scss';

export const MDEditor = () => {
  const [markdown, setMarkdown] = useState('# hello world');

  const handleChange = (e) => setMarkdown(e.target.value);

  return (
    <div className='mdeditor-app'>
      <textarea onChange={handleChange} value={markdown} />

      <ReactMarkdown className='preview' source={markdown} />
    </div>
  );
};
