import React from "react";
import {Provider} from 'react-redux';

import {store} from './store/store';
import {AppRouter} from "./routers/AppRouter";

export const CalendarApp = () => {
    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    );
}

// El componente AppRouter encapsula toda las rutas y maneja nuestra aplicación
