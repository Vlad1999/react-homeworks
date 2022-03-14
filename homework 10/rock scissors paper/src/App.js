import "./App.css";
import rock from "./assests/images/rock.png";
import paper from "./assests/images/paper.png";
import scissors from "./assests/images/scissors.png";
import { useState } from "react";
import getRandomNumber from "./util/getRandomNumber.util";

function App() {
  const [choice, setChoice] = useState("");
  const [aiChoice, setAiChoice] = useState("");
  const [score, setScore] = useState("");
  const [history, setHistory] = useState({
    win: 0,
    lose: 0,
    draw: 0,
  });

  const ai = ["rock", "paper", "scissors"];

  const check = (choice, aiChoice) => {
    if (choice && choice === aiChoice) {
      setScore("draw");
      setHistory((prevState) => ({...prevState, draw: prevState.draw +1}));
    } else if (choice && choice === "rock") {
      if (aiChoice === "scissors") {
        setScore("win");
        setHistory((prevState) => ({...prevState, win: prevState.win +1}));
      } else {
        setScore("lose");
        setHistory((prevState) => ({...prevState, lose: prevState.lose +1}));
      }
    } else if (choice && choice === "paper") {
      if (aiChoice === "rock") {
        setScore("win");
        setHistory((prevState) => ({...prevState, win: prevState.win +1}));
      } else {
        setScore("lose");
        setHistory((prevState) => ({...prevState, lose: prevState.lose +1}));
      }
    } else if (choice && choice === "scissors") {
      if (aiChoice === "paper") {
        setScore("win");
        setHistory((prevState) => ({...prevState, win: prevState.win +1}));
      } else {
        setScore("lose");
        setHistory((prevState) => ({...prevState, lose: prevState.lose +1}));
      }
    }
  }

  const handleClick = (choice) => {
    setChoice(choice);
    let randomIndex = getRandomNumber(0, ai.length - 1);
    setAiChoice(ai[randomIndex]);
    check(choice, ai[randomIndex]);
  };

  return (
    <div className="App">
      <div className="choose">
        <div>
          <img src={rock} alt="rock" onClick={() => handleClick("rock")}></img>
          <p>Rock</p>
        </div>
        <div>
          <img
            src={paper}
            alt="paper"
            onClick={() => handleClick("paper")}
          ></img>
          <p>Paper</p>
        </div>
        <div>
          <img
            src={scissors}
            alt="scissors"
            onClick={() => handleClick("scissors")}
          ></img>
          <p>Scissors</p>
        </div>
      </div>
      <div className="board">
        <img
          className="player"
          src={
            choice === "rock"
              ? rock
              : choice === "paper"
              ? paper
              : choice === "scissors"
              ? scissors
              : ""
          }
          alt={choice}
        />
        <p>{score}</p>
        <img
          className="ai"
          src={
            aiChoice === "rock"
              ? rock
              : aiChoice === "paper"
              ? paper
              : aiChoice === "scissors"
              ? scissors
              : ""
          }
          alt={aiChoice}
        />
      </div>
      <div className="gameHistory">
        <p>Win {history.win}</p>
        <p>Lose {history.lose}</p>
        <p>Draw {history.draw}</p>
      </div>
    </div>
  );
}

export default App;
