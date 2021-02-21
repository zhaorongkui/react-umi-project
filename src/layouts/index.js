/*
 * @Descripttion: 
 * @version: 
 * @Author: rkz
 * @Date: 2020-12-26 17:22:52
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-01-13 19:57:55
 */
import { Layout, Menu, Icon, Badge, Dropdown } from "antd";
import { Link } from 'umi';
import styles from "./index.css";
import { connect } from "dva";
import { history } from 'umi';

const { Header, Footer, Content } = Layout;

export default connect(state => ({
    // 连接购物车状态
    count: state.cart.length,
    cart: state.cart
}))(function (props) {
    // const { pathname } = props.location
    // const menus = [
    //     { path: '/', name: '商品' },
    //     { path: '/users', name: '用户' },
    //     { path: '/about', name: '关于' },
    // ];
    // const selectedKeys = menus.filter(menu => {
    //     if (menu.path === '/') {
    //         return pathname === '/'
    //     }
    //     return pathname.startsWith(menu.path)
    // }).map(menu => menu.path)
    // login = () =>{
    //     console.log('退出')
    // }
    const selectedKeys = [props.location.pathname];
    const menu = (
        <Menu>
            {props.cart.map((item, index) => (
                <Menu.Item key={index}>
                    {item.name}×{item.count} <span>￥{item.count * item.price}</span>
                </Menu.Item>
            ))}
        </Menu>
    );
    const userInfo = [{ name: '个人信息', key: 'info' }, { name: '设置', key: 'set' }, { name: '退出', key: 'login' }]
    const userMenu = (
        <Menu>
            {userInfo.map((item, index) => (
                <Menu.Item key={index} onClick={() => login(item)}>
                    {item.name}
                </Menu.Item>
            ))}
        </Menu>
    )

    return (
        // 上中下布局
        <Layout>
            {/* 页头 */}
            <Header className={styles.header}>
                <img
                    className={styles.logo}
                    src="https://img.kaikeba.com/logo-new.png"
                />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    selectedKeys={selectedKeys}
                    style={{ lineHeight: "64px", float: "left" }}
                >
                    <Menu.Item key="/">
                        <Link to="/">商品</Link>
                    </Menu.Item>
                    <Menu.Item key="/users">
                        <Link to="/users">用户</Link>
                    </Menu.Item>
                    <Menu.Item key="/about">
                        <Link to="/about">关于</Link>
                    </Menu.Item>
                </Menu>
                {/* 登录及个人详情 */}

                <Dropdown overlay={userMenu} placement="bottomRight">
                    <div style={{ float: "right" }}>
                        <Icon type="user" style={{ fontSize: 18 }} />
                    </div>
                </Dropdown>
                <Dropdown overlay={menu} placement="bottomRight">
                    <div style={{ float: "right" }}>
                        <Icon type="shopping-cart" style={{ fontSize: 18 }} />
                        <span>我的购物车</span>
                        <Badge count={props.count} offset={[-4, -18]} />
                    </div>
                </Dropdown>

            </Header>
            {/* 内容 */}
            <Content className={styles.content}>
                <div className={styles.box}>{props.children}</div>
            </Content>
            {/* 页脚 */}
            <Footer className={styles.footer}>开课吧</Footer>
        </Layout>
    );
});

function login(item) {
    if (item.key === 'login') {
        // 退出，并且清楚缓存的cookie
        history.push('/login')
        localStorage.removeItem('cart');
    } else if (item.key === 'info') {
        // 去个人信息页面
        history.push('/user/userInfo')
    } else if (item.key === 'set') {
        // 去设置页面
        history.push('/user/userSet')
    }


}
