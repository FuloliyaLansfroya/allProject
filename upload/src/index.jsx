import React from 'react';
import ReactDOM from 'react-dom';
import "antd/dist/antd.css";
import './index.css';
import { Row, Col, Divider } from 'antd';
import App from './App';


import { Layout } from 'antd';

const { Header, Content } = Layout;

ReactDOM.render(
  <Layout className="layout">
    <Header>
      <div className="logo">员工订单分配系统</div>
    </Header>
    <Content style={{ padding: '0 50px' }}>

      <div className="site-layout-content">
        <Row>
          <Col span={12} offset={9} style={{fontSize: 20}}>
            员工订单分配系统
          </Col>
        </Row>
        <Divider />
        <Row>
          <Col span={16} offset={6}>
            <App />
          </Col>
        </Row>
      </div>
    </Content>
  </Layout>,
  document.getElementById('root')
);

