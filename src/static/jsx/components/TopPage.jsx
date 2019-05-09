import React from 'react';
import NavBar from './NavBar';
import Theme from './Theme';
import Content from './Content';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';


class TopPage extends React.Component{
  render(){
    return(
      <MuiThemeProvider theme={Theme}>
      <div>
        <NavBar />
        <Content />
      </div>
      </MuiThemeProvider>
    );
  }
}

export default TopPage;