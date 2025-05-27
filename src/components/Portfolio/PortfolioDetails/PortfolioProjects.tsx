import { useNavigate } from "react-router-dom";
import ROUTES from "../../../navigation/routes";

// IMAGES
import cardImg4 from "../../../assets/images/portfolio_card_4.png";
import cardImg6 from "../../../assets/images/portfolio_card_6.png";

// COMPONENTS
import PortfolioProjectCard from "../PortfolioProjectCard";
import WrapperLayout from "../../WrapperLayout";

const PortfolioProjects = () => {
    const navigate = useNavigate();

    // FUNCTIONS
    const cardClickHandler = (id: number) => {
        navigate(`${ROUTES.PORTFOLIO.PATH}/${id}`);
    };

    return (
        <WrapperLayout className="mb-10">
            <div className="grid xl:grid-cols-2 lg:grid-cols-2 gap-x-5 xl:gap-y-12 lg:gap-y-[6rem] md:gap-y-14 gap-y-14">
                <PortfolioProjectCard
                    image={cardImg6}
                    text1="Aurum Vestra Asset"
                    text2="Optimal Investments with Analytics and Advisory Tools"
                    text3="Aurum Vestra, powered by King IT’s expertise, delivers advanced portfolio tools and analytics to investors and advisors, enabling strategic growth and financial success."
                    tagList={["Asset Management", "Extension"]}
                    className="bg-gradient-to-b from-[#171714] to-[#1E1D0E]"
                    buttonText="Visit JollyWhale"
                    imageClassName="xl:-top-[5.3rem] lg:-top-[4.5rem] md:-top-[5rem] -top-[3.5rem]"
                    onClick={() => cardClickHandler(6)}
                />

                <PortfolioProjectCard
                    image={cardImg4}
                    text1="CasiNeo"
                    text2="Raised $150k and Gained 450 Wallets Participation"
                    text3="CasiNeo redefines the casino experience by bringing transparency, security, and innovation through Web3 technology. Built on blockchain by KingIT, CasiNeo offers fair games, instant payouts, and true ownership of digital assets."
                    tagList={["Token Crowdsale", "Casino"]}
                    className="bg-gradient-to-b from-[#1A191A] to-[#211320]"
                    buttonText="Visit CasiNeo"
                    imageClassName="xl:-top-[1.7rem] lg:-top-[1.3rem] md:-top-[1.5rem] -top-[1.5rem]"
                    onClick={() => cardClickHandler(4)}
                />
            </div>
        </WrapperLayout>
    );
};

export default PortfolioProjects;
