// IMAGES
import MVPHeadingImage from "../../assets/images/mvp_heading.png";
import KnowYourAudience from "../../assets/images/know_your_audience.png";
import HighlightYourEdge from "../../assets/images/highlight_your_edge.png";
import PlanTheExperience from "../../assets/images/plan_the_experience.png";
import BuildTestImprove from "../../assets/images/build_test_improve.png";
import ConfirmScopeImage from "../../assets/images/confirm_scope.png";
import DevelopCoreFeature from "../../assets/images/develop_core_feature.png";
import ExecuteAndPlanImage from "../../assets/images/execute_and_plan.png";
import AnalyzeAndScaleImage from "../../assets/images/analyze_and_scale.png";

// COMPONENTS
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WrapperLayout from "../../components/WrapperLayout";
import Breadcrumb from "../../components/BlogArticle/Breadcrumb";
import FAQ from "../../components/FAQ";
import Heading from "../../components/Services/Heading";
import WhySection from "../../components/Services/WhySection";
import HowWeDoSection from "../../components/Services/HowWeDoSection";
import WhatWillYouGet from "../../components/Services/WhatWillYouGet";
import FormSection from "../../components/Services/FormSection";

const MVP = () => {
    const whyMVPData: Array<TPOCCommonItem> = [
        {
            id: 1,
            title: "Know Your Audience",
            description: "Test ideas with real users, gathering feedback early to ensure the product solves actual problems.",
            logo: KnowYourAudience,
        },
        {
            id: 2,
            title: "Highlight Your Edge",
            description: "Define what makes your product stand out and why people will love it over others.",
            logo: HighlightYourEdge,
        },
        {
            id: 3,
            title: "Plan the Experience",
            description: "Map out how users will engage with your product and focus on features they’ll value most.",
            logo: PlanTheExperience,
        },
        {
            id: 4,
            title: "Build, Test, Improve",
            description: "Create a simple version, get feedback from users, tweak it, and get ready for the big launch!",
            logo: BuildTestImprove,
        },
    ];
    const howWeMVPData: Array<TPOCCommonItem> = [
        {
            id: 1,
            title: "Define Goal & Scope",
            description: "Clarify what you want to achieve and outline the essential features and boundaries of your project.",
            logo: ConfirmScopeImage,
        },
        {
            id: 2,
            title: "Develop Core Features",
            description: "Build the key functionalities that solve user problems and align with your goals.",
            logo: DevelopCoreFeature,
        },
        {
            id: 3,
            title: "Test & Iterate",
            description: "Gather feedback, fix issues, and improve the product to ensure a smooth user experience.",
            logo: ExecuteAndPlanImage,
        },
        {
            id: 4,
            title: "Launch & Monitor",
            description: "Release your product, track performance, and make continuous updates based on user insights.",
            logo: AnalyzeAndScaleImage,
        },
    ];
    const whatWillYougetData: Array<TWhatWillYouGetItem> = [
        {
            id: 1,
            title: "Core Features",
            description: "A basic set of functionalities that solve the primary user problem, ensuring the product is usable and valuable.",
        },
        {
            id: 2,
            title: "User Feedback Mechanisms",
            description: "Tools or processes for collecting user feedback, such as surveys or analytics, to guide future iterations.",
        },
        {
            id: 3,
            title: "Quality Assurance (QA)",
            description: "Testing plans and processes to ensure the MVP functions correctly and meets quality standards before launch.",
        },
        {
            id: 4,
            title: "Launch Plan",
            description:
                "A strategy for deploying the MVP, including marketing efforts, target audience identification, and monitoring performance post-launch.",
        },
        {
            id: 5,
            title: "Testing Documentation",
            description: "This includes test cases, scripts, and results that provide insights into the prototype’s performance.",
        },
        {
            id: 6,
            title: "Final Report",
            description: "A document summarizing findings, feedback from testing, and recommendations for next steps.",
        },
    ];

    return (
        <Layout>
            <Navbar />
            <WrapperLayout>
                <Breadcrumb text1="Services" text2="Minimum Viable Product" />
                <Heading
                    title="Minimum Viable Product"
                    description="We’ll help you bring life with a streamlined MVP. Focused on core features, we’ll build a functional product you can test with users or pitch to investors. Fast, cost-effective, and built for growth—let’s turn your vision into reality!"
                    image={MVPHeadingImage}
                />
                <WhySection heading="Why MVP is popular?" cardData={whyMVPData} />
                <HowWeDoSection heading="How We Do PoCs" cardData={howWeMVPData} />
                <WhatWillYouGet heading="What You’ll Get" cardData={whatWillYougetData} />
            </WrapperLayout>
            <FormSection />
            <FAQ />
            <Footer />
        </Layout>
    );
};

export default MVP;

// TYPES
type TPOCCommonItem = {
    id: number;
    title: string;
    description: string;
    logo: string;
};
type TWhatWillYouGetItem = { id: number; title: string; description: string };
