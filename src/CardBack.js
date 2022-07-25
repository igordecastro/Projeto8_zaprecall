export default function CardBack({back}) {
    return (
        <div className="question-3 card">
            <p>{back}</p>
            <div className="buttons">
                <button className="red">Não lembrei</button>
                <button className="orange">Quase não lembrei</button>
                <button className="green">Zap!</button>
            </div>
        </div>
    )
}