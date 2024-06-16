import { Routes, Route } from "react-router-dom";
import App from "./App"
import Singapole from "./pages/Singapole"
import Singapole_casino from "./pages/Singapole_casino"
import Singapole_safari from "./pages/Singapole_safari"
import Singapole_malay from "./pages/Singapole_malay"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/Singapole" element={<Singapole />} />
            <Route path="/Singapole_safari" element={<Singapole_safari />} />
            <Route path="/Singapole_casino" element={<Singapole_casino />} />
            <Route path="/Singapole_malay" element={<Singapole_malay />} />
        </Routes>
    )
}