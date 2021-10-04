import './App.css';
import signup from './assets/signup.png';
import SignUp from './components/SignUp';
import { makeStyles } from '@material-ui/core';

function App() {
  const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '20px',
    },
    img: {
      width: '100vh',
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <SignUp />
      <div>
        <img className={classes.img} src={signup} alt="sign up" />
      </div>
     </div>
  );
}

export default App;
