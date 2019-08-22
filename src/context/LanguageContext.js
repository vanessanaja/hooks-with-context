import React, { Component, createContext } from "react";

export const LanguageContext = createContext();

export class LanguageProvider extends Component {
  constructor(props){
    super(props);
    this.state = {language: 'spanish'};
    this.changeLanguage = this.changeLanguage.bind(this);
  }
  changeLanguage(e){
    this.setState({ language: e.target.value });
  }
  render() {
    return (
      <LanguageContext.Provider
        value={{...this.state, changeLanguage: this.changeLanguage}}
      >
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}

//create higher order component with takes a component as an argument and its props
//and returns that same component with all original props and injects in a prop comming
//from a cotext consumer
export const withLanguageContext = Component => props => (
  <LanguageContext.Consumer>
    {value => <Component languageContext={value} {...props} />}  
  </LanguageContext.Consumer>
);