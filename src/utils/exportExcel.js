import * as XLSX from 'xlsx';

export default function exportExcel(content) {
  // 只导出纯文本内容
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = content;
  const text = tempDiv.innerText;
  const ws = XLSX.utils.aoa_to_sheet([[text]]);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, '汇报内容');
  XLSX.writeFile(wb, '汇报内容.xlsx');
} 