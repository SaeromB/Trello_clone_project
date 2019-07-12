import {CONSTANTS} from '../Actions';

export const addCard = (ListID, text) => {
    return{
        type: CONSTANTS.ADD_CARD,
        payload:{text, ListID}
    };
};