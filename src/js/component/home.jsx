import React, { useState } from "react";
import Playerselect from "./playerselect";
import Gameboard from "./gameboard";

const Home = () => {
	const [player1, setPlayer1] = useState("player1");
	const [player2, setPlayer2] = useState("");
	const [first, setFirst] = useState("");

	return (
		<>
			<div className="container-fluid">
				<div className="text-center text-light vh-100">
					<div className="row">
						<h1 className="my-4">Tic Tac Toe <small><small>in React.js</small></small></h1>
					</div>
					{(player1 !== "player1" && player2 !== "" && first !== "") ?
						<Gameboard player1={player1} setPlayer1={setPlayer1} player2={player2} setPlayer2={setPlayer2} first={first} setFirst={setFirst} /> :
						<Playerselect player1={player1} setPlayer1={setPlayer1} player2={player2} setPlayer2={setPlayer2} first={first} setFirst={setFirst} /> }
				</div>
			</div>
		</>
	);
};

export default Home;
