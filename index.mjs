import express from 'express'
const server = express()

const port = 5000

server.get("/", (rep))
server.listen(3000, () => {
    console.log('server started on ${port}')
})