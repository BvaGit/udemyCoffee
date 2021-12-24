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

  render() {
    const {main, ourCoffee, pleasure} = this.state.page
    return (
      <div>
        { main ? 
          <Main />
        : ourCoffee ?
          <OurCoffe />
        : pleasure ?
          <Pleasure />
        : null }
      </div>
    )
  }

}

export default App;
