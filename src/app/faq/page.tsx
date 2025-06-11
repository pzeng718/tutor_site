'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Typography, Collapse, Button } from 'antd';

const { Title, Paragraph } = Typography;
const { Panel } = Collapse;

const faqData = [
  {
    key: '1',
    question: '如何报名参加课程？',
    answer: `点击页面顶部的“立即咨询”按钮，添加客服咨询详细信息`,
  },
  {
    key: '2',
    question: '一对一和小班课程有何区别？',
    answer: `小班课程（最多5人）价格更实惠，互动式教学氛围好；  
    一对一课程可根据学生个人薄弱环节灵活定制，进度更加个性化。`,
  },
  {
    key: '3',
    question: '如何获得授课老师的资质证明？',
    answer: `本站所有老师均从哥伦比亚大学研究生毕业，且具备多年教学或竞赛背景；  
    如需查看具体老师简历和证书，请在咨询时提出，我们将邮件发送给您。`,
  },
  {
    key: '4',
    question: '课程在哪儿上？有线上和线下选项吗？',
    answer: `目前我们提供线上实时直播授课，学生可在家通过 Zoom 或腾讯会议参与；  
    部分一对一课程有线下上课选项。`,
  },
  {
    key: '5',
    question: '目前提供什么课程辅导？',
    answer: `您可以浏览上方导航栏，不同科目有不同分类课程，例如竞赛(AMC)，标化以及常规课程，更多课程欢迎咨询微信客服`,
  },
];

export default function FAQPage() {
  const router = useRouter();
  const onContactClick = () => {
    router.push('/contact');
  }
  return (
    <div style={{ width: '90%', maxWidth: 800, margin: 'auto', padding: '2rem 0' }}>
      <div className="cta">
        <Button type="primary" size="large" onClick={onContactClick}>
          立即咨询
        </Button>
      </div>
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
