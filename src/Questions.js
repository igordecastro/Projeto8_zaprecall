import Card from "./Card";
import CardFront from "./CardFront";

export default function Questions({cards, count}) {


    function showQuestion(i) {
        cards(i).type = "question-2 card";
        <CardFront question={cards[i].question}/>
        console.log=(i);
    } 

    return (
        <div className="questions">
            <div className="top">
                <img src="./images/Logo - Peq.svg" alt="Logo" />
                <h1>ZapRecall</h1>
            </div>
            {cards.map(card => <Card type={card.type} index={card.index} image={card.image} showQuestion={showQuestion} />)}
            <div className="finished">
                <p>{`${count}/${cards.length}`} CONCLUÍDOS</p>
            </div>
        </div>
    );
}