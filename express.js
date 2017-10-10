var express=require('express');
var app=express();
var fs=require('fs');
var path=require('path');
app.use('/myStyle',express.static(__dirname +'./static/style.css'));
app.get('/hello',function(req,res){
    res.send("hello Lwam gumam");
});
// app.get('/getForm',function(req,res){
//  res.sendFile('index.html',{root:path.join(__dirname,'./static')});
// });

app.get(/^(.+)$/,function(req,res){
try{
    if(fs.statSync(path.join(__dirname,'./static/',req.params[0]+'.html')).isFile())
    res.sendFile(req.params[0]+'.html',{root:path.join(__dirname,'./static')});
}

catch(err){

 res.sendFile('404.html',{root:path.join(__dirname,'./static')});
}
});


app.listen(7071,function(){
    console.log("Guys its Working!");
})

