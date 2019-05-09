import React from 'react';
import {Button, Typography} from '@material-ui/core';



class Q6 extends React.Component{
  constructor(props){
    super(props);
    this.func=this.props.func.bind(this);
  }

  render(){
    return(
      <div>
        <Button onClick={this.func}>
          <Typography>aaaaa</Typography>
        </Button>
      </div>
    );
  }
}

export default Q6;