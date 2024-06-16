import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { FaTwitter } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="copyright">© 2024 ブログサイト</div>
//     </footer>
//   );
// };

const Footer = () => {
    return (
      <footer style={{ marginBottom: '20px', borderTop: '1px solid black' }}>
            <div className="footer-content">
                <div style={{ textAlign: 'center' }}>
                    <p>これは自作のサイトです。</p>
                    <a href="https://twitter.com/your_twitter_account" target="_blank" rel="noopener noreferrer">
                        <FaTwitter /> Twitterでフォローする
                    </a>
                </div>
            </div>
        </footer>
    );
  };

export default Footer;
