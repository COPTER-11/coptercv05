const express = require('express');
const app = express();
const path = require('path');

// กำหนดเส้นทางสำหรับหน้าแรก
app.get('/', (req, res) => {
    // ส่งไฟล์ index.html เป็นหน้าแรก
    res.sendFile(path.join(__dirname, 'views', 'index.html')); 
});

// กำหนด port และเริ่ม server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});