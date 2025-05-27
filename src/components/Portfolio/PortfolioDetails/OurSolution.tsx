// IMAGES
import OurSolutionBgImg from "../../../assets/images/grid.png";
import MacPcImg from "../../../assets/images/mac_pc.png";
import WrapperLayout from "../../WrapperLayout";

// COMPONENTS

const OurSolution = () => {
    return (
        <div className="relative mt-[5rem] flex justify-center items-center">
            <img src={OurSolutionBgImg} className="absolute" />
            <WrapperLayout className="z-10">
                <p className="text-[6rem] text-center bg-clip-text text-transparent bg-gradient-to-r from-[#999999] via-[#FFFFFF] t-[#999999]">
                    Our Solution
                </p>
                <div className="flex justify-center">
                    <img src={MacPcImg} className="" />
                </div>
                <ol className="list-decimal mt-10">
                    <li className="text-white font-extralight text-[1rem]">
                        Solve travel challenges with a blockchain-powered platform. Streamline bookings by integrating flights, stays, and experiences
                        into one interface.
                    </li>
                    <li className="text-white font-extralight text-[1rem]">
                        Ensure transparent pricing with no hidden fees and secure user data with decentralized identity.
                    </li>
                    <li className="text-white font-extralight text-[1rem]">
                        Promote sustainability by offering carbon-offset options and eco-friendly rewards, creating a more efficient, secure, and
                        environmentally conscious travel experience for modern travelers.
                    </li>
                </ol>
            </WrapperLayout>
        </div>
    );
};

export default OurSolution;
