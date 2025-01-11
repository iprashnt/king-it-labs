// IMAGES
import LeftBgImage from "../../assets/images/home_topleft.png";
import RightBgImage from "../../assets/images/home_topright.png";
import LeftBgImageSmall from "../../assets/images/home_topleft_small.png";
import RightBgImageSmall from "../../assets/images/home_topright_small.png";
import BottomBgImage from "../../assets/images/home_top_umbrella_point.png";
import BottomBgImageSmall from "../../assets/images/home_top_umbrella_point_small.png";
import BrandListImage from "../../assets/images/home_brand_list.png";
import BrandListImageSmall from "../../assets/images/home_brand_list_small.png";

const TopSection = () => {
    return (
        <div className="mt-[2rem] xl:mb-24 lg:mb-24 md:mb-18 mb-[16rem]">
            <div className="relative w-full flex justify-between items-center">
                <img src={LeftBgImage} className="left-0 xl:block lg:block md:block hidden" />
                <img src={RightBgImage} className="right-0 xl:block lg:block md:block hidden" />
                <img src={LeftBgImageSmall} className="left-0 xl:mt-0 lg:mt-0 md:mt-0 mt-20 xl:hidden lg:hidden md:hidden block" />
                <img src={RightBgImageSmall} className="right-0 xl:hidden lg:hidden md:hidden block" />
                <div className="absolute w-full xl:px-8 lg:px-8 md:px-4 px-4 xl:-top-5 lg:top-20 md:top-20">
                    <p className="text-white xl:text-8xl lg:text-7xl md:text-6xl text-5xl text-center xl:leading-[8rem] lg:leading-[7rem] md:leading-[5rem] leading-[4rem]">
                        We Revolutionize
                        <br /> Web3 Projects
                    </p>
                    <p className="text-[#CACACA] xl:text-[1.5rem] lg:text-[1.2rem] md:lg:text-[1.2rem] font-extralight text-center xl:mt-3 lg:mt-3 md:mt-3 mt-6">
                        We build decentralized applications that empower users
                        <br /> and get to market 30% faster with our agile approach.
                    </p>
                    <div className="w-full flex justify-center items-center xl:mt-[2.5rem] lg:mt-[2.5rem] md:mt-[2.5rem] mt-[2rem]">
                        <button className="bg-white px-[2rem] py-[0.75rem] rounded-xl font-medium">Let’s Get Started</button>
                    </div>
                </div>
                <div className="absolute left-0 right-0 xl:-bottom-[10rem] lg:-bottom-[8rem] md:bottom-2 -bottom-[16rem]">
                    <img src={BottomBgImage} className="w-full xl:block lg:block md:block hidden" />
                    <img src={BottomBgImageSmall} className="w-full xl:hidden lg:hidden md:hidden block" />
                    <img src={BrandListImage} className="w-full absolute bottom-10 xl:block lg:block md:block hidden" />
                    <img src={BrandListImageSmall} className="w-full absolute bottom-0 xl:hidden lg:hidden md:hidden block" />
                </div>
            </div>
            <div className="h-24"></div>
        </div>
    );
};

export default TopSection;
