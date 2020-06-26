import {types} from '../types/types';

const initialState = {
    modelOpen: false
}
// Le indica a la app qué hacer cada vez que reciba una acción
export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.uiOpenModal:
            return {
                ...state,
                modalOpen: true
            }
        case types.uiCloseModal:
            return {
                ...state,
                modalOpen: false
            }

        default:
            return state;
    }
}
