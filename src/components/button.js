import React from "react";
import '../css/button.css';
import { useNavigate } from 'react-router-dom';

const Button = ({ to, ...props }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    }
  };

  return (
    <button className="button" onClick={handleClick} {...props} />
  );
};

export default Button;