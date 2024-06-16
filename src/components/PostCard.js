import React from 'react';

const PostCard = ({ title, imageUrl, excerpt }) => {
  return (
    <div className="post-card">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{excerpt}</p>
    </div>
  );
};

export default PostCard;
