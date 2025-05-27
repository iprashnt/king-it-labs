// IMAGES
import externalLink from "../../assets/images/externalLink.png";

// COMPONENTS
import MainHeading from "../MainHeading";

const JoinKingItLabs = () => {
    // MOCK DATA
    const careerData: TCareerData = [
        {
            id: 1,
            title: "Teach Lead",
            buttons: ["Contract", "Remote", "Senior Level"],
            content:
                "We’re looking for talented professionals to join KingIT Lab! Explore our open positions and work remotely on cutting-edge Web3 and fintech projects.",
        },
        {
            id: 2,
            title: "Senior Software Engineer",
            buttons: ["Contract", "Remote", "Senior Level"],
            content:
                "We’re looking for talented professionals to join KingIT Lab! Explore our open positions and work remotely on cutting-edge Web3 and fintech projects.",
        },
        {
            id: 3,
            title: "Blockchain Developer",
            buttons: ["Contract", "Remote", "Senior Level"],
            content:
                "We’re looking for talented professionals to join KingIT Lab! Explore our open positions and work remotely on cutting-edge Web3 and fintech projects.",
        },
        {
            id: 4,
            title: "Product Manager",
            buttons: ["Contract", "Remote", "Senior Level"],
            content:
                "We’re looking for talented professionals to join KingIT Lab! Explore our open positions and work remotely on cutting-edge Web3 and fintech projects.",
        },
    ];

    return (
        <div className="bg-[#0E0E0E] flex flex-col items-center">
            <MainHeading className="mb-[1rem]" text="Join King IT Labs" />
            <p className="text-white text-lg font-light leading-[1.5rem] mb-[1rem]  sm:px-8 md:px-12 text-center hidden md:block">
                We’re dedicated to crafting exceptional software solutions and nurturing talent. <br /> If you’re passionate about technology and
                eager to make an impact, come grow with us <br /> and help shape the future of digital innovation!
            </p>

            {/* Cards Section */}
            <div className="w-full flex justify-center py-6 px-6">
                <div className="w-auto grid xl:grid-cols-2 lg:grid-cols-2 md:lg:grid-cols-1 grid-cols-1 gap-4">
                    {careerData.map(({ id, title, buttons, content }) => {
                        return (
                            <div
                                key={id}
                                className="flex flex-col justify-between border border-[#434444] bg-[#15171A] p-[1.5rem] rounded-lg xl:w-[36.2rem] xl:h-auto lg:w-[30rem] lg:h-auto"
                            >
                                <div>
                                    <h3 className="text-white xl:text-[2.5rem] lg:text-[2.5rem] md:text-[2.5rem] text-[1.25rem] mb-3">{title}</h3>
                                    <div className="flex space-x-4 my-[1rem]">
                                        {buttons.map((button, index) => (
                                            <button
                                                key={index}
                                                className="bg-[#26282A] text-white py-1 xl:px-4 lg:px-4 md:px-4 px-[0.4rem] rounded-md min-w-min xl:text-[1.1rem] lg:text-[1.1rem] md:text-[1.1rem] text-[0.75rem]"
                                            >
                                                {button}
                                            </button>
                                        ))}
                                    </div>
                                    <p className="text-white xl:text-[1.1rem] lg:text-[1.1rem] md:text-[1.1rem] text-[1rem] font-extralight mb-[1.5rem]">
                                        {content}
                                    </p>
                                </div>
                                <div className="flex justify-center items-center gap-[16px] border border-spacing-1 cursor-pointer text-white h-[2.5rem] py-1 px-4 rounded-md w-full text-xs">
                                    <p className="xl:text-[1rem] lg:text-[1rem] md:text-[1rem] text-[1rem] font-[600]">View in LinkedIn</p>
                                    <img src={externalLink} width={16} height={16} className="mt-[0.4rem]" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <button className="min-w-min h-[2.8rem] bg-white px-[1.5rem] text-[1.1rem] rounded-lg mb-[4.5rem] mt-[1.5rem]">Find Your Role</button>
        </div>
    );
};

export default JoinKingItLabs;

// TYPES
type TCareerData = Array<{
    id: number;
    title: string;
    buttons: Array<string>;
    content: string;
}>;
