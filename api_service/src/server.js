const api = require('./app')

const PORT = 3000

api.listen(PORT, () => {
    console.log(`Example api listening on port ${PORT}!`);
})