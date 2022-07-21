export default function Card(props ,{showQuestion}) {
    return (
        <div className={props.type} >
            <p>{props.index}</p>
            <img src="./images/arrow.svg" alt="arrow" onClick={() => showQuestion(props.index)} />
        </div>
    )
}