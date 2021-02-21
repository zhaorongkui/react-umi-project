/*
 * @Descripttion: 
 * @version: 
 * @Author: rkz
 * @Date: 2020-12-20 17:57:56
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-12-21 22:29:07
 */
import React from 'react'

export default function id({ match }) {
    // console.log(match,'888')
    return (
        <div>
            {match.params.setting}
            {match.params.oid}
        </div>
    )
}