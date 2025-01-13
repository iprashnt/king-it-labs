import { ReactNode } from "react";

// COMPONENTS
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Company from "../pages/Company";
import BlogArticle from "../pages/BlogArticle";
import POC from "../pages/Services/POC";
import MVP from "../pages/Services/MVP";
import FDP from "../pages/Services/FDP";
import SupportService from "../pages/Services/SupportService";
import WhiteLabel from "../pages/Solution/WhiteLabel";
import WhiteLabelDetail from "../pages/Solution/WhiteLabelDetail";

const ROUTES: TROUTE = {
    HOME: {
        PATH: "/",
        COMPONENT: Home,
    },
    COMPANY: {
        PATH: "/company",
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
        SUPPORT: { PATH: "/services/support", COMPONENT: SupportService },
    },
    SOLUTION: {
        WHITELABEL: { PATH: "/solution/whitelabel", COMPONENT: WhiteLabel },
        WHITELABEL_DETAIL: { PATH: "/solution/whitelabel/:id", COMPONENT: WhiteLabelDetail },
    },
};

export default ROUTES;

// TYPES
type TRouteItem = {
    PATH: string;
    COMPONENT: () => ReactNode;
};
type TROUTE = {
    HOME: TRouteItem;
    COMPANY: TRouteItem;
    BLOG: TRouteItem;
    BLOG_ARTICLE: TRouteItem;
    SERVICES: { POC: TRouteItem; MVP: TRouteItem; FDP: TRouteItem; SUPPORT: TRouteItem };
    SOLUTION: { WHITELABEL: TRouteItem; WHITELABEL_DETAIL: TRouteItem };
};
