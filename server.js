import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Since we use ES modules ("type": "module" in package.json), we must define __dirname manually
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
// The hosting provider will supply the PORT environment variable
const PORT = process.env.PORT || 3000;

// Serve the static files from the Vite build output directory
app.use(express.static(path.join(__dirname, 'dist')));

// Catch-all route for Single Page Applications (SPA):
// If the user visits /about or refreshes the page, serve the index.html
// so that React Router can take over the routing on the frontend.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
