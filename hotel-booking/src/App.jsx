import { useState } from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from 'react-router-dom'

import Search from './pages/Search'
import Customize from './pages/Customize'
import Summary from './pages/Summary'
import './App.css'

function App() {
    const [booking, setBooking] = useState(null)

    return (
        <BrowserRouter>
            <Routes>

                <Route
                    path="/search"
                    element={<Search />}
                />

                <Route
                    path="/customize/:roomType"
                    element={
                        <Customize setBooking={setBooking} />
                    }
                />

                <Route
                    path="/summary"
                    element={
                        booking ? (
                            <Summary booking={booking} />
                        ) : (
                            <Navigate to="/search" replace />
                        )
                    }
                />

            </Routes>
        </BrowserRouter>
    )
}

export default App