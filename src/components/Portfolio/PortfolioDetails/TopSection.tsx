// IMAGES
import FirefliesImg from "../../../assets/images/portfolio_card_1.png";

// COMPONENTS
import WrapperLayout from "../../WrapperLayout";

const TopSection = () => {
    return (
        <WrapperLayout className="mt-8">
            <div className="flex xl:flex-row lg:flex-row md:flex-col-reverse flex-col-reverse">
                <div className="xl:w-[50%] lg:w-[50%] md:w-full w-full flex flex-col gap-[1.5rem]">
                    <p className="xl:text-[3rem] lg:text-[2.5rem] md:text-[2rem] text-[2rem] text-white">
                        Fireflies: Revolutionize Traveling with FFT
                    </p>
                    <p className="text-white font-light text-[1rem]">
                        Fireflies redefines travel with Web3 innovation, delivering seamless and secure experiences. With $2.3M in revenue generated,
                        98% user satisfaction, participation from 2000+ wallets, and 99.9% system uptime, this platform showcases the perfect blend of
                        blockchain technology and practical travel solutions.
                    </p>
                    <div className="flex flex-wrap gap-[1rem]">
                        <p className="bg-[#47474759] text-center py-[0.2rem] px-[0.7rem] text-white rounded-md font-light">Token Crowdfund</p>
                        <p className="bg-[#47474759] text-center py-[0.2rem] px-[0.7rem] text-white rounded-md font-light">Binance</p>
                    </div>
                    <div>
                        <button className="text-white py-[0.4rem] px-[0.9rem] border-2 rounded-xl">Visit Website</button>
                    </div>
                </div>
                <div className="xl:w-[50%] lg:w-[50%] md:w-full w-full flex justify-center items-center">
                    <img src={FirefliesImg} className="" />
                </div>
            </div>
        </WrapperLayout>
    );
};

export default TopSection;
