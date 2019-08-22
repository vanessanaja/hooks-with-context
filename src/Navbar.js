
import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import App from "./App";
import styles from './styles/NavbarStyles';
import { ThemeContext } from './context/ThemeContext';
import { LanguageContext, withLanguageContext } from './context/LanguageContext';

const content = {
  english: {
    search: "Search",
    flag: "🇬🇧"
  },
  german: {
    search: "Suchen",
    flag: "🇩🇪"
  },
  spanish: {
    search: "Buscar",
    flag: "🇪🇸"
  }
};
class Navbar extends Component {
  static contextType = ThemeContext;// this tells the class to look up and see if it's nested
  //inside a ThemeProvider (the nearest one of it's nested inside more than one)
  render() {
    const { isDarkMode, toggleTheme } = this.context;
    const {classes} = this.props;
    const { language } = this.props.languageContext;
    const { search, flag } = content[language];
    return (
          <div className={classes.root}>
          <AppBar position='static' color={isDarkMode ? 'primary' : 'default'}>
            <Toolbar>
              <IconButton className={classes.menuButton} color='inherit' >
                <span>{flag}</span>
              </IconButton>
              <Typography
                className={classes.title}
                variant='h6'
                color='inherit'
              >
                App title 
              </Typography>
              <Switch onChange={toggleTheme}/> {/*gives us a toggle button to toggle theme from dark to light*/}
              <div className={classes.grow} />
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase placeholder={`${search}...`} 
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}/>
              </div>
            </Toolbar>
          </AppBar>
        </div>
        );
      }
  }

export default withLanguageContext(withStyles(styles)(Navbar));