import React from 'react';
import './HomeworkPage.css';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Content from './Content';

const HomeworkPage = () => {
  const headerData = { title: 'Welcome to Homework Page' };
  const footerData = { text: 'Footer Information © 2025' };
  const sidebarData = { menu: ['Home', 'About', 'Contact'] };

  return (
    <div className="homework-page">
      <Header data={headerData} />
      <div className="main">
        <Sidebar data={sidebarData} />
        <Content />
      </div>
      <Footer data={footerData} />
    </div>
  );
};
export default HomeworkPage;