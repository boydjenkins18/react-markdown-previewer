import React from 'react';
import Output from './Output'

export default class Textarea extends React.Component{
  render(){
    return(
      <div className='row'>
        <textarea
        className="col-sm-6"
        value={this.props.term}
        onChange={this.props.onChange} ></textarea>
        <Output term={this.props.term} />
      </div>
    )
  }
}
