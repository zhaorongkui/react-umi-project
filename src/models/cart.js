/*
 * @Descripttion: 
 * @version: 
 * @Author: rkz
 * @Date: 2021-01-03 13:28:03
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-01-03 13:30:47
 */
export default {
    namespace: "cart",
    state: JSON.parse(localStorage.getItem("cart")) || [],
    reducers: {
      addCart(cart, action) {
        const good = action.payload;
        const idx = cart.findIndex(v => v.id == good.id);
        const cartCopy = [...cart];
  
        if (idx > -1) {
          // 更新数量
          const itemCopy = { ...cartCopy[idx] };
          itemCopy.count += 1;
          cartCopy.splice(idx, 1, itemCopy);
        } else {
          // 新增
          cartCopy.push({ ...good, count: 1 });
        }
        localStorage.setItem("cart", JSON.stringify(cartCopy));
        return cartCopy;
      }
    },
    effects: {}
  };