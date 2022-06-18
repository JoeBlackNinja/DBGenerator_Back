const express = require("express");
const routes = require('./routes/routes');
const PORT = 5000;

const app = express();
app.use(express.json())
app.use(express.urlencoded(({ extended: true })));
app.use('/', routes)

app.listen(PORT, () => {
	console.log(`Server PORT:${PORT}`)
})