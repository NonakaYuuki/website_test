import React from 'react';
import '../css/List.css'

const ListItem = ({ children }) => (
  <div className="list-item">
    {children}
  </div>
);

const ListContainer = ({ children }) => (
  <div className="list-container">
    {children}
  </div>
);

const BulletList = ({ items }) => (
  <ListContainer>
    {items.map((item, index) => (
      <ListItem key={index}>{item}</ListItem>
    ))}
  </ListContainer>
);

export default BulletList;