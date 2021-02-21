/*
 * @Descripttion: 
 * @version: 
 * @Author: rkz
 * @Date: 2020-12-24 19:28:03
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-12-30 21:56:07
 */
// 课程列表
const data = [{name:'111',age:'110'},{name:'222',age:'220'}]


export default {
    // "method url":Object 或 Array
    "get /api/test" : { result: data },
    // "method url" : (req,)
    // "get /api/test": function (req, res) {
    //     setTimeout(() => {
    //         res.json();
    //     }, 1250)
    // }
}