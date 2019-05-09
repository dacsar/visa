import React from 'react';
import {Button, Grid, Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import {ContentStep2Styles} from './Styles';

const styles = ContentStep2Styles;

class ContentStep2 extends React.Component{
  constructor(props){
    super(props);
  };

  render(){
    const {classes} = this.props;
    return(
      <React.Fragment>
        <Grid container
          direction='column'
          className={classes.step2wrapper}>
          <Grid container
            justify='center'
            alignContent='center'
            className={classes.step2topwrapper}>
              <Typography className={classes.subtitle}>
                点数計算しよう的な文章
              </Typography>
          </Grid>
          <Grid container
            alignContent='center'
            justify='center'
            className={classes.step2bottomwrapper}>
            <Button 
              variant='contained'      
              size='large'
              onClick={this.props.func}
              className={classes.button}> 
                Let's get started
            </Button>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(ContentStep2);