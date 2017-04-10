const Koa = require('koa');
const serve = require('koa-static');
const views = require('koa-views');
const webpackDevMiddleware = require('koa-webpack-dev-middleware');
const webpackHotMiddleware = require('koa-webpack-hot-middleware');
const webpack = require('webpack');
const webpackConfig = require('./../webpack.config.js');
const webpackCompiler = webpack(webpackConfig);
const app = new Koa();

app.use(webpackDevMiddleware(webpackCompiler, {lazy: false}));
app.use(webpackHotMiddleware(webpackCompiler));

app.use(views('./client'));

app.use(async function (ctx, next) {
  console.log(ctx.url);
  if (ctx.url === '/')
    await ctx.render('index')
  await next();
});

app.use(serve('.'));

app.listen(8888);