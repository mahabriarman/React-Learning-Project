import rooms from "../data/rooms";
import { useNavigate } from "react-router-dom"

function Search() {
    const navigation = useNavigate();

    return (
        <div>
            <h1>Hotel Booking </h1>

            {rooms.map((room) => (
                <div key={room.type}>
                    <h2>{room.name}</h2>
                    <p>₹{room.price}</p>
                    <button onClick={() => navigation(`/Customize/${room.type}`)}>Select</button>
                </div>
            ))}


        </div>
    )

}

export default Search;