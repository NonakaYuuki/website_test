import React from 'react';
import '../css/ListWithTitle.css'; // 外部CSSファイルをインポート

const Container = ({title, content}) => {
  return (
    <div className="container">
      <span className="title">{title}</span>
      <p>{content}</p>
    </div>
  );
};

export default Container;