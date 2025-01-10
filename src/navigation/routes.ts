import { ReactNode } from "react";

// COMPONENTS
import Blog from "../pages/Blog";
import Company from "../pages/Company";
import BlogArticle from "../pages/BlogArticle";
import POC from "../pages/Services/POC";
import MVP from "../pages/Services/MVP";
import FDP from "../pages/Services/FDP";

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
        MVP: { PATH: "/services/mvp", COMPONENT: MVP },
        FDP: { PATH: "/services/fdp", COMPONENT: FDP },
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
    SERVICES: { POC: TRouteItem; MVP: TRouteItem; FDP: TRouteItem };
};
