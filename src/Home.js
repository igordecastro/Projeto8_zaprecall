import React from "react";

export default function Home({setScreen}) {
    return (
        <div className="home">
            <img src="./images/Logo.svg" alt="logo"/>
            <h1>ZapRecall</h1>
            <button onClick={() => setScreen(true)}>Iniciar Recall!</button>
        </div>
    );
}