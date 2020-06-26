// Combinación de todos los Reducers: 1. autenticación - 2. calendario - 3. UI
import {combineReducers} from 'redux';

import {uiReducer} from "./uiReducer";
import {calendarReducer} from "./calendarReducer";

export const rootReducer = combineReducers({
    ui: uiReducer,
    calendar: calendarReducer,
    // TODO: AuthReducer
})
