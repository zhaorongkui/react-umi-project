/*
 * @Descripttion: 
 * @version: 
 * @Author: rkz
 * @Date: 2020-12-28 20:21:41
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-12-28 20:40:19
 */
import axios from 'axios';
import { notification } from 'antd';
const codeMessage = {
    202: '一个请求已经进入后台排队（异步任务）',
    401: '用户没有权限，（令牌、用户名、密码错误）',
    404: '发出的请求，针对的不是存在记录，服务器没有进行操作',
    500: '服务器发生错我，请检查服务器'
}

// 仅拦击异常状态响应
axios.interceptors.response.use(null, ({ response }) => {
    if (codeMessage[response.status]) {
        notification.error({
            message: `请求错误 ${response.status}:${response.config.url}`,
            description: codeMessage[response.status],
            placement: "topLeft" 
        });
    }
    return Promise.reject(err)
})