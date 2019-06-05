const Koa=require('koa');
const KoaRouter=require('koa-router');
const app=new Koa();
const router=new KoaRouter();

//路由配置
app.use(router.routes())
.use(router.allowedMethods());

router.get('/test',ctx => {
    ctx.body='hello router !'
})

app.listen(3000,() =>{
    console.log('server running at http://localhost:3000');
})