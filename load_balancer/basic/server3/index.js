const express = require("express")

const app = express()

app.get("/", (req,res) => {
    res.send("SERVER 3 's response")
})
app.listen(5050,() => {
    console.log("Listening...")
})