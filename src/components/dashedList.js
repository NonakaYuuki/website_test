import React from 'react';
import '../css/dashedList.css'

const ListItem = ({ children }) => (
  <div className="dashedlist-item">
    {children}
  </div>
);

const ListContainer = ({ children }) => (
  <div className="dashedlist-container">
    {children}
  </div>
);

const dashedBulletList = ({ items }) => (
  <ListContainer>
    {items.map((item, index) => (
      <ListItem key={index}>{item}</ListItem>
    ))}
  </ListContainer>
);

export default dashedBulletList;