import { ReactNode } from "react";

// COMPONENTS
import Company from "../pages/Company";
import Blog from "../pages/Blog";

const ROUTES: TROUTE = {
    COMPANY: {
        PATH: "/",
        COMPONENT: Company,
    },
    BLOGS: {
        PATH: "/blogs",
        COMPONENT: Blog,
    },
};

export default ROUTES;

// TYPES
type TRouteItem = {
    PATH: string;
    COMPONENT: () => ReactNode;
};
type TROUTE = {
    COMPANY: TRouteItem;
    BLOGS: TRouteItem;
};
