import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Button from "./components/button";



const TitleComponent = () => (
  <Grid item xs={12} style={{ height: 500 }}>
          <div style={{ textAlign: 'center' }}>
            <img src="/images/night.jpg" style={{ width: '100%', height: '70%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: -1, opacity: 0.9 }} />
            <Typography variant="h1" style={{ color: 'white', fontWeight: 'bold', marginTop: '80px' }}>旅行ブログ</Typography>
          </div>
      </Grid>
);

const App = () => {
  return (
    <div>
      <Grid container justifyContent="center">
    <Header />
    </Grid>
    <Grid container spacing={6} justifyContent="center" style={{ marginTop: 64, marginBottom: 64 }}>
      <TitleComponent />
      <div style={{ marginTop: 64, display: 'grid', gap: '50px' }}>
      <Button to="/Singapole_safari"><h1>ナイトサファリよりも昼サファリ</h1></Button>
      <Button to="/Singapole_casino"><h1>シンガポールカジノ</h1></Button>
      <Button to="/Singapole_malay"><h1>シンガポールから弾丸マレーシア</h1></Button>
      <Button to="/Singapole"><h1>投稿画面へ</h1></Button>
      </div>
    </Grid>
    <Footer />
    </div>
  
  );
};

export default App;


