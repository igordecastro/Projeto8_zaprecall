export default function CardBack(props) {
    return (
        <div className="question-3 card">
            <p>{props.answer}</p>
            <div className="buttons">
                <button className="red" onClick={incorrectAnswer}>Não lembrei</button>
                <button className="orange" onClick={regularAnswer}>Quase não lembrei</button>
                <button className="green" onClick={correctAnswer}>Zap!</button>
            </div>
        </div>
    )
}