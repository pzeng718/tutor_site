'use client';

import 'antd/dist/reset.css';
import React from 'react';
import { Layout as AntLayout } from 'antd';
import Navbar from './components/navbar';

const { Header, Content, Footer } = AntLayout;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh">
      <head>
        <title>辅导机构首页</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <AntLayout style={{ minHeight: '100vh' }}>
          <Header style={{ padding: 0, background: '#fff' }}>
            <Navbar />
          </Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff' }}>{children}</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>©2025 Tutor Agency</Footer>
        </AntLayout>
      </body>
    </html>
  );
}
