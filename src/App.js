import React from 'react';
import './App.css';
import Banner from './Banner';
import { Button } from './Button';
import { PageImage } from './PageImage';
import Cover from './images/cover.jpg';
import Page1 from './images/p1.jpg';
import Page2 from './images/p2.jpg'
import Page3 from './images/p3.jpg'
import Page4 from './images/p4.jpg'
import Page5 from './images/p5.jpg'

const PAGE = {
  cover: Cover,
  p1: Page1,
  p2: Page2,
  p3: Page3,
  p4: Page4,
  p5: Page5
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={ src: PAGE.cover };
    this.choosePage=this.choosePage.bind(this);
  }
  choosePage() {
    const currentState = this.state.src;
    if (currentState == PAGE.cover) {
        this.setState({ src: PAGE.p1});
    } else if (currentState == PAGE.p1) {
        this.setState({ src: PAGE.p2});
    } else if (currentState == PAGE.p2) {
        this.setState({ src: PAGE.p3});
    } else if (currentState == PAGE.p3) {
        this.setState({ src: PAGE.p4});
    } else if (currentState == PAGE.p4) {
        this.setState({ src: PAGE.p5});
    } else if (currentState == PAGE.p5) {
        this.setState({ src: PAGE.cover});
    }
  }
  render() {
    return ( //add pages under banner
      <div className="App">
        <Banner />
        <div className='picContainer'>
          <PageImage className='pic' src={this.state.src} />
        </div>
        <div className='buttonWrap'>
          <Button choosePage={this.choosePage} />
        </div>
      </div>
    );
  }
}

export default App;

/*modules to add:
1) pages dispayer
  render return 
  button
  page image
2) pages changer - stateless
  render image 
3) button - event handler + render button

*/


