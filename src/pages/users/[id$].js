/*
 * @Descripttion: 
 * @version: 
 * @Author: rkz
 * @Date: 2020-12-21 22:02:16
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-12-21 22:25:27
 */
import React from 'react'

export default function id({ match }) {
    console.log(match,'888')
    return (
        <div>
            {match.params.id}
           
        </div>
    )
}