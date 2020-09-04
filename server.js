const express = require('express')
const http = require('http')
const path = require('path')

const app = express();
const port = process.env.PORT || 8080
app.use(express.static(__dirname+"/dist/printmanagementsystem"));

app.get("/*",(req,res) => res.sendFile(path.join(__dirname)));

try{
const server = http.createServer(app);

server.listen(port,()=>console.log("Running.."+http.port));

}
catch(ex)
{
    print(ex.message)
}