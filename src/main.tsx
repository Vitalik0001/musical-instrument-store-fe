import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import App from "./App.tsx";
import { store, persistor } from "store/index.ts";

import "./index.scss";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={null}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </PersistGate>
        </Provider>
    </StrictMode>
);
