const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// This URL will be the Flask backend service in Docker Compose
const BACKEND_URL = process.env.BACKEND_URL || "http://backend:5000";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (our form)
app.use(express.static(path.join(__dirname, "public")));

app.post("/submit", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const response = await axios.post(`${BACKEND_URL}/submit`, {
      name,
      email,
      message,
    });

    const data = response.data;

    res.send(`
      <html>
        <head><title>Form Submitted</title></head>
        <body>
          <h1>Form Submission Result</h1>
          <p><strong>Status:</strong> ${data.status}</p>
          <p><strong>Summary:</strong> ${data.summary}</p>
          <h2>Data sent to backend:</h2>
          <pre>${JSON.stringify(data.data, null, 2)}</pre>
          <a href="/">Go back</a>
        </body>
      </html>
    `);
  } catch (err) {
    console.error("Error talking to backend:", err.message);
    res.send(`
      <html>
        <head><title>Error</title></head>
        <body>
          <h1>Error sending data to Flask backend</h1>
          <pre>${err.message}</pre>
          <a href="/">Go back</a>
        </body>
      </html>
    `);
  }
});

app.listen(PORT, () => {
  console.log(`Node/Express frontend listening on port ${PORT}`);
});
