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
        id: 0,
        cards:[
            {
                id: 0,
                text: 'Kuala lumpur'
            },
            {
                id: 1,
                text: ''
            }, {
                id: 2,
                text: "don't know"
            }
        ]

    }

    
]

const ListReducer = (state=InitalState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default ListReducer;