import React from "react";

const Playerselect = (props) => {

    return (
        <>
            <div className="row mb-5">
                <h3>Pick A Weapon</h3>
            </div>
            <div className="mt-5 row justify-content-center align-items-center">
                <div className="p-5 col-md-6 bg-dark bg-opacity-50">
                    <h3>CHOOSE YOUR WEAPON</h3>
                    <input type="text" id="player1" onChange={(e) => props.setPlayer1(e.target.value)} placeholder="Player 1 username" />
                    <input type="text" id="player2" onChange={(e) => props.setPlayer2(e.target.value)} placeholder="Player 2 username" /><br />
                    <h4 className="mt-2">Choose {props.player1}'s weapon</h4>
                    <button onClick={(e) => props.setFirst(e.target.value)} className="weapon mt-2 me-4 display-4 py-2 px-4 bg-dark bg-opacity-50" id="x" value="X">X</button>
                    <button onClick={(e) => props.setFirst(e.target.value)} className="weapon mt-2 ms-4 display-4 py-2 px-4 bg-dark bg-opacity-50" id="o" value="O">O</button>

                </div>
            </div>
        </>
    )
};

export default Playerselect;