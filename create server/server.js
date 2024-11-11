import http from 'http'

let server=http.createServer((request,response)=>{
    if(request.url='/home'){
        response.end('<h1>Home for: <br> ID: 22-47185-1</h1>')
    }
})


server.listen(47185,()=>{
    console.log('server not failed');
    
})
