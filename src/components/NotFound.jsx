import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {

    const navigate = useNavigate();

    const back = () => {
        navigate("/");
    }

    return (
        <div>
            <h1>El pokemon que ingresaste no existe</h1>
            <button onClick={back}>Regresar</button>
        </div>
    );
};

export default NotFound;