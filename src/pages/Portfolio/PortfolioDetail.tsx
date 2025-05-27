// COMPONENTS
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import FormSection from "../../components/Services/FormSection";
import PortfolioProjects from "../../components/Portfolio/PortfolioDetails/PortfolioProjects";
import TopSection from "../../components/Portfolio/PortfolioDetails/TopSection";
import KeyFeatures from "../../components/Portfolio/PortfolioDetails/KeyFeatures";
import OurSolution from "../../components/Portfolio/PortfolioDetails/OurSolution";
import StackUsed from "../../components/Portfolio/PortfolioDetails/StackUsed";

const PortfolioDetail = () => {
    return (
        <Layout>
            <Navbar />
            <TopSection />
            <KeyFeatures />
            <OurSolution />
            <StackUsed />
            <FormSection className="!mt-20" />
            <PortfolioProjects />
            <Footer />
        </Layout>
    );
};

export default PortfolioDetail;
