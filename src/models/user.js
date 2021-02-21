/*
 * @Descripttion: 
 * @version: 
 * @Author: rkz
 * @Date: 2020-12-27 15:37:24
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-12-28 20:12:11
 */
import axios from "axios";
import { history } from "umi";
const userinfo = JSON.parse(localStorage.getItem("userinfo")) || {
    token: "",
    role: "",
    username: "",
    balance: 0
};
// 登录方法请求
function login(payload) {
    return axios.post("/api/login", payload).then(res => {
        return { code: res.data.code, userinfo: res.data.data }
    });
};
export default {
    namespace: 'user',
    state: userinfo,
    effects: {
        *login({ payload }, { call, put }) {
            try {
                // 结构responst,中回来的data,拿到code,data,用以赋值
                const { code, userinfo } = yield call(login, payload)
                if (code === 0) {
                    // 缓存登录信息
                    localStorage.getItem('userinfo', userinfo);
                    // 异步操作，更新state数据，调用reducers中init方法；
                    yield put({ type: 'init', payload: userinfo })
                    history.push('/')
                }
            } catch (e) {
                console.log(e)
            }
        }
    },
    reducers: {
        init(state, action) {
            return action.payload
        }
    }
}