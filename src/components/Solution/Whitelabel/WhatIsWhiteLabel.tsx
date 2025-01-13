import WrapperLayout from "../../WrapperLayout";

const WhatIsWhiteLabel = () => {
    return (
        <WrapperLayout>
            <p className="text-white xl:text-[3.5rem] lg:text-[3.5rem] md:text-[3.5rem] text-[2.5rem] text-center mb-[1rem] xl:block lg:block md:block hidden">
                What is Whitelabel?
            </p>
            <p className="font-extralight text-white xl:text-[3.5rem] lg:text-[3.5rem] md:text-[3.5rem] text-[2.5rem] text-center mb-[1rem] xl:hidden lg:hidden md:hidden block">
                What is <span className="font-medium">Whitelabel</span>?
            </p>
            <p className="text-[#F0F0F0] text-center xl:text-[1.5rem] lg:text-[1.5rem] md:text-[1.5rem] text-[1.2rem] font-extralight leading-7">
                We provide full function products that you are freely customizing the brand color and interfaces. There will be no downtime to request
                user interface design and features.
            </p>
            <div className="grid grid-cols-3 gap-[1.5rem] mt-[3.188rem] mb-[5.375rem]">
                <button className="w-full py-[1rem] px-3 text-white xl:text-[1.5rem] lg:text-[1.5rem] md:text-[1rem] text-sm text-center font-extralight bg-black border-2 border-[#808080] rounded-full">
                    Customizable Interface
                </button>
                <button className="w-full py-[1rem] px-3 text-white xl:text-[1.5rem] lg:text-[1.5rem] md:text-[1rem] text-sm text-center font-extralight bg-black border-2 border-[#808080] rounded-full">
                    Quick Deployment
                </button>
                <button className="w-full py-[1rem] px-3 text-white xl:text-[1.5rem] lg:text-[1.5rem] md:text-[1rem] text-sm text-center font-extralight bg-black border-2 border-[#808080] rounded-full">
                    Secure Infrastructure
                </button>
            </div>
        </WrapperLayout>
    );
};

export default WhatIsWhiteLabel;
