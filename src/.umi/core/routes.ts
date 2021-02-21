// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'D:/workspace/works/umi-test/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/login",
    "component": require('D:/workspace/works/umi-test/src/pages/login').default,
    "exact": true
  },
  {
    "path": "/",
    "component": require('D:/workspace/works/umi-test/src/layouts').default,
    "routes": [
      {
        "path": "/",
        "component": require('D:/workspace/works/umi-test/src/pages/goods/index').default,
        "exact": true
      },
      {
        "path": "/user",
        "component": require('D:/workspace/works/umi-test/src/pages/user').default,
        "exact": true
      },
      {
        "path": "/user/userInfo",
        "component": require('D:/workspace/works/umi-test/src/pages/user/userInfo').default,
        "exact": true
      },
      {
        "path": "/user/userSet",
        "component": require('D:/workspace/works/umi-test/src/pages/user/userSet').default,
        "exact": true
      },
      {
        "path": "/goods",
        "component": require('D:/workspace/works/umi-test/src/pages/goods').default,
        "exact": true
      },
      {
        "path": "/about",
        "component": require('D:/workspace/works/umi-test/src/pages/about').default,
        "Routes": [
          "./routes/PrivateRoute.js"
        ],
        "exact": true
      },
      {
        "path": "/users",
        "component": require('D:/workspace/works/umi-test/src/pages/users').default,
        "routes": [
          {
            "path": "/users/:id",
            "component": require('D:/workspace/works/umi-test/src/pages/users/[id$]').default,
            "exact": true
          },
          {
            "path": "/users/:oid/:setting",
            "component": require('D:/workspace/works/umi-test/src/pages/users/[oid$]/[setting$]').default,
            "exact": true
          },
          {
            "component": require('D:/workspace/works/umi-test/src/pages/404').default,
            "exact": true
          }
        ]
      },
      {
        "component": require('D:/workspace/works/umi-test/src/pages/404').default,
        "exact": true
      }
    ]
  },
  {
    "component": require('D:/workspace/works/umi-test/src/pages/404').default,
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
