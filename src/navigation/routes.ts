import Company from "../pages/Company";

const ROUTES: TRoutes = [
    {
        Path: "/",
        Component: Company,
    },
];

export default ROUTES;

// TYPES
type TRoutes = Array<{
    Path: string;
    Component: () => JSX.Element;
}>;
