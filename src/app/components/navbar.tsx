'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, Drawer, Button, Grid } from 'antd';
import {
  MenuOutlined,
  BookOutlined,
  ReadOutlined,
  ExperimentOutlined,
} from '@ant-design/icons';

const { useBreakpoint } = Grid;

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
  // {
  //   key: 'english',
  //   icon: <ReadOutlined />,
  //   label: '英语',
  //   children: [
  //     { key: 'english-reading', label: <Link href="/english/reading">阅读</Link> },
  //     { key: 'english-writing', label: <Link href="/english/writing">写作</Link> },
  //   ],
  // },
  // {
  //   key: 'science',
  //   icon: <ExperimentOutlined />,
  //   label: '科学',
  //   children: [
  //     { key: 'science-courses', label: <Link href="/science/courses">课程辅导</Link> },
  //   ],
  // },
  {
    key: 'contact',
    label: <Link href="/contact">联系我们</Link>,
  },
  {
    key: 'faq',
    label: <Link href="/faq">常见问题回答</Link>,
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  return (
    <div style={{ background: '#fff', padding: '0 16px' }}>
      {isMobile ? (
        <>
          <div style={{ padding: '5px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontWeight: 600, fontSize: '1.2rem' }}>教学平台</div>
            <Button
              type="text"
              icon={<MenuOutlined style={{ fontSize: 24 }} />}
              onClick={() => setOpen(true)}
            />
          </div>
          <Drawer
            title="菜单"
            placement="left"
            onClose={() => setOpen(false)}
            open={open}
            bodyStyle={{ padding: 0 }}
          >
            <Menu
              mode="inline"
              selectable={false}
              items={menuItems}
              onClick={() => setOpen(false)} // close drawer on link click
            />
          </Drawer>
        </>
      ) : (
        <Menu mode="horizontal" selectable={false} items={menuItems} />
      )}
    </div>
  );
}
