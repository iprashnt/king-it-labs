// COMPONENTS
import FAQ from "../../components/FAQ";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import LaunchYourProduct from "../../components/Solution/Whitelabel/LaunchYourProduct";
import WhatIsWhiteLabel from "../../components/Solution/Whitelabel/WhatIsWhiteLabel";
import WhitelabelProducts from "../../components/Solution/Whitelabel/WhitelabelProducts";

const WhiteLabel = () => {
    return (
        <Layout>
            <Navbar />
            <LaunchYourProduct />
            <WhatIsWhiteLabel />
            <WhitelabelProducts />
            <FAQ />
            <Footer />
        </Layout>
    );
};

export default WhiteLabel;
