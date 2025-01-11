// COMPONENTS
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import FormSection from "../components/Services/FormSection";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import TopSection from "../components/Home/TopSection";
import SeeOurWork from "../components/Home/SeeOurWork";
import SuitesYourNeeds from "../components/Home/SuitesYourNeeds";
import MarketReadyScripts from "../components/Home/MarketReadyScripts";
import OurProducts from "../components/Home/OurProducts";
import YourVision from "../components/Home/YourVision";
import WhatTheySay from "../components/Home/WhatTheySay";

const Home = () => {
    return (
        <Layout>
            <Navbar />
            <TopSection />
            <SeeOurWork />
            <SuitesYourNeeds />
            <MarketReadyScripts />
            <OurProducts />
            <YourVision />
            <WhatTheySay />
            <FormSection />
            <FAQ />
            <Footer />
        </Layout>
    );
};

export default Home;
