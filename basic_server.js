var http = require("http");

var server = http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type": "text/plain"});
    res.write("hello,chuong trinh chay server ");
    res.end();
});
server.listen(3000,function(){
    console.log("sever ")
})