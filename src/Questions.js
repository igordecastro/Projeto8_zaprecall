import React from "react";
import Card from "./Card";

export default function Questions({cards, setCards}) {
    function turnCard (i) {
        
        let showedCards = cards.map((card, index) => {
            if (index === i) {
                return {
                    ...card,
                    clicked: true
                }
            } else return {...card, clicked: false};
        })
        setCards([...showedCards]);
    }

    return (
        <div className="questions">
            <div className="top">
                <img src="./images/Logo - Peq.svg" alt="Logo" />
                <h1>ZapRecall</h1>
            </div>
            {cards.map((card, index) => <Card front = {cards.front} key = {index} clicked = {card.clicked} index = {index} title={card.cardTitle}  turnCard={turnCard}/>)}
        </div>
    );
}