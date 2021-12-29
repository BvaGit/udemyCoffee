import { Component } from 'react';
import './App.css';
import Main from './component/Main/Main';
import OurCoffe from './component/OurCoffe/OurCoffe';
import Pleasure from './component/Pleasure/Pleasure';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: {main: true, ourCoffee: false, pleasure: false},
    }
  }

  routing = (namePage) => {
    const copyPage = {...this.state.page}
    for (let key in copyPage) {
      console.log(key, namePage)
      if (key === namePage){
        copyPage[key] = true;
      } else {
        copyPage[key] = false;
      }
      
    }
    this.setState(() => {
      return {page: copyPage}
    })
  }

  render() {
    const {main, ourCoffee, pleasure} = this.state.page
    return (
      <div>
        { main ? 
          <Main routing={this.routing}/>
        : ourCoffee ?
          <OurCoffe routing={this.routing}/>
        : pleasure ?
          <Pleasure routing={this.routing} />
        : null }
      </div>
    )
  }

}

export default App;
