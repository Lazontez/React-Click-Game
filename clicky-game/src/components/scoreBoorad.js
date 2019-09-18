import React from "react";

function ScoreBoard(props) {
    return (
    <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <h1 className="display-4">Your Score:</h1>
            <h3 classname="lead">{props.score}</h3>
        </div>
    </div>)
}

export default ScoreBoard