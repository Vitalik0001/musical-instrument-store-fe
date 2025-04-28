import { Route, Routes } from "react-router-dom";

import { Route as RouteEnum } from "./routes/route.enum";
import {
    Percussion,
    WelcomePage,
    Wind,
    Stringed,
    Cart,
    Product,
    SimilarProduct,
} from "./pages";
import {
    Login,
    SignUp,
    ResetPassword,
    ForgotPassword,
} from "pages/Account/components";
import ProtectedRoute from "./routes/ProtectedRotes";

function App() {
    return (
        <Routes>
            <Route path={RouteEnum.General} element={<WelcomePage />} />
            <Route path={RouteEnum.Login} element={<Login />} />
            <Route
                path={RouteEnum.ForgotPassword}
                element={<ForgotPassword />}
            />
            <Route path={RouteEnum.Registration} element={<SignUp />} />
            <Route path={RouteEnum.ResetPassword} element={<ResetPassword />} />
            <Route path={RouteEnum.Stringed} element={<Stringed />} />
            <Route path={RouteEnum.Percussion} element={<Percussion />} />
            <Route path={RouteEnum.Wind} element={<Wind />} />
            <Route element={<ProtectedRoute redirectPath={RouteEnum.Login} />}>
                <Route path={RouteEnum.Basket} element={<Cart />} />
            </Route>
            <Route
                path={RouteEnum.SimilarProducts}
                element={<SimilarProduct />}
            />
            <Route path={RouteEnum.Product} element={<Product />} />
        </Routes>
    );
}

export default App;
