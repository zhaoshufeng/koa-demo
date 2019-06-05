const Koa=require('koa');
const KoaRouter=require('koa-router');
const render=require('koa-ejs');
const path=require('path');
const app=new Koa();
const router=new KoaRouter();


//模板引擎配置

render(app,{
    root:path.join(__dirname,'views'),
    layout:'layout',
    viewExt:'html',
    cache:false,
    debug:false
})

//路由配置
app.use(router.routes())
.use(router.allowedMethods());

router.get('/',async ctx => {
    await ctx.render('index',{
        title:'hello ejs... !'
    })
})

app.listen(3000,() =>{
    console.log('server running at http://localhost:3000');
})