import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Typography, MobileStepper, Button, Grid, Paper} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import {QuestionStyles} from './Styles';
import Q1 from './Q1';
import Q2 from './Q2';
import Q3 from './Q3';
import Q4 from './Q4';
import Q5 from './Q5';
import Q6 from './Q6';

const styles = QuestionStyles;

class Question extends React.Component{
  constructor(props){
    super(props);
    this.state={
      activeStep: 0,
      q1: '',
      q2: '',
      q3: '',
      q4: '',
      q5_1: false,
      q5_2: false,
      q5_3: false,
      q5_4: false,
      q4showflag4: false,
      q4showflag5: false,
      q4showflag6: false,
      q4showflag7: false,
    };
    this.toggleModal=this.props.func.bind(this);
    this.handleChangeQx=this.handleChangeQx.bind(this);
    this.handleChangeQ4ShowFlag=this.handleChangeQ4ShowFlag.bind(this);
    this.handleChangeQ5=this.handleChangeQ5.bind(this);
    this.post=this.post.bind(this);
  }

  handleNext(){
    this.setState({
      activeStep: this.state.activeStep+1
    });
  }

  handleBack(){
    this.setState({
      activeStep: this.state.activeStep-1
    });
  }

  handleChangeQx(qx){
    this.setState({
      [qx]: event.target.value
    })
  }

  handleChangeQ4ShowFlag(){
    if(event.target.value === '15'){
      this.setState({
        q4showflag4: true,
        q4showflag5: true,
        q4showflag6: true,
        q4showflag7: true,
      })
    }else if(event.target.value === '10'){
      this.setState({
        q4showflag4: true,
        q4showflag5: true,
        q4showflag6: true,
        q4showflag7: false,
      })
    }else if(event.target.value === '5'){
      this.setState({
        q4showflag4: true,
        q4showflag5: true,
        q4showflag6: false,
        q4showflag7: false,
      })
    }else if(event.target.value === '0'){
      this.setState({
        q4showflag4: false,
        q4showflag5: false,
        q4showflag6: false,
        q4showflag7: false,
      })
    }
  }

  handleChangeQ5(val){
    this.setState({
      [val]: !this.state[val]
    })
  }

  post(){
    fetch('http://localhost:5000/post', {
      method: 'POST',
      body: JSON.stringify({q1:this.state.q1, 
                            q2:this.state.q2,
                            q3:this.state.q3,
                            q4:this.state.q4,
                            q5:this.state.q5,
                          }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => {
      return res.json();
    })
    .then(data => {
      return console.log(data);
    })
    .then(err => {
      return console.error(err);
    });
  }

  render(){
    const textList = [<Q1 qx={this.state.q1} func={this.handleChangeQx}/>, 
                      <Q2 qx={this.state.q2} func={this.handleChangeQx}/>, 
                      <Q3 qx={this.state.q3} 
                          func1={this.handleChangeQx}
                          func2={this.handleChangeQ4ShowFlag}/>,
                      <Q4 qx={this.state.q4} 
                          func={this.handleChangeQx}
                          q4showflag4={this.state.q4showflag4}
                          q4showflag5={this.state.q4showflag5}
                          q4showflag6={this.state.q4showflag6}
                          q4showflag7={this.state.q4showflag7}/>, 
                      <Q5 q5_1={this.state.q5_1}
                          q5_2={this.state.q5_2}
                          q5_3={this.state.q5_3}
                          q5_4={this.state.q5_4}
                          func={this.handleChangeQ5}/>, 
                      <Q6 func={this.post}/>];
    const maxSteps=textList.length;
    const {classes}=this.props
    return(
      <div>
        <Grid container justify='center'>
          <Grid contained
              className={classes.closebuttonwrapper}
              alignItems='center'>
              <Button onClick={this.toggleModal} 
                classNames={classes.closebutton}
                color='secondary'>  
                <CloseIcon className={classes.closeicon} />
              </Button>
            </Grid>
          <Paper className={classes.base}>
            <Grid container justify='center' className={classes.content}>
              <Typography>{textList[this.state.activeStep]}</Typography>
            </Grid>
            <MobileStepper
              steps={maxSteps}
              position='static'
              variant='progress'
              className={classes.stepperwrapper}
              activeStep={this.state.activeStep}
              nextButton={
                <Button size='large' onClick={this.handleNext.bind(this)} disabled={this.state.activeStep===maxSteps-1}>
                  Next
                </Button>
              }
              backButton={
                <Button size='large' onClick={this.handleBack.bind(this)} disabled={this.state.activeStep===0}>
                  Back
                </Button>
              }/>        
          </Paper>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Question);