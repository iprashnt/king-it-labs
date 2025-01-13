import { useNavigate } from "react-router-dom";
import ROUTES from "../../../navigation/routes";

// IMAGES
import Product1Img from "../../../assets/images/whitelabel_product1.png";
import Product2Img from "../../../assets/images/whitelabel_product2.png";
import Product3Img from "../../../assets/images/whitelabel_product3.png";
import Product4Img from "../../../assets/images/whitelabel_product4.png";
import Product5Img from "../../../assets/images/whitelabel_product5.png";

// COMPONENTS
import WrapperLayout from "../../WrapperLayout";

const OtherProducts = () => {
    const navigate = useNavigate();

    // MOCK DATA
    const productData = [
        {
            id: 1,
            title: "NFT Marketplace",
            desc: "Trading platform for unique digital products and collectibles. Securely build within blockchain technology.",
            logo: Product1Img,
        },
        {
            id: 2,
            title: "Casino",
            desc: "Trading platform for unique digital products and collectibles. Securely build within blockchain technology.",
            logo: Product2Img,
        },
        {
            id: 3,
            title: "Whitelabel NFT/Token Launchpad",
            desc: "Trading platform for unique digital products and collectibles. Securely build within blockchain technology.",
            logo: Product3Img,
        },
        {
            id: 4,
            title: "DEX",
            desc: "Trading platform for unique digital products and collectibles. Securely build within blockchain technology.",
            logo: Product4Img,
        },
        {
            id: 5,
            title: "Token/NFT-Based Crowdsale Contract",
            desc: "Trading platform for unique digital products and collectibles. Securely build within blockchain technology.",
            logo: Product5Img,
        },
    ];

    // FUNCTIONS
    const learnMoreHandler = (id: number) => {
        navigate(`${ROUTES.SOLUTION.WHITELABEL.PATH}/${id}`);
    };

    return (
        <div className="mt-16">
            <WrapperLayout>
                <p className="text-white font-normal text-[2.5rem] mb-[1.5rem]">See Other Whitelabel Products</p>
                <div className="flex flex-nowrap overflow-x-scroll gap-5 p-1">
                    {productData.map(({ id, title, desc, logo }) => {
                        return (
                            <div
                                key={id}
                                className="flex justify-center items-center w-[26.313rem] h-[11.25rem] border-2 border-[#515151] rounded-lg"
                            >
                                <div className="w-[11.25rem] h-full rounded-lg overflow-hidden">
                                    <img src={logo} className="object-fill" />
                                </div>
                                <div className="bg-gradient-to-r from-[#080808] to-[#333333] flex justify-center items-center p-[0.8rem] w-[15.063rem] h-full rounded-tr-lg rounded-br-lg">
                                    <div className="h-full flex flex-col justify-between">
                                        <div className="flex flex-col gap-1">
                                            <p className="text-white font-medium text-lg line-clamp-1">{title}</p>
                                            <p className="text-white font-light text-sm line-clamp-3">{desc}</p>
                                        </div>
                                        <div className="flex justify-end items-center">
                                            <button
                                                onClick={() => learnMoreHandler(id)}
                                                className="border-2 border-white rounded-lg text-white font-normal text-sm py-1 px-2"
                                            >
                                                Learn More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </WrapperLayout>
        </div>
    );
};

export default OtherProducts;
