const Koa=require('koa');
const KoaRouter=require('koa-router');
const bodyParser=require('koa-bodyparser');
const render=require('koa-ejs');
const path=require('path');
const app=new Koa();
const router=new KoaRouter();

app.context.user='阿加西'

//解析请求数据
app.use(bodyParser());

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

const lists=[{txt:'apple'},{txt:'banana'},{txt:'pear'}];

//路由跳转
async function index(ctx){
    await ctx.render('index',{
        title:'导航+添加路由',
        lists:lists
    })
}
router.get('/',index)

async function toAdd(ctx){
    await ctx.render('toAdd',{
        title:'追加数组lists',
        id:ctx.params.id
    })
}
router.get('/toAdd/:id',toAdd)

router.post('/submitAdd',async (ctx) => {
    const params=ctx.request.body;
    console.log(ctx.user);
    lists.push(ctx.request.body);
    ctx.redirect('/');
})

app.listen(3000,() =>{
    console.log('server running at http://localhost:3000');
})