const fs=require('fs')
const http=require('http')
const server=http.createServer(function(req,res){
    if(req.url=='/'){
        fs.writeFile('demo.txt','hello world',function(error){
            if(error){
                res.writeHead(200,{'Content-type':'text/html'})
                res.write('file write fail')
                res.end('this is home page')
                
            }else if(req.url=='/about'){
                    res.end('this is about page')
            }else if(req.url=='/contact'){
                res.end('this is contact page')

            }
            else{
                res.writeHead(200,{'Content-type':'text/html'})
                res.write('file write success')
                res.end()
            }
        })
    }
})
server.listen(3000)
console.log('run success')