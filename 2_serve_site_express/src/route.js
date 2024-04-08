const express = require('express')
const path = require('path')
const app = express();
const path_name = path.join(__dirname , "../public")
console.log(path_name)

app.use(express.static(path_name))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(9000, () => {
    console.log('Server is running on port 9000')
})