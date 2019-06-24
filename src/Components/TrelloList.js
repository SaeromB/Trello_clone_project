import React from 'react';
import TrelloCard from './TrelloCard';

const TrelloList = ({title, cards}) => {
    return(
        <div style={styles.container}> 
        <h3>{title}</h3>
        {cards.map(card=><TrelloCard text={card.text}/>)}
        </div>
    )
};

const styles={
    container:{
        backgroundColor:'#ccc',
        boarderRadious: 3,
        width : 300,
        padding : 8,
        margin: 8,
        borderRadius: 5
    }
}
export default TrelloList;