/*
 * @Descripttion: 
 * @version: 
 * @Author: rkz
 * @Date: 2020-12-22 20:33:16
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-12-22 20:47:20
 */
import { Redirect } from 'umi'

export default (props) => {
    if (Math.random() > 0.5) {
        return <Redirect to='./login'></Redirect>
    }
    return (
        <div>
            <div>PrivateRoute(routes/PrivateRoute.js)</div>
            {props.children}
        </div>
    )
}