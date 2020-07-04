import React from "react";
import { useDispatch } from "react-redux";

import { eventStartDelete } from "../../actions/events";

export const DeleteEventFab = () => {
    const dispatch = useDispatch();
    // const {activeEvent} = useSelector(state => state.calendar);

    const handleDelete = () => {
        // Le enviamos el evento activo o seleccionado para su eliminación
        dispatch(eventStartDelete());
    }
    return (
        <button
            id="btnDelete"
            className="btn btn-danger fab-danger"
            onClick={handleDelete}
        >
            <i className="fas fa-trash"></i>
            <span> Borrar evento</span>
        </button>
    )
}
