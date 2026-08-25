import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Home } from "@/pages/Home"
import { LegalNotice } from "@/pages/LegalNotice"
import { PrivacyPolicy } from "@/pages/PrivacyPolicy"
import { CookiePolicy } from "@/pages/CookiePolicy"
import { RestaurantExample } from "./pages/examples/RestaurantExample"
import restaurantHeroImage from "./assets/examples/restaurant/heroImage.jpg"
import { Examples } from "./pages/examples/Examples"
import { WorkshopExample } from "./pages/examples/WorkshopExample"
import workshopHeroImage from "./assets/examples/workshop/heroWorkshopImage.jpg"

function App() {
    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Home />} />
                <Route path="/aviso-legal" element={<LegalNotice />} />
                <Route path="/privacidad" element={<PrivacyPolicy />} />
                <Route path="/cookies" element={<CookiePolicy />} />
                <Route
                    path="/ejemplos/restaurante"
                    element={<RestaurantExample heroImage={restaurantHeroImage} />}
                />
                <Route path="/ejemplos/taller" element={<WorkshopExample heroImage={workshopHeroImage} />} />
                <Route path="/ejemplos" element={<Examples />} />

            </Routes>
        </BrowserRouter>
    )
}

export default App