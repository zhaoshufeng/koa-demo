let p=new Promise((resolve,reject) => {
    console.log(1);
    setTimeout(() => {
        let name="张三";
        resolve(name);
        console.log(3);
    },1000)
    console.log(2);
})
p.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log(err);
})