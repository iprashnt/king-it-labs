import { useState } from "react";

// IMAGES
import backgroundImage from "../assets/images/bg.png";

// ICONS
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQ = () => {
    // MOCK DATA
    const faqData: TFaqData = [
        {
            question: "What is KingIT Labs’ mission?",
            answer: "Our mission is to empower businesses with cutting-edge Web3 software solutions, focusing on Blockchain, Decentralized applications, and Tokenomics.",
        },
        {
            question: "Where is KingIT Labs located?",
            answer: "Our mission is to empower businesses with cutting-edge Web3 software solutions, focusing on Blockchain, Decentralized applications, and Tokenomics.",
        },
        {
            question: "How long has KingIT Labs been in Operation?",
            answer: "Our mission is to empower businesses with cutting-edge Web3 software solutions, focusing on Blockchain, Decentralized applications, and Tokenomics.",
        },
        {
            question: "Who are your Key Clients?",
            answer: "Our mission is to empower businesses with cutting-edge Web3 software solutions, focusing on Blockchain, Decentralized applications, and Tokenomics.",
        },
        {
            question: "How can I collaborate with KingIT Labs?",
            answer: "Our mission is to empower businesses with cutting-edge Web3 software solutions, focusing on Blockchain, Decentralized applications, and Tokenomics.",
        },
    ];

    // STATES & REFS
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    // FUCTIONS
    const toggleAnswer = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div
            className="bg-[#0E0E0E] flex flex-col items-center py-1"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Center Text */}
            <div className="w-full mt-[2rem] mb-[2.5rem]">
                <p className="xl:mx-[9.4rem] lg:mx-[2rem] md:mx-[2rem] mx-[2rem] xl:text-[4rem] lg:text-[4rem] md:text-[3rem] text-[2rem] font-[200] text-white xl:mb-[1rem] lg:mb-[1rem]">
                    Frequently Asked Questions
                </p>
            </div>

            {/* FAQ Questions and Answers */}
            <div className="w-full max-w-7xl text-white px-6 sm:px-4 ml-0 sm:ml-0">
                {faqData.map((item, index) => (
                    <div key={index} className="mb-6 p-4 rounded-lg shadow-md w-full">
                        {/* Question */}
                        <div
                            onClick={() => toggleAnswer(index)}
                            className="text-blue-500 cursor-pointer flex items-center justify-between border-b border-[#393939] pb-3"
                        >
                            <p className="xl:text-[1.5rem] lg:text-[1.5rem] md:text-[1.5rem] text-[1.1rem]">{item.question}</p>
                            {activeIndex === index ? <FaChevronUp className="text-blue-500" /> : <FaChevronDown className="text-blue-500" />}
                        </div>

                        {/* Answer */}
                        {activeIndex === index && (
                            <p className="mt-3 text-[1rem] font-extralight break-all text-[#FFFFFF] leading-relaxed">{item.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;

// TYPES
type TFaqData = Array<{
    question: string;
    answer: string;
}>;
