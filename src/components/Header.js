import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-5%, 20%)',
    borderRadius: '10px',
  },
}));

const Header = () => {
  const classes = useStyles();
    return (
      <AppBar position="fixed" className={classes.appBar} style={{ width: '90%', height: '70px', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <Toolbar>
        <Button component={Link} to="/" color="inherit">
          <Typography variant="h6" style={{ fontWeight: 'bold' }}>
            🏠 ホーム
          </Typography>
        </Button>
        </Toolbar>
      </AppBar>
    );
  };

export default Header;
