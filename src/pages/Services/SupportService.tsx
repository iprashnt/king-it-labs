// COMPONENTS
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import WrapperLayout from "../../components/WrapperLayout";
import Breadcrumb from "../../components/BlogArticle/Breadcrumb";
import FormSection from "../../components/Services/FormSection";
import FAQ from "../../components/FAQ";
import Footer from "../../components/Footer";
import Heading from "../../components/Services/Heading";
import WhatWeCanSupportWithYou from "../../components/Services/WhatWeCanSupportWithYou";

const SupportService = () => {
    return (
        <Layout>
            <Navbar />
            <WrapperLayout>
                <Breadcrumb text1="Services" text2="Support Services" />
                <Heading
                    title="Support Services"
                    description="We’re here to keep your business running smoothly with expert IT support tailored to your needs. Let us handle the technical details so you can focus on growing your business."
                />
                <WhatWeCanSupportWithYou />
            </WrapperLayout>
            <FormSection />
            <FAQ />
            <Footer />
        </Layout>
    );
};

export default SupportService;
