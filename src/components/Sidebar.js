import React from 'react';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="widget">
        <h3>カテゴリー</h3>
        <ul>
          <li><a href="#">旅行</a></li>
          <li><a href="#">料理</a></li>
          <li><a href="#">ファッション</a></li>
        </ul>
      </div>
      <div className="widget">
        <h3>最新記事</h3>
        <ul>
          <li><a href="#">記事1</a></li>
          <li><a href="#">記事2</a></li>
          <li><a href="#">記事3</a></li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
