// app/math/[page]/page.tsx
'use client';

import React from 'react';
import { useParams, notFound } from 'next/navigation';
import { Typography, Card, Row, Col } from 'antd';
import rawData from '../../../../data/mathPages.json';

type Course = {
  key: string;
  title: string;
  desc: string;
  groupDuration: string;
  groupPrice: number;
  oneOnOnePrice: number;
  oneOnOneDuration: string;
  hasGroup: boolean;
};
type PageData = {
  title: string;
  description: string;
  courses: Course[];
};

const { Title, Paragraph } = Typography;

// cast the imported JSON to a typed record
const data = rawData as Record<string, PageData>;

export default function MathPage() {
  const params = useParams();
  const pageParam =
    typeof params.page === 'string'
      ? params.page
      : Array.isArray(params.page)
      ? params.page[0]
      : undefined;

  if (!pageParam || !data[pageParam]) {
    return notFound();
  }

  const pageData = data[pageParam];

  return (
    <div style={{ width: '90%', maxWidth: 1000, margin: 'auto', padding: 24 }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: 24 }}>
        {pageData.title}
      </Title>
      <Paragraph style={{ fontSize: 16, textAlign: 'center', marginBottom: 32 }}>
        {pageData.description}
      </Paragraph>

      {/* Center the cards */}
      <Row gutter={[24, 24]} justify="center">
        {pageData.courses.map((svc) => (
          <Col key={svc.key} xs={24} sm={12} md={8}>
            <Card title={svc.title} bordered hoverable>
              <Paragraph>{svc.desc}</Paragraph>
              <Paragraph>
              {svc.hasGroup && (
                <>
                  <strong>小班频率和时长：</strong>
                  {svc.groupDuration}
                  <br />
                  <strong>小班价格：</strong>${svc.groupPrice}
                  <br />
                </>
              )}
              <strong>一对一频率和时长：</strong>
              {svc.oneOnOneDuration}
              <br />
              <strong>一对一价格：</strong>${svc.oneOnOnePrice}
            </Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
