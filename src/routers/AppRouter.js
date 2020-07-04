import React, { useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,    
    Redirect
} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
// Nuestros Componentes
import { LoginScreen } from "../components/auth/LoginScreen";
import { CalendarScreen } from "../components/calendar/CalendarScreen";
import { startChecking } from "../actions/auth";
// Route
import { PublicRoute } from '../routers/PublicRoute';
import { PrivateRoute } from '../routers/PrivateRoute';

export const AppRouter = () => {
    const dispatch = useDispatch();
    const { checking, uid } = useSelector(state => state.auth)

    useEffect(() => {
        dispatch(startChecking());
    }, [dispatch])

    if (checking) {
        return (
            <h5>Espere...</h5>
        )
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        exact
                        path="/login"
                        component={LoginScreen}
                        isAuthenticated={!!uid}
                    />
                    <PrivateRoute
                        exact
                        path="/"
                        component={CalendarScreen}
                        isAuthenticated={!!uid}
                    />

                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    );
}
// El componente <Redirect /> nos redireccionará a la página CalendarScreen cada vez que se trate de
// acceder a una ruta que no existe en nuestra app
