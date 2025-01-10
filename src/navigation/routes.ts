import { ReactNode } from "react";

// COMPONENTS
import Blog from "../pages/Blog";
import Company from "../pages/Company";
import BlogArticle from "../pages/BlogArticle";

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
};
