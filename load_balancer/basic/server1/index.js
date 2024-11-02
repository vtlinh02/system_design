const express = require("express")

const app = express()

app.get("/name", (req,res) => {
    res.send("SERVER 1 's response Vu Tuan Linh")
})

app.get("/", (req,res) => {
    res.send("SERVER 1 's response")
})

app.listen(5050,() => {
    console.log("Listening...")
})