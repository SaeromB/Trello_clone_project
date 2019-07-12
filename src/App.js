import React,{Component} from 'react';
import TrelloList from './Components/TrelloList';
import { connect } from 'react-redux';
import ActionButton from './Components/ActionButton';

class App extends Component {
  render(){

    const { lists } = this.props
    return(
      <div className='App'>
        <h2>What is you're Plan?</h2>
          <div style={styles.ListContainer}>
            { lists.map(list => (
            <TrelloList
             ListID = {list.id}
             id={list.id}
             title={list.title}
             cards={list.cards}/>))}
            <ActionButton list/>
          </div>
\      </div>
    )
  }
}

const styles = {
  ListContainer: {
    display: 'flex',
    flexdirection: 'row',
    marginRight: 8
  }
}
const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App);
