import React from 'react';
import { Spin } from 'antd';
import './index.less';

const Loading = () => (
  <div className="loading-wrapper">
    <Spin size="large" />
  </div>
);

export default Loading;
