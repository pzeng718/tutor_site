// app/math/standardized/page.tsx
'use client';

import React from 'react';
import { Typography, Card, Row, Col } from 'antd';

const { Title, Paragraph } = Typography;

export default function MathStandardizedPage() {
  return (
    <div style={{ maxWidth: 1000, margin: 'auto', padding: 24 }}>
      <Title level={2} style={{ textAlign: 'center' }}>标准化考试数学辅导</Title>
      <Paragraph style={{ fontSize: 16, textAlign: 'center', marginBottom: 32 }}>
        专注于 SAT 和 ACT 考试的数学部分，提供代数、几何、数据分析等核心知识点的专项提升课程。
      </Paragraph>
      <Row gutter={[24, 24]}>
        <Col span={12}>
          <Card title="SAT 数学" bordered hoverable>
            <Paragraph>
              针对 SAT 数学部分，涵盖代数、函数、几何与数据分析题型，强化解题思维和技巧，提升考试成绩。
            </Paragraph>
            <Paragraph>
              <strong>课程时长：</strong>12 周，每周 3 小时<br />
              <strong>小班人数：</strong>不超过 6 人
            </Paragraph>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="ACT 数学" bordered hoverable>
            <Paragraph>
              专注于 ACT 数学考试，内容包括预代数、代数 I/II、几何与三角；通过习题演练和时间管理训练，提升应试效率。
            </Paragraph>
            <Paragraph>
              <strong>课程时长：</strong>10 周，每周 3 小时<br />
              <strong>小班人数：</strong>不超过 6 人
            </Paragraph>
          </Card>
        </Col>
      </Row>
    </div>
  );
}