
import { useNavigate } from "react-router-dom";
function Summary({ booking }) {
    const nevigate = useNavigate();
    return (
        <div>
            <h1>Booking Summary</h1>

            <h2>Room : {booking.room}</h2>
            <p>Breakfast : {booking.breakfast ? "Yes" : "No"}</p>
            <p>Bed : {booking.bed ? "Yes" : "No"}</p>
            <p>Coupon : {booking.coupon || "None"}</p>

            <h2>Bill</h2>

            <p>SubTotal : ₹{booking.subTotal}</p>
            <p>Discount : ₹{booking.discountAmt}</p>
            <p>Tax : ₹{booking.tax}</p>
            <p>Total : ₹{booking.total}</p>

        <button onClick={()=> nevigate("/Search")}>Backt to Serach</button>
        </div>
    );
}

export default Summary;