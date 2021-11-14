import express from "express"
import { exec } from "child_process"
import path from "path"
import cors from "cors"
const app = express()
const port = 3005

app.use(express.json())

// var corsOptions = {
//     origin: 'http://moodyrahman.com',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//   }
app.use(cors())



app.get('/', (req, res) => {
  res.sendFile("/home/moody/projects/minecraft/pixeldown/index.html")
})

app.get('/start', (req, res) => {
    exec("screen -S mc_server -p 0 -X stuff \"echo hi im moody ^M\"", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            res.send("damn something bad happened lol")
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        res.send("command piped in :)")
    });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
