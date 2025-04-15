import { Route, Routes } from "react-router-dom";

import { Route as RouteEnum } from "./routes/route.enum";
import { Percussion, WelcomePage, Wind, Stringed, Cart } from "./pages";

function App() {
    return (
        <Routes>
            <Route path={RouteEnum.General} element={<WelcomePage />} />
            <Route path={RouteEnum.Stringed} element={<Stringed />} />
            <Route path={RouteEnum.Percussion} element={<Percussion />} />
            <Route path={RouteEnum.Wind} element={<Wind />} />
            <Route path={RouteEnum.Basket} element={<Cart />} />
        </Routes>
    );
}

export default App;
