/*
 * @Descripttion: 
 * @version: 
 * @Author: rkz
 * @Date: 2020-12-20 17:01:08
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-12-21 21:59:36
 */
import React from 'react';
import styles from './index.css';
import { Link } from 'umi';
import { history } from 'umi';

export default () => {
  const users = [{ id: 1, name: 'tome' }, { id: 2, name: 'jerry' }]
  return (
    <div>
      <h1 className={styles.title}>Page indexs</h1>
      <ul>
        {users.map(u => (
          //声明式
          <li key={u.id} >
            <Link to={`/users/${u.id}`}>{u.name}</Link>
          </li>
          // <li key={u.id} onClick={() => history.push(`/users/${u.id}`)}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}
