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
                <Route path={ROUTES.BLOG.PATH} element={<ROUTES.BLOG.COMPONENT />} />
                <Route path={ROUTES.BLOG.PATH}>
                    <Route index element={<ROUTES.BLOG.COMPONENT />} />
                    <Route path={ROUTES.BLOG_ARTICLE.PATH} element={<ROUTES.BLOG_ARTICLE.COMPONENT />} />
                </Route>

                {/* SERVICES */}
                <Route path={ROUTES.SERVICES.POC.PATH} element={<ROUTES.SERVICES.POC.COMPONENT />} />
            </Routes>
        </Router>
    </StrictMode>
);
