// IMAGES
import PocHeadingImage from "../../assets/images/poc_heading.png";
import ReduceRiskAndLossImage from "../../assets/images/reduce_risk_and_loss.png";
import FoundationGrowthImage from "../../assets/images/foundation_growth.png";
import EveryoneOnBoardImage from "../../assets/images/everyone_on_board.png";
import ShortTestingPhaseImage from "../../assets/images/short_testing_phase.png";
import ConfirmScopeImage from "../../assets/images/confirm_scope.png";
import SetGoalAndTimeImage from "../../assets/images/set_goal_and_time.png";
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

const Services = () => {
    const whyPocData: Array<TPOCCommonItem> = [
        {
            id: 1,
            title: "Reduce Risks and Loss",
            description: "It helps you spot any bumps and rocks in the road early on, saving you from bigger headaches later.",
            logo: ReduceRiskAndLossImage,
        },
        {
            id: 2,
            title: "Foundation for Growth",
            description: "It sets the stage for development by identifying key requirements and refining the solution.",
            logo: FoundationGrowthImage,
        },
        {
            id: 3,
            title: "Get Everyone on Board",
            description: "A solid PoC can help convince stakeholders and investors that your idea is worth pursuing.",
            logo: EveryoneOnBoardImage,
        },
        {
            id: 4,
            title: "Short Testing Phase",
            description: "You’ll get feedback and results in no more than 2 months. Allowing you to decide before committing costly development.",
            logo: ShortTestingPhaseImage,
        },
    ];
    const howWePocData: Array<TPOCCommonItem> = [
        {
            id: 1,
            title: "Confirm Scope",
            description:
                "We’ll talk to understand your vision and our team digs into the details to see what’s feasible and what could make your idea successful.",
            logo: ConfirmScopeImage,
        },
        {
            id: 2,
            title: "Set Goals & Time",
            description:
                "Define specific objectives, success metrics, outline key milestones, and timeline to guide the research & exploration effectively.",
            logo: SetGoalAndTimeImage,
        },
        {
            id: 3,
            title: "Execute & Plan",
            description:
                "We whip up a prototype that brings your idea to life, showing how it works in practice to real users in order to get their feedback.",
            logo: ExecuteAndPlanImage,
        },
        {
            id: 4,
            title: "Analyze & Scale",
            description:
                "After gathering feedback, we synthesize the result and share a report with our findings and suggestions for your next steps.",
            logo: AnalyzeAndScaleImage,
        },
    ];

    return (
        <Layout>
            <Navbar />
            <WrapperLayout>
                <Breadcrumb text1="Services" text2="Proof of Concept" />
                <Heading
                    title="Proof of Concept"
                    description="Need a way to test out your idea in under 8 weeks? Proof of Concept helps you see if your product or technology can really work in the real world. Think of it as a sneak peek that shows whether your concept has potential."
                    image={PocHeadingImage}
                />
                <WhySection heading="Why Go for a PoC?" cardData={whyPocData} />
                <HowWeDoSection heading="How We Do PoCs" cardData={howWePocData} />
                <WhatWillYouGet />
            </WrapperLayout>
            <FormSection />
            <FAQ />
            <Footer />
        </Layout>
    );
};

export default Services;

// TYPES
type TPOCCommonItem = {
    id: number;
    title: string;
    description: string;
    logo: string;
};
