import { useNavigate } from "react-router-dom";
import ROUTES from "../../navigation/routes";

// IMAGES
import cardImg1 from "../../assets/images/portfolio_card_1.png";
import cardImg2 from "../../assets/images/portfolio_card_2.png";
import cardImg3 from "../../assets/images/portfolio_card_3.png";
import cardImg4 from "../../assets/images/portfolio_card_4.png";
import cardImg5 from "../../assets/images/portfolio_card_5.png";
import cardImg6 from "../../assets/images/portfolio_card_6.png";

// COMPONENTS
import PortfolioProjectCard from "./PortfolioProjectCard";

const PortfolioProjects = () => {
    const navigate = useNavigate();

    // FUNCTIONS
    const cardClickHandler = (id: number) => {
        navigate(`${ROUTES.PORTFOLIO.PATH}/${id}`);
    };

    return (
        <div>
            <div className="grid xl:grid-cols-2 lg:grid-cols-2 gap-x-5 xl:gap-y-12 lg:gap-y-[6rem] md:gap-y-14 gap-y-14">
                <PortfolioProjectCard
                    image={cardImg1}
                    text1="Fireflies Token"
                    text2="Achieved $2.3M Revenue and +2.000 Wallets"
                    text3="Through King IT's Web3 expertise, Fireflies transformed travel to the greatest in the web3 environment andAchieved $2.3M in revenue, 98% user satisfaction, and over 2,000 wallets joined."
                    tagList={["Token Crowdsale", "Travel", "Binance"]}
                    className="bg-gradient-to-b from-[#1B1B1B] to-[#182020]"
                    buttonText="Learn More"
                    imageClassName="xl:-top-[4.5rem] lg:-top-[3.5rem] md:-top-[4.7rem] -top-[3rem]"
                    onClick={() => cardClickHandler(1)}
                />
                <PortfolioProjectCard
                    image={cardImg2}
                    text1="Sharkroll"
                    text2="Raised $628K and +1.000 Wallets"
                    text3="With King IT's blockchain innovation, Sharkroll reshaped online gaming and delivered a secure, seamless betting experience that redefines trust and performance in the gambling industry."
                    tagList={["Casino", "DEX", "Binance"]}
                    className="bg-gradient-to-b from-[#1D1D1D] to-[#0C1120]"
                    buttonText="Learn More"
                    imageClassName="xl:-top-[4.5rem] lg:-top-[3.7rem] md:-top-[4.7rem] -top-[3.5rem]"
                    onClick={() => cardClickHandler(2)}
                />
                <PortfolioProjectCard
                    image={cardImg3}
                    text1="Vesta"
                    text2="Own a Fraction of the Future of Property with Vesta"
                    text3="Empowered by King IT, Vesta bridges investors to tokenized real-world assets, unlocking growth in luxury properties and businesses through innovative opportunities."
                    tagList={["NFT Marketplace", "Binance"]}
                    className="bg-gradient-to-b from-[#1D1D1D] to-[#0C1120]"
                    buttonText="Visit Vesta"
                    imageClassName="xl:-top-[5.2rem] lg:-top-[4rem] md:-top-[5.4rem] -top-[3.5rem]"
                    onClick={() => cardClickHandler(3)}
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
                <PortfolioProjectCard
                    image={cardImg5}
                    text1="Jolly Whale"
                    text2="Token with a Purpose to Protect the Ocean"
                    text3="JollyWhale transforms meme coins into a force for good. With monthly community-voted donations from every transaction, it merges profitability with meaningful impact, proving that every trade can make a difference."
                    tagList={["Token Crowdsale", "Casino"]}
                    className="bg-gradient-to-b from-[#161616] to-[#0D1519]"
                    buttonText="Visit JollyWhale"
                    imageClassName="xl:-top-[5rem] lg:-top-[4rem] md:-top-[5.3rem] -top-[3.5rem]"
                    onClick={() => cardClickHandler(5)}
                />
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
            </div>
        </div>
    );
};

export default PortfolioProjects;
