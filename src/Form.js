import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from './styles/FormStyles';
import { LanguageContext } from './context/LanguageContext';

const words = {
  english: {
    signIn: 'Sign In',
    email: 'Email Adress',
    password: "Password",
    remember: "Remember Me"
  },
  german: {
    signIn: 'Einloggen',
    email: 'Electronic Mail Adresse',
    password: 'Passwort',
    remember: 'Ehrinere mich'
  },
  spanish: {
    signIn: 'Login',
    email: 'Correo Electornico',
    password: "Contraseña",
    remember: "Recuérdame"
  }
};
function Form(props){
    const { language, changeLanguage } = this.context;
    const { classes } = this.props;
    const { signIn, email, password, remember } = words[language];
  return (
    <main className={classes.name}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon/>
          </Avatar>
          <Typography variant='h5'>{signIn}</Typography>
          <Select value={language} onChange={changeLanguage}>
            <MenuItem value='english'>English</MenuItem>
            <MenuItem value='spanish'>Spanish</MenuItem>
            <MenuItem value='german'>German</MenuItem>
          </Select>
          <form className={classes.form}>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='email'>{email}</InputLabel>
              <Input id='email' name='email' autoFocus></Input>
            </FormControl>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='password'>{password}</InputLabel>
              <Input id='password' name='password'></Input>
            </FormControl>
            <FormControlLabel 
              control={<Checkbox color='primary' />} 
              label='remember me'
              />
             <Button variant='contained' 
              type='submit' 
              fullWidth 
              color='primary'
              className={classes.submit}
              >Sign In</Button> 
          </form>
        </Paper>
      </main>
    )
  } 

export default withStyles(styles)(Form);