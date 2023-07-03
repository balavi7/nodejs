const express = require('express');
const app = express();
require('dotenv').config();

// Endpoint to display instance ID and instance type
app.get('/', (req, res) => {
  const instanceId = process.env.AWS_INSTANCE_ID;
  const instanceType = process.env.AWS_INSTANCE_TYPE;
  const projectDescription = 'This is my simple Node.js project';


  const html = `<h1>Instance ID: ${instanceId}</h1>
                <h1>Instance Type: ${instanceType}</h1>;
		<p>${projectDescription}</p>`;


  res.send(html);
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
