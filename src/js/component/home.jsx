import React, { useState } from "react";
import Playerselect from "./playerselect";
import Gameboard from "./gameboard";

const Home = () => {
	const [player1, setPlayer1] = useState("");
	const [player2, setPlayer2] = useState("");
	const [first, setFirst] = useState("");
	const [second, setSecond] = useState("");
	const [active, setActive] = useState('');
    const [activesymbol, setActivesymbol] = useState('');
	const [board, setBoard] = useState([
		'','','',
		'','','',
		'','',''
	]);
	const [win, setWin] = useState(false);

	return (
		<>
			<div className="container-fluid">
				<div className="text-center text-light vh-100">
					<div className="row">
						<h1 className="my-4">Tic Tac Toe <small><small>in React.js</small></small></h1>
					</div>
					{(player1 !== "" && player2 !== "" && first !== "") ?
						<Gameboard player1={player1} setPlayer1={setPlayer1} player2={player2} setPlayer2={setPlayer2} first={first} setFirst={setFirst} second={second} active={active} setActive={setActive} activesymbol={activesymbol} setActivesymbol={setActivesymbol} board={board} setBoard={setBoard} win={win} setWin={setWin} /> :
						<Playerselect player1={player1} setPlayer1={setPlayer1} player2={player2} setPlayer2={setPlayer2} first={first} setFirst={setFirst} second={second} setSecond={setSecond}/> }
				</div>
			</div>
		</>
	);
};

export default Home;
