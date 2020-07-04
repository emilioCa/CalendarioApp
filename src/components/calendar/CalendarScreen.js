import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import { Navbar } from "../ui/Navbar";
import { AddNewFab } from '../ui/AddNewFab'
import { CalendarEvent } from "./CalendarEvent";
import { CalendarModal } from "./CalendarModal";
import { DeleteEventFab } from "../ui/DeleteEventFab";
import { messages } from "../../helpers/calendar-messages-es";

// Cargamos los css necesarios para Big Calendar
import 'react-big-calendar/lib/css/react-big-calendar.css';
// Cargamos el idioma de moment
import 'moment/locale/es';
// Acciones
import { uiOpenModal } from "../../actions/ui";
import { eventClearActiveEvent, eventSetActive, eventStartLoading } from '../../actions/events';

moment.locale('es'); // Cambiamos a español
const localizer = momentLocalizer(moment); // or globalizeLocalizer

export const CalendarScreen = () => {
    // Nos permite hacer el envío de una acción
    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector(state => state.calendar);
    const { uid } = useSelector(state => state.auth);

    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');

    useEffect(() => {
        dispatch(eventStartLoading());
    }, [dispatch])

    // Cada vez que se haga doble click
    const onDoubleClick = (e) => {
        // Aquí se ejecuta el 'dispatch' a la acción
        dispatch(uiOpenModal());
    }

    // Cada vez que se haga un click
    const onSelectEvent = (e) => {
        dispatch(eventSetActive(e));
    }

    // Se almacena la vista seleccionada para que persista en el tiempo una vez realizado un postback
    const onViewChange = (e) => {
        setLastView(e);
        localStorage.setItem('lastView', e);
    }

    // Se lanzará cada vez que se haga click en cualquier parte del calendario
    const onSelectSlot = (e) => {
        // console.log(e)
        dispatch(eventClearActiveEvent());
    }

    // Aplicará un estilo a un evento en particular
    const eventStyleGetter = (event, start, end, isSelected) => {
        const style = {
            backgroundColor: (uid === event.user._id) ? '#367CF7' : '#465660',
            borderRadius: '0px',
            opacity: 0.8,
            display: 'block',
            color: 'white'
        }
        return {
            style
        }
    }

    return (
        <div className="calendar-screen">
            <Navbar />

            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccesor="end"
                messages={messages}
                eventPropGetter={eventStyleGetter}
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={onSelectEvent}
                onSelectSlot={onSelectSlot}
                selectable={true}
                onView={onViewChange}
                view={lastView}
                components={{
                    event: CalendarEvent
                }}
            />
            <AddNewFab />
            {
                (activeEvent) && <DeleteEventFab />
            }
            <CalendarModal />
        </div>
    );
}

// TODO: Apuntes
// Es obligatorio poner el inicio y el fin de un evento
// Big Calendar require de la librería "moment" para funcionamiento

/**
 * Packages de la app
 *
 * Big Calendar:
 * moment: npm i moment
 * react-Modal: npm i react-modal
 * react-datetime-picker: npm i react-datetime-picker
 * sweet-alert-2: npm i sweetalert2
 * Redux Thunk: npm i redux-thunk
 * React Redux; npm i react-redux redux
 * */
