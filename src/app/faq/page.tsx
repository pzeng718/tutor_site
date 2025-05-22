'use client';

import React from 'react';
import { Typography, Collapse } from 'antd';

const { Title, Paragraph } = Typography;
const { Panel } = Collapse;

const faqData = [
  {
    key: '1',
    question: '如何报名参加课程？',
    answer: `点击页面顶部的“立即咨询”按钮，填写您的基本信息和课程需求，
    我们的招生老师会在24小时内与您联系，确认班级及缴费方式。`,
  },
  {
    key: '2',
    question: '一对一和小班课程有何区别？',
    answer: `小班课程（最多5人）价格更实惠，互动式教学氛围好；  
    一对一课程可根据学生个人薄弱环节灵活定制，进度更加个性化。`,
  },
  {
    key: '3',
    question: '取消或变更课程如何处理？',
    answer: `课程开始前48小时内可全额退款或免费改期；  
    开课后如需退费，按剩余课时比例退款，扣除10%手续费。`,
  },
  {
    key: '4',
    question: '如何获得授课老师的资质证明？',
    answer: `本站所有老师均持有本科及以上学历，且具备多年教学或竞赛背景；  
    如需查看具体老师简历和证书，请在咨询时提出，我们将邮件发送给您。`,
  },
  {
    key: '5',
    question: '课程在哪儿上？有线上和线下选项吗？',
    answer: `目前我们提供线上实时直播授课，学生可在家通过 Zoom 或腾讯会议参与；  
    部分城市会不定期开展线下集训，详情请咨询客服。`,
  },
];

export default function FAQPage() {
  return (
    <div style={{ width: '90%', maxWidth: 800, margin: 'auto', padding: '2rem 0' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        常见问题解答
      </Title>

      <Collapse
        accordion
        bordered={false}
        expandIconPosition="end"
        style={{ background: 'transparent' }}
      >
        {faqData.map(({ key, question, answer }) => (
          <Panel
            header={<span style={{ fontSize: '1.1rem' }}>{question}</span>}
            key={key}
          >
            <Paragraph style={{ margin: 0, lineHeight: 1.6 }}>{answer}</Paragraph>
          </Panel>
        ))}
      </Collapse>
    </div>
  );
}
