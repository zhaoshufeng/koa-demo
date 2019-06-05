const Koa=require('koa');
const KoaRouter=require('koa-router');
const render=require('koa-ejs');
const path=require('path');
const mongoose=require('mongoose');
const app=new Koa();
const router=new KoaRouter();

//连接数据库
// mongoose
// .connect('mongodb://<tree66>:<tree123>@ds157544.mlab.com:57544/tree',{
//     useNewUrlParser:true
// })
// .then(() => {
//     console.log('数据库连接成功！');
// })
// .catch(err => {
//     console.log(err);
// })

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

const lists=['apple','banana','pear'];
router.get('/',async ctx => {
    await ctx.render('index',{
        title:'hello ejs... !',
        lists:lists
    })
})

app.listen(5000,() =>{
    console.log('server running at http://localhost:3000');
})