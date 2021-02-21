// @ts-nocheck
import { Component } from 'react';
import { ApplyPluginsType } from 'umi';
import dva from 'dva';
// @ts-ignore
import createLoading from 'D:/workspace/works/umi-test/node_modules/_dva-loading@3.0.22@dva-loading/dist/index.esm.js';
import { plugin, history } from '../core/umiExports';
import ModelCart0 from 'D:/workspace/works/umi-test/src/models/cart.js';
import ModelGoods1 from 'D:/workspace/works/umi-test/src/models/goods.js';
import ModelUser2 from 'D:/workspace/works/umi-test/src/models/user.js';
import ModelGoodsList3 from 'D:/workspace/works/umi-test/src/pages/goods/models/goodsList.js';

let app:any = null;

export function _onCreate(options = {}) {
  const runtimeDva = plugin.applyPlugins({
    key: 'dva',
    type: ApplyPluginsType.modify,
    initialValue: {},
  });
  app = dva({
    history,
    
    ...(runtimeDva.config || {}),
    // @ts-ignore
    ...(typeof window !== 'undefined' && window.g_useSSR ? { initialState: window.g_initialProps } : {}),
    ...(options || {}),
  });
  
  app.use(createLoading());
  
  (runtimeDva.plugins || []).forEach((plugin:any) => {
    app.use(plugin);
  });
  app.model({ namespace: 'cart', ...ModelCart0 });
app.model({ namespace: 'goods', ...ModelGoods1 });
app.model({ namespace: 'user', ...ModelUser2 });
app.model({ namespace: 'goodsList', ...ModelGoodsList3 });
  return app;
}

export function getApp() {
  return app;
}

export class _DvaContainer extends Component {
  constructor(props: any) {
    super(props);
    // run only in client, avoid override server _onCreate()
    if (typeof window !== 'undefined') {
      _onCreate();
    }
  }

  componentWillUnmount() {
    let app = getApp();
    app._models.forEach((model:any) => {
      app.unmodel(model.namespace);
    });
    app._models = [];
    try {
      // 释放 app，for gc
      // immer 场景 app 是 read-only 的，这里 try catch 一下
      app = null;
    } catch(e) {
      console.error(e);
    }
  }

  render() {
    const app = getApp();
    app.router(() => this.props.children);
    return app.start()();
  }
}
