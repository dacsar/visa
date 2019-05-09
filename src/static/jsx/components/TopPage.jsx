import React from 'react';
import {MuiThemeProvider} from '@material-ui/core/styles';
import Theme from './Theme';
import NavBar from './NavBar';
import Content from './Content';

class TopPage extends React.Component{
  render(){
    return(
      <MuiThemeProvider theme={Theme}>
      <React.Fragment>
        <NavBar />
        <Content />
      </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default TopPage;