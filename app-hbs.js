const Koa=require('koa');
const KoaRouter=require('koa-router');
const views=require('koa-views');
const path=require('path');
const app=new Koa();
const router=new KoaRouter();


//hbs模板引擎配置
app.use(views(path.join(__dirname,'./views'),{
    map: {hbs: 'handlebars'},
    extension:'hbs'
}))


//路由配置
app.use(router.routes())
.use(router.allowedMethods());

router.get('/',async ctx => {
    await ctx.render('home',{
        content:'author:tree'
    })
})

app.listen(3000,() =>{
    console.log('server running at http://localhost:3000');
})