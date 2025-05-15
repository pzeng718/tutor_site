'use client';

import React from 'react';
import { Typography, Card, Row, Col } from 'antd';

const { Title, Paragraph } = Typography;

export default function MathCompetitionPage() {
  return (
    <div style={{ maxWidth: 1000, margin: 'auto', padding: 24 }}>
      <Title level={2} style={{ textAlign: 'center' }}>数学竞赛辅导 - AMC 系列</Title>
      <Paragraph style={{ fontSize: 16, textAlign: 'center', marginBottom: 32 }}>
        我们提供全面的 AMC 8、AMC 10 和 AMC 12 辅导，帮助学生在各级竞赛中脱颖而出。
      </Paragraph>
      <Row gutter={[24, 24]}>
        <Col span={8}>
          <Card title="AMC 8" bordered hoverable>
            <Paragraph>
              适合 8 年级及以下学生，覆盖基础代数、几何与数论。通过强化练习和真题解析，打牢数学竞赛基础。
            </Paragraph>
            <Paragraph>
              <strong>课程时长：</strong>10 周，每周 2 小时<br />
              <strong>小班人数：</strong>不超过 5 人
            </Paragraph>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="AMC 10" bordered hoverable>
            <Paragraph>
              面向 10 年级及以下学生，内容包含更高阶的代数、几何、组合与概率。通过系统讲解和模拟考试，提高解题能力。
            </Paragraph>
            <Paragraph>
              <strong>课程时长：</strong>12 周，每周 2 小时<br />
              <strong>小班人数：</strong>不超过 5 人
            </Paragraph>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="AMC 12" bordered hoverable>
            <Paragraph>
              针对 12 年级及以下学生，深入讲解高级代数、几何、组合与微积分预备知识。结合真题分析和技巧指导，助力高分。
            </Paragraph>
            <Paragraph>
              <strong>课程时长：</strong>14 周，每周 2 小时<br />
              <strong>小班人数：</strong>不超过 5 人
            </Paragraph>
          </Card>
        </Col>
      </Row>
    </div>
  );
}