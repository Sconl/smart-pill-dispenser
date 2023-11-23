const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public')); // Serve static files (HTML, CSS, JS)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, 'data.json');

// Load existing data
let data = fs.existsSync(dataFilePath) ? JSON.parse(fs.readFileSync(dataFilePath)) : {};

// Route to handle profile changes
app.post('/saveProfileChanges', (req, res) => {
  const { newName, newAge, newGender } = req.body;

  // Update the data
  data.profile = { name: newName, age: newAge, gender: newGender };

  // Save the data to the file
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));

  res.json({ success: true });
});
