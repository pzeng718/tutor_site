// app/page.tsx
'use client';

import React from 'react';
import { Typography, Row, Col, Card, Button } from 'antd';
import { SmileOutlined, TrophyOutlined, ReadOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

export default function HomePage() {
  return (
    <div style={{ maxWidth: 1200, margin: 'auto', padding: 24 }}>
      <Title level={2} style={{ textAlign: 'center' }}>欢迎来到我们的辅导机构</Title>
      <Paragraph style={{ fontSize: 16, textAlign: 'center' }}>
        我们是一家专业的教育辅导机构，致力于为学生提供高质量的数学、英语和科学课程辅导。我们的团队由经验丰富的老师组成，帮助学生在竞赛、标准化考试和日常课程中取得优异成绩。
      </Paragraph>

      {/* 服务概览 */}
      <Title level={3}>我们的服务</Title>
      <Row gutter={[16, 16]}>  
        <Col span={8}>
          <Card hoverable title="数学竞赛辅导">
            为有志于参加数学竞赛的学生提供专项训练，提升解题技巧与速度。
          </Card>
        </Col>
        <Col span={8}>
          <Card hoverable title="英语阅读与写作">
            针对阅读理解和写作表达，提供定制化课程，提升语言运用能力。
          </Card>
        </Col>
        <Col span={8}>
          <Card hoverable title="科学课程辅导">
            从基础概念到实验实践，为学生打造扎实的科学学习体系。
          </Card>
        </Col>
      </Row>

      {/* 为什么选择我们 */}
      <Title level={3} style={{ marginTop: 20 }}>为什么选择我们</Title>
      <Paragraph>
        <SmileOutlined /> 专业师资：我们的老师均具有丰富教学经验与竞赛背景。<br />
        <TrophyOutlined /> 个性化方案：针对不同学生需求制定专属学习计划。<br />
        <ReadOutlined /> 系统体系：覆盖竞赛、标化考试及课程辅导的全方位服务。
      </Paragraph>

      <div style={{ textAlign: 'center', marginTop: 24 }}>
        <Button type="primary" size="large">立即咨询</Button>
      </div>
    </div>
  );
}
