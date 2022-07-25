function ReductedCard ({ title, index, turnCard }) {
    return (
        <div className='question-1' onClick = {() => turnCard(index)}>
            <p>{title}</p>
            <img src="./images/arrow.svg" alt="arrow" />
        </div>
    )
}

export default ReductedCard;