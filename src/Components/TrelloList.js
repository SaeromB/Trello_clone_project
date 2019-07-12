import React from 'react';
import TrelloCard from './TrelloCard';
import ActionButton from './ActionButton';

const TrelloList = ({title, cards, ListID}) => {
    return(
        <div style={styles.container}> 
        <h3>{title}</h3>
            {cards.map(card=><TrelloCard key={card.id} text={card.text}/>)}
            <ActionButton ListID={ListID} />
        </div>
    )
};

const styles={
    container:{
        backgroundColor:'#dfe3e6',
        boarderRadious: 3,
        width : 300,
        height: '100%',
        padding : 8,
        margin: 8,
        borderRadius: 5
    }
}
export default TrelloList;