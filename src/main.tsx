import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// STYLES
import "./styles/index.css";

// ROUTES
import ROUTES from "./navigation/routes";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Router>
            <Routes>
                <Route path={ROUTES.COMPANY.PATH} element={<ROUTES.COMPANY.COMPONENT />} />
                <Route path={ROUTES.BLOGS.PATH} element={<ROUTES.BLOGS.COMPONENT />} />
            </Routes>
        </Router>
    </StrictMode>
);
