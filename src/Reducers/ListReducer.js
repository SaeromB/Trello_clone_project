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
    }
]

const ListReducer = (state=InitalState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default ListReducer;