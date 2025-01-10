// COMPONENTS
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WrapperLayout from "../../components/WrapperLayout";
import Breadcrumb from "../../components/BlogArticle/Breadcrumb";
import FAQ from "../../components/FAQ";

const Services = () => {
    return (
        <Layout>
            <Navbar />
            <WrapperLayout>
                <Breadcrumb text1="Services" text2="5 Efficient Rules How to Organize Your Working Place" />
            </WrapperLayout>
            <FAQ />
            <Footer />
        </Layout>
    );
};

export default Services;
