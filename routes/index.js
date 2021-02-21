/*
 * @Descripttion: 
 * @version: 
 * @Author: rkz
 * @Date: 2020-12-22 20:05:36
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-01-13 20:00:10
 */
const routes = [
    {
        path: "/login",
        component: './login'
    },
    {
        path: "/",
        component: '../layouts',
        routes: [
            // {
            //     path: "/",
            //     component: './index'
            // },
            { path: "/", component: "./goods/index" },
            // 用户列表
            {
                path: "/user",
                component: './user'
            },
            // 用户信息
            {
                path: "/user/userInfo",
                component: './user/userInfo',
            },
            // 用户设置
            {
                path: "/user/userSet",
                component: './user/userSet',
            },
            // 商品列表
            {
                path: "/goods",
                component: './goods'
            },
            // 关于
            {
                path: "/about",
                component: './about',
                Routes: ["./routes/PrivateRoute.js"]
            },
            {
                path: "/users",
                component: './users',
                routes: [
                    {
                        path: "/users/:id",
                        component: './users/[id$]',
                    },
                    {
                        path: "/users/:oid/:setting",
                        component: './users/[oid$]/[setting$]',
                    },
                    { component: './404' }
                ]
            },
            { component: './404' }
        ]
    },
    { component: './404' }
];
export default routes;