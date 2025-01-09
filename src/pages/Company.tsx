// COMPONENTS
import FAQ from "../components/FAQ";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatWeDo from "../components/Company/WhatWeDo";
import JoinKingItLabs from "../components/Company/JoinKingItLabs";
import WhosBehindKingItLab from "../components/Company/WhosBehindKingItLab";
import WelcomeToKingItLabs from "../components/Company/WelcomeToKingItLabs";

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <WelcomeToKingItLabs />
            <WhatWeDo />
            <WhosBehindKingItLab />
            <JoinKingItLabs />
            <FAQ />
            <Footer />
        </div>
    );
};

export default Home;
