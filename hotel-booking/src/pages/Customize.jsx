import { useParams , useNavigate, Navigate} from "react-router-dom";
import { useState, useEffect } from "react";
import rooms from "../data/rooms";
import AddOns from "../components/AddOns";

function Customize({setBooking}) {
    const { roomType } = useParams();
    const room = rooms.find((room) => (room.type === roomType))
    const [breakfast, setBreakfast] = useState(false);
    const [bed, setBed] = useState(false);
    const [subTotal, setSubTotal] = useState(0)
    const [tax, setTax] = useState(0)
    const [coupon, setCoupon] = useState("")
    const [discount, setDiscount] = useState(0)
    const [discountAmt, setDiscountAmt] = useState(0)
    const nevigate = useNavigate();
    useEffect(() => {
        let total = room.price

        if (breakfast) {
            total += 500
        }
        if (bed) {
            total += 700
        }
        if (coupon == "HOTEL10") {
            setDiscount(10)
            setDiscountAmt(total * 0.10)
        } else {
            setDiscount(0)
        }


        setSubTotal(total)
        const taxAmount = total * 0.18
        setTax(taxAmount)



    }, [breakfast, bed, room.price, coupon]);
    const confirmBooking = ()=>{
        setBooking({
            room : roomType,
            breakfast,
            subTotal,
            bed,
            coupon,
            discount,
            discountAmt,
            tax,
            total : subTotal + tax - discountAmt
        })
        nevigate("/summary");
    }

    

    return (
        <div>
            <h1>Customize Room</h1>
            <h2>Selected Room : {roomType}</h2>


            <h2>{room.name}</h2>
            <p>{room.price}</p>



            <AddOns
                breakfast={breakfast}
                setBreakfast={setBreakfast}
                bed={bed}
                setBed={setBed}

            ></AddOns>
            <p>coupon</p>
            <input type="text"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                placeholder="Enter coupon" />

            <h2>Bill </h2>
            <p>SubTotal : {subTotal}</p>
            <p>Discount  10% : {discount === 10 ? `${discountAmt}` : "Not Applicable "} </p>
            <p>tax 18% : {tax}</p>

            <p>Total : {subTotal + tax - discountAmt}</p>


            <button onClick={confirmBooking}>Confirm Booking</button>
        </div>
    )
}

export default Customize;