import CardFront from "./CardFront"
import ReductedCard from "./ReductedCard"

export default function Card({ index, turnCard, title, clicked, front}) {
    return (
        <>
         {!clicked ? <ReductedCard title = {title} index = {index} key = {index} turnCard = {turnCard}/> : <CardFront front = {front} />}
        </>
    )
}