/*
 * @Descripttion: 
 * @version: 
 * @Author: rkz
 * @Date: 2020-12-24 18:47:10
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-12-24 20:03:25
 */
// 首先安装axios
import axios from 'axios';
// api
function getGoods() {
    return axios.get('/api/goods')
}
export default {
    namespace: 'goods', // model的命名空间，区分多个model
    // state: [{ title: 'web全栈' }, { title: 'java架构师' }],
    state: [],
    //异步操作
    effects: {
        *getList(action, { call, put }) {
            const res = yield call(getGoods);
            yield put({ type: "initGoods", payload: res.data.result })
        }
    },
    // 更新状态 
    reducers: {
        addGood(state, action) {
            console.log(action)
            return [...state, { title: action.title }]
        },
        initGoods(state, action) {
            // return [...state, { title: action.title }]
            return action.payload;
        }
    }
}