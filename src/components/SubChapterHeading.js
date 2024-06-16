import React from 'react';
import '../css/SubChapterHeading.css'

const SubChapterHeading = ({ id, title }) => {
  return (
    <div id={id} className="subchapter-heading">
      {title}
    </div>
  );
};

export default SubChapterHeading;