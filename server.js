import express from "express"
import { exec } from "child_process"

const app = express()
const port = 3005

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/start', (req, res) => {
    console.log(req.body)
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
