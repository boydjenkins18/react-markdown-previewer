import React from 'react';

let marked=require('marked');
export default class Output extends React.Component{
  render(){
    return(
      <div className='output col-sm-6' dangerouslySetInnerHTML={{ __html: marked(this.props.term) }}></div>
    )
  }
}
