// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'D:/workspace/works/react-umi-project/node_modules/_@umijs_runtime@3.3.7@@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/login",
    "component": require('D:/workspace/works/react-umi-project/src/pages/login').default,
    "exact": true
  },
  {
    "path": "/",
    "component": require('D:/workspace/works/react-umi-project/src/layouts').default,
    "routes": [
      {
        "path": "/",
        "component": require('D:/workspace/works/react-umi-project/src/pages/goods/index').default,
        "exact": true
      },
      {
        "path": "/user",
        "component": require('D:/workspace/works/react-umi-project/src/pages/user').default,
        "exact": true
      },
      {
        "path": "/user/userInfo",
        "component": require('D:/workspace/works/react-umi-project/src/pages/user/userInfo').default,
        "exact": true
      },
      {
        "path": "/user/userSet",
        "component": require('D:/workspace/works/react-umi-project/src/pages/user/userSet').default,
        "exact": true
      },
      {
        "path": "/goods",
        "component": require('D:/workspace/works/react-umi-project/src/pages/goods').default,
        "exact": true
      },
      {
        "path": "/about",
        "component": require('D:/workspace/works/react-umi-project/src/pages/about').default,
        "Routes": [
          "./routes/PrivateRoute.js"
        ],
        "exact": true
      },
      {
        "path": "/users",
        "component": require('D:/workspace/works/react-umi-project/src/pages/users').default,
        "routes": [
          {
            "path": "/users/:id",
            "component": require('D:/workspace/works/react-umi-project/src/pages/users/[id$]').default,
            "exact": true
          },
          {
            "path": "/users/:oid/:setting",
            "component": require('D:/workspace/works/react-umi-project/src/pages/users/[oid$]/[setting$]').default,
            "exact": true
          },
          {
            "component": require('D:/workspace/works/react-umi-project/src/pages/404').default,
            "exact": true
          }
        ]
      },
      {
        "component": require('D:/workspace/works/react-umi-project/src/pages/404').default,
        "exact": true
      }
    ]
  },
  {
    "component": require('D:/workspace/works/react-umi-project/src/pages/404').default,
    "exact": true
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
