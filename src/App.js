import React,{Component} from 'react';
import TrelloList from './Components/TrelloList';
import { connect } from 'react-redux';

class App extends Component {
  render(){

    const { lists } = this.props
    return(
      <div className='App'>
      <h2>Hello</h2>
      { lists.map(lists => <TrelloList title={lists.title} cards={lists.cards}/>)}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App);
