const Koa=require('koa');
const Router=require('koa-router')
const lists=require('./mock.js')
const app=new Koa();
const router=new Router();
router.post('/api',(ctx,next) => {
    ctx.body=lists
})

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000,() =>{
    console.log('server running at http://localhost:3000');
})