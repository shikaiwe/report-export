import React from 'react';
import exportWord from '../utils/exportWord';
import exportExcel from '../utils/exportExcel';
import exportPDF from '../utils/exportPDF';

const ExportButtons = ({ content }) => {
  return (
    <div style={{ marginTop: 20 }}>
      <button onClick={() => exportWord(content)} style={{ marginRight: 10 }}>导出 Word</button>
      <button onClick={() => exportExcel(content)} style={{ marginRight: 10 }}>导出 Excel</button>
      <button onClick={() => exportPDF(content)}>导出 PDF</button>
    </div>
  );
};

export default ExportButtons; 