'use client';
import React from 'react';
import Link from 'next/link';
import { Menu } from 'antd';
import { BookOutlined, ReadOutlined, ExperimentOutlined } from '@ant-design/icons';

const menuItems = [
  {
    key: 'home',
    label: <Link href="/">首页</Link>,
  },
  {
    key: 'math',
    icon: <BookOutlined />,
    label: '数学',
    children: [
      { key: 'math-competition', label: <Link href="/math/competition">竞赛</Link> },
      { key: 'math-standardized', label: <Link href="/math/standardized">标化</Link> },
      { key: 'math-courses', label: <Link href="/math/courses">课程辅导</Link> },
    ],
  },
  {
    key: 'english',
    icon: <ReadOutlined />,
    label: '英语',
    children: [
      { key: 'english-reading', label: <Link href="/english/reading">阅读</Link> },
      { key: 'english-writing', label: <Link href="/english/writing">写作</Link> },
    ],
  },
  {
    key: 'science',
    icon: <ExperimentOutlined />,
    label: '科学',
    children: [
      { key: 'science-courses', label: <Link href="/science/courses">课程辅导</Link> },
    ],
  },
  {
    key: 'contact',
    label: <Link href="/contact">联系我们</Link>,
  },
  {
    key: 'faq',
    label: <Link href="/faq">常见问题回答</Link>,
  }
];

export default function Navbar() {
  return <Menu mode="horizontal" selectable={false} items={menuItems} />;
}
