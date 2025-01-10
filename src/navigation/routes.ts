import { ReactNode } from "react";

// COMPONENTS
import Blog from "../pages/Blog";
import Company from "../pages/Company";
import BlogArticle from "../pages/BlogArticle";
import POC from "../pages/Services/POC";

const ROUTES: TROUTE = {
    COMPANY: {
        PATH: "/",
        COMPONENT: Company,
    },
    BLOG: {
        PATH: "/blog",
        COMPONENT: Blog,
    },
    BLOG_ARTICLE: {
        PATH: ":id",
        COMPONENT: BlogArticle,
    },
    SERVICES: {
        POC: { PATH: "/services/poc", COMPONENT: POC },
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
    BLOG: TRouteItem;
    BLOG_ARTICLE: TRouteItem;
    SERVICES: { POC: TRouteItem };
};
