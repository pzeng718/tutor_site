'use client';

import React from 'react';
import { Typography, Card } from 'antd';

const { Title, Paragraph } = Typography;

export default function ContactPage() {
  return (
    <div style={{ maxWidth: 800, margin: 'auto', padding: 24 }}>
      <Title level={2}>联系我们</Title>
      <Card style={{ marginBottom: 24, textAlign: 'center' }}>
        {/* 微信二维码占位 */}
        <div style={{ height: 200, background: '#f0f0f0', margin: 'auto', width: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span>二维码占位</span>
        </div>
      </Card>
      <Paragraph>
        <strong>电话：</strong>+1 (617) 449-8158 (同微信)
      </Paragraph>
      <Paragraph>
        <strong>邮箱：</strong>info@tutoragency.com
      </Paragraph>
    </div>
  );
}