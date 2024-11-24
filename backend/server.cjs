const express = require('express');
const path = require('path');

const app = express();

// Serve static files from 'dist' folder after Vite build
app.use(express.static(path.join(__dirname, '../dist')));

// Handle pretty URLs like '/about' and serve 'about.html'
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/about.html'));
});

// Fallback to index.html for any other routes (if desired)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
