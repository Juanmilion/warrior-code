import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Home } from "@/pages/Home"
import { LegalNotice } from "@/pages/LegalNotice"
import { PrivacyPolicy } from "@/pages/PrivacyPolicy"
import { CookiePolicy } from "@/pages/CookiePolicy"
import { RestaurantExample } from "./pages/examples/RestaurantExample"

function App() {
    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aviso-legal" element={<LegalNotice />} />
                <Route path="/privacidad" element={<PrivacyPolicy />} />
                <Route path="/cookies" element={<CookiePolicy />} />
                <Route path="/restaurante" element={<RestaurantExample />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App