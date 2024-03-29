'use client'

import Api from "./Api"
import React, { useState } from 'react';
import {
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Pagination  } from 'antd';
const {  Content,  Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('User', 'sub1', <UserOutlined />, [
  getItem('Tom', '3'),
  getItem('Bill', '4'),
  getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];



function HeaderLayout() {
    const [collapsed, setCollapsed] = useState(false);
    const {
      token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
      <Layout
        style={{
          minHeight: '100vh',
        }}
      >
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div className="demo-logo-vertical" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
        <Layout>
          <Content
            style={{
              margin: '0 16px',
              
            }}
          >
            <div >
              <Api/>
              
            </div>
           
            
          </Content>
          
        </Layout>
      </Layout>
    );
  };

export default HeaderLayout