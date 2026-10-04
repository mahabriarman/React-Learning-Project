import { useNavigate } from "react-router-dom"

function Dashboard(){
    const Nevigate = useNavigate();
    return (
        <>
        <div>
            <h1>Select Exam</h1>

            <button onClick={()=>Nevigate("/exam/javascript")}>javascript</button>
            <button onClick={()=>Nevigate("/exam/react")}>React</button>

        </div>
        </>
    )
}

export default Dashboard;