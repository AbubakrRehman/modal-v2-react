import React from 'react';
import "./Modal.css";

function Modal({children,show,title,closeButtonText,onClose}) {
    if(!show)
        return;
    return (
        <div onClick={onClose} className="overlay">
            <div className='main' >
                <h3>{title}</h3>
                {children}
                <button onClick={onClose} className="close__btn">{closeButtonText}</button>
            </div>

        </div>
    )
}

export default Modal