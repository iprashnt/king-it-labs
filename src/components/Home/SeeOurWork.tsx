import { useState } from "react";

// IMAGES
import OurWorkLaptop from "../../assets/images/our_work_laptop.png";

// COMPONENTS
import WrapperLayout from "../WrapperLayout";

const SeeOurWork = () => {
    const ourWorksData = [
        {
            id: 0,
            value: "Fireflies",
        },
        {
            id: 1,
            value: "Sharkroll",
        },
        {
            id: 2,
            value: "Vesta",
        },
        {
            id: 3,
            value: "CasiNeo",
        },
        {
            id: 4,
            value: "JollyWhale",
        },
    ];

    // STATES
    const [selectedWork, setSelectedWork] = useState(0);

    // FUNCTIONS
    const selectWorkHandler = (value: number) => {
        setSelectedWork(value);
    };

    return (
        <div className="xl:mt-20">
            <WrapperLayout>
                <p className="text-white xl:text-[4rem] lg:text-[3rem] md:text-[3rem] text-[3rem] text-center mb-[2.5rem]">See Our Work</p>
                <div className="flex xl:flex-row lg:flex-row md:flex-col flex-col xl:gap-0 lg:gap-0 md:gap-10 gap-8">
                    <div className="xl:w-[80%] lg:w-[80%] md:w-full w-full flex justify-between items-center">
                        {ourWorksData.map(({ id, value }) => {
                            return (
                                <p
                                    key={id}
                                    onClick={() => selectWorkHandler(id)}
                                    className={`${
                                        selectedWork === id ? "text-white border-b-2 border-b-[#4AB4FF]" : "text-[#969696]"
                                    } xl:text-[1.125rem] lg:text-[1.125rem] md:text-[1rem] p-[0.6rem] cursor-pointer`}
                                >
                                    {value}
                                </p>
                            );
                        })}
                    </div>
                    <div className="xl:w-[20%] lg:w-[20%] md:w-full flex xl:justify-center lg:justify-center md:justify-start justify-start items-center xl:block lg:block md:block hidden">
                        <button className="bg-black border-2 xl:text-[1rem] lg:text-[1rem] md:text-[1rem] px-[1rem] py-[0.625rem] border-white rounded-xl text-white">
                            See More Projects
                        </button>
                    </div>
                </div>
                <div className="flex xl:flex-row lg:flex-row md:flex-col-reverse flex-col-reverse min-h-[31.188rem] mt-[4rem] mb-[4rem] gap-10">
                    <div className="flex flex-col justify-center xl:w-[50%] lg:w-[50%] md:w-full">
                        <p className="text-[2rem] text-white">Achieved $2.3M revenue and 2.000+ wallet participation.</p>
                        <p className="text-[#F0F0F0] text-[1.125rem] font-extralight mt-[1.5rem]">
                            Fireflies was built in 3 months by our team which blends Web3 innovation with secure, seamless travel solutions.
                            Generating $2.3M in revenue, 98% user satisfaction, and 2000+ wallet participation.
                        </p>
                        <div className="w-fit mt-[1.5rem] flex-wrap">
                            <button className="mr-4 w-fit text-white font-medium text-base bg-[#47474759] py-[0.375rem] px-[0.75rem] rounded-xl">
                                Travel
                            </button>
                            <button className="mr-4 w-fit text-white font-medium text-base bg-[#47474759] py-[0.375rem] px-[0.75rem] rounded-xl">
                                Binance
                            </button>
                            <button className="mr-4 w-fit text-white font-medium text-base bg-[#47474759] py-[0.375rem] px-[0.75rem] rounded-xl">
                                Web App
                            </button>
                            <button className="mr-4 w-fit text-white font-medium text-base bg-[#47474759] py-[0.375rem] px-[0.75rem] rounded-xl xl:mt-0 lg:mt-0 md:mt-0 mt-4">
                                Token Launch
                            </button>
                        </div>
                        <div className="flex xl:mt-[3rem] lg:mt-[3rem] md:mt-[3rem] mt-[2rem] xl:justify-start lg:justify-start md:justify-start justify-center">
                            <button className="w-fit bg-white text-black font-medium px-[1rem] py-[0.5rem] rounded-lg text-center">Read More</button>
                        </div>
                    </div>
                    <div className="xl:w-[50%] lg:w-[50%] md:w-full flex justify-center items-center">
                        <img src={OurWorkLaptop} className="xl:w-full lg:w-full md:w-[70%] w-full" />
                    </div>
                </div>
            </WrapperLayout>
        </div>
    );
};

export default SeeOurWork;
