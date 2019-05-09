import React from 'react';
import {Modal, Grid, Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import Question from './Question';
import {ContentStyles} from './Styles';
import Header from './Header';
import ContentStep1 from './ContentStep1';
import ContentStep2 from './ContentStep2';
import ContentStep3 from './ContentStep3';
import ContentStep4 from './ContentStep4';
import Footer from './Footer';

const styles = ContentStyles;

class Content extends React.Component{
  constructor(){
    super();
    this.state={
      modalFlag1: false,
      category: '',
    };
    this.toggleModal=this.toggleModal.bind(this);
    this.handleCategory=this.handleCategory.bind(this);
  }

  toggleModal(){
    if(this.state.category){
      this.setState({
        modalFlag1: !this.state.modalFlag1
      })
    }else{
      //要変更
      alert('select Categories');
    }
  }

  handleCategory(val){
    this.setState({
      category: val
    })
  }

  render(){
    const {classes}=this.props;
    return(
      <React.Fragment>
        <Modal open={this.state.modalFlag1}>
          <Question func={this.toggleModal}/>
        </Modal>
        <Grid container justify='center'>
          <Grid container 
            direction='column' 
            className={classes.contentwrapper}>
            <Header />
            <ContentStep1 
              category={this.state.category} 
              func={this.handleCategory}/>
            <ContentStep2 func={this.toggleModal}/> 
            <ContentStep3 />
            <ContentStep4 />
            <Footer />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Content);