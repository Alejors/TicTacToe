import React, { useState } from "react";

const Gameboard = (props) => {
    const [active, setActive] = useState(props.player1);
    
    let togglePlayer = () => {
        active === props.player1 ? setActive(props.player2) : setActive(props.player1);
    }
    
    return (
        <>
            <div className="row mb-3">
                <h3>It is {active} turn!</h3>
            </div>
            <button onClick={() => {props.setPlayer1(""), props.setPlayer2(""), props.setFirst("")}} className="btn btn-light my-2" id="restart">Restart</button>
            <div className="container">
                <div className="row justify-content-center">
                    <div onClick={(e) => {togglePlayer()}} className="d-flex align-items-center justify-content-center col-2 border-bottom border-end tile display-2">
                        X
                    </div>
                    <div onClick={(e) => {togglePlayer()}} className="d-flex align-items-center justify-content-center col-2 border-bottom tile display-2">
                        O
                    </div>
                    <div onClick={(e) => {togglePlayer()}} className="d-flex align-items-center justify-content-center col-2 border-bottom border-start tile display-2">
                        X
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div onClick={(e) => {togglePlayer()}} className="d-flex align-items-center justify-content-center col-2 tile border-bottom border-end display-2">
                        X
                    </div>
                    <div onClick={(e) => {togglePlayer()}} className="d-flex align-items-center justify-content-center col-2 border-bottom border-end tile display-2">
                        O
                    </div>
                    <div onClick={(e) => {togglePlayer()}} className="d-flex align-items-center justify-content-center col-2 tile border-bottom display-2">
                        X
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div onClick={(e) => {togglePlayer()}} className="d-flex align-items-center justify-content-center col-2 border-end tile display-2">
                        X
                    </div>
                    <div onClick={(e) => {togglePlayer()}} className="d-flex align-items-center justify-content-center col-2 border-end tile display-2">
                        O
                    </div>
                    <div onClick={(e) => {togglePlayer()}} className="d-flex align-items-center justify-content-center col-2 tile display-2">
                        X
                    </div>
                </div>
            </div>
        </>
    );
}

export default Gameboard;