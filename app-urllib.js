const urllib=require('urllib');

urllib.request('http://cnodejs.org/',(err,data,res) => {
    if(err){
        console.log(err);
    }
    console.log(res.data.toString);
})