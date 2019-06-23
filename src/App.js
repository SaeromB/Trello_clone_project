import React,{Component} from 'react';
import TrelloList from './Components/TrelloList';
import ListReducer from './Reducers/ListReducer';

class App extends Component {
  render(){
    return(
      <div className='App'>
      <h2>Hello</h2>
      <TrelloList title='test'/>
      </div>
    )
  }
}

export default App;
