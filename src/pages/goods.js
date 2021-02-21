/*
 * @Descripttion: 
 * @version: 
 * @Author: rkz
 * @Date: 2020-12-24 18:52:43
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-12-24 22:25:38
 */
import React from 'react';
import styles from './goods.css';
import { Button, Card } from "antd";
import { connect } from "dva";
import { useEffect } from "react";

export default connect(
  state => ({
    loading: state.loading, // dva可以通过loading空间，直接获取加载状态
    goodsList: state.goods // 获取指定命名空间的模型状态
  }),
  {
    addGood: title => ({
      type: "goods/addGood",// action的type需要以命名空间为前缀+reducer名称
      // payload: { title }
      title
    }),
    getList: () => ({
      type: "goods/getList"
    })
  }
)(({ goodsList, addGood, getList, loading }) => {
  useEffect(() => {
    getList();
  }, [])
  console.log(loading); //loading是个对象；
  return (
    <div>
      <h1 className={styles.title}>Page goods</h1>
      {/* 商品列表 */}
      <div>
        {/* 加载状态 */}
        {loading.effects['goods/getList'] && <p>loading...</p>}
        {goodsList.map(good => {
          return (
            <Card key={good.title}>
              <div >
                {good.title}
              </div>
            </Card>
          )
        })}
      </div>
      <Button
        onClick={() => addGood('商品' + new Date().getTime())}>
        添加商品
      </Button>
    </div>
  );
})
