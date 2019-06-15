const express = require('express');
const path = require('path');

let publicPath = path.join(__dirname, '../public');
let app = express();
app.use(express.static(publicPath))

let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
})

