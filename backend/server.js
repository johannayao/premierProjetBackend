const http = require ('http')
const app = require ('./app')
app. set('PORT',process.env.PORT || 4000)
const server = http.createServer(app)


server.listen(process.env.process || 4000 , ()=>{
    console.log("server en marche");
})