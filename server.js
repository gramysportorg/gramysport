const Koa = require('koa');
const fs = require('fs');
const app = new Koa();
var views = require('koa-views');

const serve = require('koa-static')

const webpackMiddleware = require("koa-webpack-dev-middleware");
const webpack = require('webpack');
const devConfig = require('./webpack.config.js');

app.use(views(__dirname + '/client'));

app.use(async function (ctx, next) {
  console.log(ctx.url);
  if (ctx.url === '/')
    await ctx.render('index.html')
  await next();
})

// const serve = require('koa-static');
app.use(serve('.'));

// app.use(webpackMiddleware(webpack(devConfig)));
// app.use(ctx => {
//   ctx.body = fs.readFileSync('./client/index.html');
// });

app.listen(8888);