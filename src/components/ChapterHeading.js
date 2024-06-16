import React from 'react';
import '../css/ChapterHeading.css'; // スタイルファイルのインポート

const ChapterHeading = ({ id, tilte }) => {
  return (
    <div id={id} className="chapter-heading">
      {tilte}
    </div>
  );
}

export default ChapterHeading;