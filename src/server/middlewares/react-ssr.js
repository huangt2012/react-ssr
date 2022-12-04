// /src/server/middlewares/react-ssr.js

//完成 react ssr 工作的中间件
//引入Index 组件
import React from 'react';
import { renderToString } from 'react-dom/server';

import { StaticRouter } from 'react-router';
import routeList from '../../client/router/config';
import matchRoute from '../../share/match-route';
import { Helmet } from 'react-helmet'

import App from '../../client/router/index';

export default  async (ctx,next)=>{

    const path = ctx.request.path;

    // if(path.indexOf('.')>-1){
    //     ctx.body=null;
    //     return next();
    // }

    console.log('ctx.request.path.', ctx.request.path);

    //查找到的目标路由对象
    let matchResult = matchRoute(path,routeList);
    let { targetRoute }= matchResult;

    //得到数据
    let fetchDataFn = targetRoute?.component?.getInitialProps;
    let fetchResult = {};
    if(fetchDataFn){
        fetchResult = await fetchDataFn();
    }

    //将预取数据在这里传递过去 组内通过props.staticContext获取
    const context = {
        initialData: fetchResult
    };
  
    const helmet = Helmet.renderStatic();


    const html = renderToString(<StaticRouter location={path} context={context}>
        <App routeList={routeList}></App>
    </StaticRouter>);

    ctx.body=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
</head>
<body>
    <div id="root">
       ${html}
    </div>
    <textarea id="ssrTextInitData" style="display:none;">
    ${JSON.stringify(fetchResult)}
    </textarea>
</body>
</html><script type="text/javascript"  src="./dist/static/index.js"></script>`;

    await next();
}