'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Typography, Row, Col, Card, Button } from 'antd';
import { SmileOutlined, TrophyOutlined, ReadOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

export default function HomePage() {
  const router = useRouter();
  const onContactClick = () => {
    router.push('/contact');
  }
  return (
    <div className="container">
      {/* Hero */}
      <section className="hero">
        <Title level={1}>学习不再孤单——欢迎来到你的专属教学网络！</Title>
        <Paragraph>
          我们不是传统的辅导机构，而是一群热忱且富有经验的老师自发组建的教学网络。每位老师通过自己的渠道，将优质课程精准对接给学生和合作伙伴，既保证了高水准的教学，也保留了灵活自由的授课方式。
        </Paragraph>
      </section>

      {/* Services */}
      <Title level={2} style={{ textAlign: 'center', marginBottom: '1rem' }}>
        我们的服务
      </Title>
      <div className="services">
        {[
          {
            icon: <SmileOutlined style={{ color: 'var(--primary)' }} />,
            title: '数学竞赛辅导',
            desc: '为有志于参加数学竞赛的学生提供专项训练，提升解题技巧与速度。',
          },
          {
            icon: <ReadOutlined style={{ color: 'var(--warning)' }} />,
            title: '英语阅读与写作',
            desc: '针对阅读理解和写作表达，提供定制化课程，提升语言运用能力。',
          },
          {
            icon: <TrophyOutlined style={{ color: 'var(--success)' }} />,
            title: '科学课程辅导',
            desc: '从基础概念到实验实践，为学生打造扎实的科学学习体系。',
          },
        ].map((svc, i) => (
          <div key={i} className="service-card">
            <div className="icon">{svc.icon}</div>
            <h4>{svc.title}</h4>
            <p>{svc.desc}</p>
          </div>
        ))}
      </div>

      {/* Why Choose Us */}
      <section className="why-choose">
        <Title level={2}>为什么选择我们</Title>
        <ul>
          <li>
            <SmileOutlined className="icon" /> 专业师资：我们的老师均具有丰富教学经验与竞赛背景。
          </li>
          <li>
            <TrophyOutlined className="icon" /> 个性化方案：针对不同学生需求制定专属学习计划。
          </li>
          <li>
            <ReadOutlined className="icon" /> 系统体系：覆盖竞赛、标化考试及课程辅导的全方位服务。
          </li>
        </ul>
      </section>

      {/* Call to Action */}
      <div className="cta">
        <Button type="primary" size="large" onClick={onContactClick}>
          立即咨询
        </Button>
      </div>
    </div>
  );
}
