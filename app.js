const reactSsr = require('./dist/src/server/middlewares/react-ssr').default;

const Koa = require('koa2');
const KoaStatic = require('koa-static');
const path = require('path');

const app = new Koa();

// 设置可访问的静态资源，我们把 webpack 打包后的代码放到/dist/static目录下
app.use(KoaStatic(
  path.join(__dirname, '')
))

app.use(reactSsr);

app.listen(9001, () => {
  console.log('server is start .9001');
});
