import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import CakeIcon from '@material-ui/icons/Cake';
import Button from '@material-ui/core/Button';

// All Dialog related stuff to follow
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

// Candle
import Candle from './Candle';
// Taylor Swify
import TaylorSwift from './TaylorSwiftModal';
// Carousel
import Images from './Images';
// Styles
import '../styles/home.scss';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
    background: '#ffc6bf'
  }
}));

const Home = () => {
  const classes = useStyles();
  const [taylorOpen, setTaylorOpen] = useState(false);
  const [picturesOpen, setPicturesOpen] = useState(false);

  function openTaylor() {
    setTaylorOpen(true);
  }

  function closeTaylor() {
    setTaylorOpen(false);
  }

  function openPictures() {
    setPicturesOpen(true);
  }
  function closePictures() {
    setPicturesOpen(false);
  }
  return (
    <div className="home">
      <Dialog
        open={taylorOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={closeTaylor}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        fullScreen
        style={{ maxWidth: '100vw', maxHeight: '100vh' }}
      >
        <DialogTitle id="alert-dialog-slide-title">
          {'Listen to 22 maybe!'}
        </DialogTitle>
        <DialogContent>
          <TaylorSwift />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeTaylor} color="primary">
            Go back and blow the candle
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={picturesOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={closePictures}
        fullScreen
        style={{ maxWidth: '100vw', maxHeight: '100vh' }}
      >
        <DialogTitle>We'll make it together!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Images />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closePictures} color="primary">
            Go back to sleep, talk or whatever! Love you!
          </Button>
        </DialogActions>
      </Dialog>
      <div className="hey">AMMU</div>
      <div className="circle">
        You're
        <div className="age animated heartBeat" onClick={() => openTaylor()}>
          22
        </div>
        <br />
        <br />
        <div className="message">You can now legally drink!</div>
        <br />
        <div className="heading">Happy Birthday Asshole!</div>
        <br />
        <Fab color="primary" aria-label="Cake" className={classes.fab}>
          <CakeIcon />
        </Fab>
      </div>
      <Candle />
      <Button color="#fff" onClick={openPictures}>
        Some Pics?!
      </Button>
    </div>
  );
};

export default Home;
