# 汇报内容编辑与导出测试网页

## 功能简介
- 支持富文本编辑、插入图片
- 支持本地导出为 Word、Excel、PDF 文件
- 所有处理均在本地浏览器完成，无需后端

## 技术栈
- React
- react-quill（富文本编辑器）
- html-docx-js（Word 导出）
- xlsx（Excel 导出）
- jspdf + html2canvas（PDF 导出）

## 安装与运行
```bash
npm install
npm start
```

## 目录结构
```
src/
  components/           # 组件
    ExportButtons.jsx   # 导出按钮
  utils/                # 工具函数
    exportWord.js       # Word 导出
    exportExcel.js      # Excel 导出
    exportPDF.js        # PDF 导出
  App.js                # 主页面
  ...
```

## 使用说明
1. 在编辑区输入汇报内容，可插入图片。
2. 点击下方导出按钮，选择需要的文件格式。
3. 文件将自动下载到本地。

## 注意事项
- 图片仅支持插入本地图片，导出时会一并包含。
- 仅供测试和学习使用。

---
如需自定义模板或样式，可修改 `utils` 目录下的导出工具函数。 