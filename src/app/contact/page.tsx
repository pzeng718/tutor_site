'use client'

import React from 'react';
import { Typography, Card } from 'antd';

export default function ContactPage() {
  return (
    <div style={{ maxWidth: 800, margin: 'auto', padding: 24 }}>
      <Typography.Title level={2}>联系我们</Typography.Title>
      <Card style={{ marginBottom: 24, textAlign: 'center' }}>
        {/* 限制二维码最大尺寸 */}
        <div style={{ maxWidth: 300, margin: 'auto' }}>
          <img
            src="/assets/qrcode.jpg"
            alt="微信二维码"
            style={{ display: 'block', width: '100%', height: 'auto', objectFit: 'contain' }}
          />
        </div>
      </Card>
      <Typography.Paragraph>
        <strong>电话：</strong>+1 (917) 332-6513 (同微信)
      </Typography.Paragraph>
      <Typography.Paragraph>
        <strong>邮箱：</strong>contact4sparked@gmail.com
      </Typography.Paragraph>
    </div>
  );
}