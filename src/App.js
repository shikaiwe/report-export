import React, { useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './App.css';
import ExportButtons from './components/ExportButtons';

function App() {
  const [content, setContent] = useState('');
  const editorRef = useRef(null);

  return (
    <div className="app-container">
      <h1>汇报内容编辑与导出</h1>
      <ReactQuill
        ref={editorRef}
        theme="snow"
        value={content}
        onChange={setContent}
        modules={{
          toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image'],
            ['clean'],
          ],
        }}
        style={{ height: '300px', marginBottom: '70px' }}
      />
      <ExportButtons content={content} />
    </div>
  );
}

export default App;
