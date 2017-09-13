import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Textarea from './components/Textarea';



class App extends React.Component{
  constructor(props){
    super(props);
    this.state={term:"Heading\n=======\nSub-Heading\n--------------\n\n### Another deeper heading\n\nParagraphs are separated by a blank line.\n\nLeave 2 spaces at the end of a line to do a line break\n\nText attributes *italic*, **bold**,`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n* apples\n* oranges\n* pears\n\nNumbered list:\n\n1. apples\n2. oranges\n3. pears\n\nThe rain---not the reign---in Spain.\n\n *[Boyd Jenkins](https://codepen.io/boydjenkins18)*"};
  }

  render(){
    return(
      <div className='container'>
        <Header />
        <Textarea term={this.state.term} onChange={this.onUpdateTextarea.bind(this)} />
      </div>
    )
  }

onUpdateTextarea(e){
  this.setState({term:e.target.value});
}

}

ReactDOM.render(<App />,document.getElementById('app'));
