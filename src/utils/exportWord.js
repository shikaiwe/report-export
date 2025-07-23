import htmlDocx from 'html-docx-js/dist/html-docx';

export default function exportWord(content) {
  const html = `<!DOCTYPE html><html><head><meta charset='utf-8'></head><body>${content}</body></html>`;
  const docx = htmlDocx.asBlob(html);
  const link = document.createElement('a');
  link.href = URL.createObjectURL(docx);
  link.download = '汇报内容.docx';
  link.click();
} 