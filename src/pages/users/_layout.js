/*
 * @Descripttion: 
 * @version: 
 * @Author: rkz
 * @Date: 2020-12-21 20:19:16
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-12-21 22:06:22
 */
import React from 'react';
import styles from './_layout.css';

export default (props) => {
  // console.log(props)
  return (
    <div className={styles.title}>
      <h1 >Page ./users/_layout</h1>
      <div>{props.children}</div>
      {/* <div>{props}</div> */}
    </div>
  );
}
