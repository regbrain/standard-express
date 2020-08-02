const app = require('express')()
app.get('/', (req, res) => res.send('Hello hot reload!'))
app.listen(3000, () => console.log('Listening on port 3000'))
