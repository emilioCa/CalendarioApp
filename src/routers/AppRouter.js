import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'
// Nuestros Componentes
import {LoginScreen} from "../components/auth/LoginScreen";
import {CalendarScreen} from "../components/calendar/CalendarScreen";

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/login" component={LoginScreen}></Route>
                    <Route exact path="/" component={CalendarScreen}></Route>

                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    );
}
// El componente <Redirect /> nos redireccionará a la página CalendarScreen cada vez que se trate de
// acceder a una ruta que no existe en nuestra app
