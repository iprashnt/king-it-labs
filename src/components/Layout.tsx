import { FC, ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";

// IMAGES
import bgImage from "../assets/images/gradLight.png";

const Layout: FC<Props> = ({ children }) => {
    const { pathname } = useLocation();

    // EFFECTS
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <main
            className="flex-grow pt-10 bg-[#0E0E0E] min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="mt-[4rem] flex flex-col min-h-screen">{children}</div>
        </main>
    );
};

export default Layout;

// TYPES
interface Props {
    children: ReactNode;
}
