'use client'
import { useState } from 'react';
import Editor from '@monaco-editor/react';

const EditorComponent = ({ language = 'javascript', value = '', onChange }) => {
  const [code, setCode] = useState(value);

  const handleEditorChange = (value) => {
    setCode(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <Editor
      height="500px"
      defaultLanguage={language}
      value={code}
      onChange={handleEditorChange}
      theme="vs-dark"
      options={{
        minimap: { enabled: false },
        fontSize: 16,
        automaticLayout: true,
      }}
    />
  );
};

export default EditorComponent;
