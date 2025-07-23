import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default function exportPDF(content) {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = content;
  tempDiv.style.position = 'fixed';
  tempDiv.style.left = '-9999px';
  document.body.appendChild(tempDiv);

  // 提高分辨率
  html2canvas(tempDiv, { scale: 2 }).then(canvas => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth();

    // 计算图片在PDF中的尺寸，保持比例
    const imgWidth = pageWidth;
    const imgHeight = canvas.height * imgWidth / canvas.width;

    let position = 0;
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    pdf.save('汇报内容.pdf');
    document.body.removeChild(tempDiv);
  });
} 