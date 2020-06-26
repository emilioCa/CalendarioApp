import React from "react";
import {useDispatch} from 'react-redux';
import {uiOpenModal} from "../../actions/ui";

export const AddNewFab = () => {
    // Llamamos al dispatch para realizar una acción
    const dispatch = useDispatch();

    const handleClickNew = () => {
        // Abrimos el modal a través de Redux
        dispatch(uiOpenModal())
    }

    return (
        <button
            className="btn btn-primary fab"
            onClick={handleClickNew}
        >
            <i className="fas fa-plus"></i>
        </button>
    );
}
