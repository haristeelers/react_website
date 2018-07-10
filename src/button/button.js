import React from 'react';

export class Button extends React.Component{
  clicked(){
    alert("Hello Friends!");
  }
  render(){
    return(
      <div>
        <button onClick={this.clicked}>Click Me!</button>
      </div>
    );
  }
}