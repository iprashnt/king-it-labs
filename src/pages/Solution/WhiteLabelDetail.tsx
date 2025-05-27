// COMPONENTS
import FAQ from "../../components/FAQ";
import Footer from "../../components/Footer";
import TopSection from "../../components/Solution/WhitelabelDetail/TopSection";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import Features from "../../components/Solution/WhitelabelDetail/Features";
import OtherProducts from "../../components/Solution/WhitelabelDetail/OtherProducts";
import FormSection from "../../components/Solution/WhitelabelDetail/FormSection";

const WhiteLabelDetail = () => {
    return (
        <Layout>
            <Navbar />
            <TopSection />
            <Features />
            <FAQ className="xl:px-[7rem] lg:px-[4rem] md:px-[3rem] px-[1rem]" />
            <OtherProducts />
            <FormSection />
            <Footer />
        </Layout>
    );
};

export default WhiteLabelDetail;
