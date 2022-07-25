export default function CardFront({ front }) {
    return( 
        <div className="card">
          {console.log(front)}
          <p>{front}</p>
          <img src="./images/Vector.svg" alt="turn" />
        </div>)
}