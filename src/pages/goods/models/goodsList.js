
/*
 * @Descripttion: 
 * @version: 
 * @Author: rkz
 * @Date: 2020-12-28 20:52:06
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-01-11 19:03:26
 */

// 首先安装axios
import axios from 'axios';
// api
function getGoods() {
    return axios.get('/api/goods').then(({ data }) => {
        // console.log(data)
        return {
            courses: data.courseData.data,
            tags: data.courseData.tags,
        }
    })
}
export default {
    namespace: 'goodsList', // model的命名空间，区分多个model
    // state: [{ title: 'web全栈' }, { title: 'java架构师' }],
    state: {
        courses: {},
        tags: []
    },
    //异步操作
    effects: {
        *getList(action, { call, put }) {
            const payload = yield call(getGoods);
            // console.log(payload)
            yield put({ type: "initGoods", payload })
        }
    },
    // 更新状态 
    reducers: {
        initGoods(state, { payload }) {
            // return [...state, { title: action.title }]
            // console.log(payload)
            return payload;
        }
    }
}