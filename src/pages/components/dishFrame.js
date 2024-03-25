import React from 'react';
import "./styles/dishFrame.css"
function ComponentWithPhoto(props) {
    return (
        <div className="container">
            <div className="exit-button" onClick={props.onExit}>X</div>
            <img src={props.photoSrc} alt="Photo" className="photo" />
            <div className="description">
                <p>{props.description1}</p>
                <p>{props.description2}</p>
                <p>{props.description3}</p>
            </div>
            <button className="confirm-button" onClick={props.onConfirm}>Confirm</button>
        </div>
    );
}

export default ComponentWithPhoto;