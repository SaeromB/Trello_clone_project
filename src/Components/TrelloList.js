import React from 'react';
import TrelloCard from './TrelloCard';
import ActionButton from './ActionButton';

const TrelloList = ({title, cards}) => {
    return(
        <div style={styles.container}> 
        <h3>{title}</h3>
            {cards.map(card=><TrelloCard key={card.id} text={card.text}/>)}
            <ActionButton/>
        </div>
    )
};

const styles={
    container:{
        backgroundColor:'#DFE1FA',
        boarderRadious: 3,
        width : 300,
        padding : 8,
        margin: 8,
        borderRadius: 5
    }
}
export default TrelloList;