const WhatWillYouGet = () => {
    // MOCK DATA
    const cardData: Array<TCardData> = [
        {
            id: 1,
            title: "Proof of Concept Plan",
            description: "A detailed outline that defines the objectives, success criteria, and timeline for the PoC.",
        },
        {
            id: 2,
            title: "Research Findings",
            description: "Documentation of user interviews, market research, and pain points identified from potential users.",
        },
        {
            id: 3,
            title: "Prototype Design",
            description: "A working model or prototype that demonstrates the core functionality of the idea being tested.",
        },
        {
            id: 4,
            title: "Implementation Plan",
            description: "A strategy for how the PoC will be executed, including resources needed and roles assigned.",
        },
        {
            id: 5,
            title: "Testing Documentation",
            description: "This includes test cases, scripts, and results that provide insights into the prototype’s performance.",
        },
        {
            id: 6,
            title: "Final Report",
            description: "A document summarizing findings, feedback from testing, and recommendations for next steps.",
        },
    ];

    return (
        <div className="mt-[4rem]">
            <p className="text-white text-[2.5rem] font-extralight text-center mb-[2rem]">What You’ll Get</p>
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-[1.188rem]">
                {cardData.map(({ id, title, description }) => {
                    return (
                        <div key={id} className="bg-[#202020] w-full p-[1.5rem] rounded-2xl border-2 border-[#808080]">
                            <p className="text-[1.5rem] text-white font-bold mb-[1rem] line-clamp-1">{title}</p>
                            <p className="text-[#F0F0F0] text-[1rem] font-extralight line-clamp-4">{description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default WhatWillYouGet;

// TYPES
type TCardData = {
    id: number;
    title: string;
    description: string;
};
