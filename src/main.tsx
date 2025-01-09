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
                {ROUTES.map(({ Path, Component }, index) => {
                    return <Route key={index} path={Path} element={<Component />} />;
                })}
            </Routes>
        </Router>
    </StrictMode>
);
