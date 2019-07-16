import {CONSTANTS} from '../Actions/'

let ListID = 2;
let CardID = 4;

const InitalState = [
    {
        title: 'What to eat this week',
        id: 0,
        cards:[
            {
                id: 0,
                text: 'sushi'
            },
            {
                id: 1,
                text: 'pizza'
            }
        ]
    },{
        title: 'Travel Plans',
        id: 1,
        cards:[
            {
                id: 0,
                text: 'Kuala lumpur'
            },
            {
                id: 1,
                text: 'Kota Kinabalu'
            }, {
                id: 2,
                text: "don't know"
            }
        ]

    }

    
]

const ListReducer = (state=InitalState, action) => {
    switch(action.type) {
        case CONSTANTS.ADD_LIST:
            const newList = {
                title: action.payload,
                cards:[],
                id:ListID
            }
            ListID += 1
            return [...state, newList];

        case CONSTANTS.ADD_CARD:
            const newCard = {
                text: action.payload.text,
                id: CardID,
            }
            CardID += 1;

            const newState = state.map(list => {
                if(list.id === action.payload.ListID){
                    return{
                        ...list,
                        cards: [...list.cards, newCard]
                    }
                }else{
                    return list
                }
            });
            return newState
        default:
            return state;
    }
}

export default ListReducer;