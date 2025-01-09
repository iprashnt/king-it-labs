import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Slider from "react-slick";

// 
import Navbar from "./Navbar";
import Footer from "./Footer";
import bgImage from "../assets/images/gradLight.png"; 
import columnLine from "../assets/images/columnLine.png";
import columnLine2 from "../assets/images/CloumnLine2.png"; 
import one from "../assets/images/one.png"; 
import two from "../assets/images/two.png"; 
import three from "../assets/images/three.png"; 
import four from "../assets/images/four.png"; 
import image0 from "../assets/images/image (0).png";
import image1 from "../assets/images/image (1).png";
import image2 from "../assets/images/image (2).png";
import image3 from "../assets/images/image (3).png";
import image4 from "../assets/images/image (4).png";
import image5 from "../assets/images/image (5).png";
import image6 from "../assets/images/image (6).png";
import image7 from "../assets/images/image (7).png";
// 
import externalLink from "../assets/images/externalLink.png";
import whos_behind_left_bg from "../assets/images/whos_behind_left_bg.png";
import whos_behind_right_bg from "../assets/images/whos_behind_right_bg.png";
import backgroundImage from "../assets/images/bg.png";

// 
import img1Full from "../assets/images/img1.jpg";
import img2Full from "../assets/images/img2.jpg";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
    const customImages = [{img:img1Full,title:"1"}, {img: img2Full,title:"2"}];


    const [activeIndex, setActiveIndex] = useState<number|null>(null);

    const toggleAnswer = (index:number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
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

    const Card = ({ title, buttons, content }:{title:string;buttons:Array<string>; content:string}) => (
        <div className="flex flex-col justify-between border border-[#434444] bg-[#15171A] p-[1.5rem] rounded-lg xl:w-[36.2rem] xl:h-auto lg:w-[30rem] lg:h-auto">
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
                <p className="text-white xl:text-[1.1rem] lg:text-[1.1rem] md:text-[1.1rem] text-[1rem] font-extralight mb-[1.5rem]">{content}</p>
            </div>
            <div className="flex justify-center items-center gap-[16px] border border-spacing-1 cursor-pointer text-white h-[2.5rem] py-1 px-4 rounded-md w-full text-xs">
                <p className="xl:text-[1rem] lg:text-[1rem] md:text-[1rem] text-[1rem] font-[600]">View in LinkedIn</p>
                <img src={externalLink} width={16} height={16} className="mt-[0.4rem]" />
            </div>
        </div>
    );

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main
                className="flex-grow pt-10 text-center bg-[#0E0E0E] text-white min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <div>
                    <p className="xl:text-[4rem] lg:text-[4rem] md:text-[3rem] text-[1.7rem] my-[2.5rem] font-[500]">Welcome to KingITLabs</p>
                    <p className="xl:text-[1.25rem] lg:text-[1.25rem] md:text-[1.25rem] text-[1rem] font-extralight leading-[1.5rem] font-inter mt-4 px-6 sm:px-8 md:px-12 text-center hidden md:block">
                        We envision a future where technology drives growth and creativity, connecting talented professionals <br /> with
                        forward-thinking clients to turn ideas into reality and foster lasting partnerships built on trust, <br /> innovation, and
                        excellence. Let’s embark on this exciting journey together!
                    </p>
                    <p className="xl:text-[1.25rem] lg:text-[1.25rem] md:text-[1.25rem] text-[1rem] font-extralight mt-4 px-6 sm:px-8 md:px-12 text-center block md:hidden">
                        We build decentralized applications that empower users and get to market 30% faster with our agile approach.
                    </p>
                    {/* Help Button - Visible only on mobile */}
                    <button className="block md:hidden mt-4 px-6 py-2 text-sm text-black bg-white border border-black rounded-md mx-auto">
                        Let's Get Started
                    </button>
                    {/* 4-column layout */}
                    {/* XL & LG */}
                    <div className="flex justify-center items-center">
                        <div className="xl:w-[70%] lg:w-[80%] md:w-[90%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-12 px-6 sm:px-8 md:px-12 lg:px-16">
                            <div className="text-center relative">
                                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-500">60+</div>
                                <div className="xl:text-lg lg:text-base md:text-base text-sm lg:font-extralight md:font-extralight font-extralight mt-2">
                                    Professional
                                </div>
                                <div className="absolute right-0 xl:top-0 lg:top-0 md:top-14 h-full">
                                    {/* Column Line for Mobile (L and M) */}
                                    <img
                                        src={columnLine2} // This will be shown on mobile L and M
                                        alt=""
                                        className="h-12 sm:h-16 md:h-20 object-contain block lg:hidden" // 'lg:hidden' ensures it's hidden on tablet/desktop
                                    />
                                    {/* Column Line for Larger Screens (Tablet and Above) */}
                                    <img
                                        src={columnLine} // This will be shown on larger screens
                                        alt=""
                                        className="h-12 sm:h-16 md:h-20  object-contain hidden lg:block" // 'hidden lg:block' ensures it's visible only on large screens and above
                                    />
                                </div>
                            </div>

                            <div className="text-center relative">
                                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-500 xl:mt-auto lg:mt-auto md:mt-auto mt-5">
                                    10
                                </div>
                                <div className="xl:text-lg lg:text-base md:text-base text-sm xl:font-normal lg:font-extralight md:font-extralight font-extralight mt-2">
                                    Years of Experience
                                </div>
                                <div className="absolute right-0 xl:top-0 lg:top-0 md:top-14 h-full">
                                    {/* Column Line for Mobile (L and M) */}
                                    <img src={columnLine2} alt="" className="h-12 sm:h-16 md:h-20 object-contain block lg:hidden" />
                                    {/* Column Line for Larger Screens (Tablet and Above) */}
                                    <img src={columnLine} alt="" className="h-12 sm:h-16 md:h-20 object-contain hidden lg:block" />
                                </div>
                            </div>

                            <div className="text-center relative">
                                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-500 xl:mt-auto lg:mt-auto md:mt-auto mt-5">
                                    8
                                </div>
                                <div className="xl:text-lg lg:text-base md:text-base text-sm xl:font-normal lg:font-extralight md:font-extralight font-extralight mt-2">
                                    Different Countries
                                </div>
                                <div className="absolute right-0 xl:top-0 lg:top-0 md:top-14 h-full">
                                    {/* Column Line for Mobile (L and M) */}
                                    <img src={columnLine2} alt="" className="h-12 sm:h-16 md:h-20 object-contain block lg:hidden" />
                                    {/* Column Line for Larger Screens (Tablet and Above) */}
                                    <img src={columnLine} alt="" className="h-12 sm:h-16 md:h-20 object-contain hidden lg:block" />
                                </div>
                            </div>

                            <div className="text-center relative">
                                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-500 xl:mt-auto lg:mt-auto md:mt-auto mt-5">
                                    5
                                </div>
                                <div className=" xl:text-lg lg:text-base md:text-base text-sm xl:font-normal lg:font-extralight md:font-extralight font-extralight mt-2">
                                    Years in Industry
                                </div>
                                <div className="absolute right-0 xl:top-0 lg:top-0 md:top-14 xl:hidden lg:hidden md:block hidden h-full">
                                    {/* Column Line for Mobile (L and M) */}
                                    <img src={columnLine2} alt="" className="h-12 sm:h-16 md:h-20 object-contain block lg:hidden" />
                                    {/* Column Line for Larger Screens (Tablet and Above) */}
                                    <img src={columnLine} alt="" className="h-12 sm:h-16 md:h-20 object-contain hidden lg:block" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Image Carousel */}
                    <div className="relative mt-12 mb-10">
                        <Slider slidesToShow={2} autoplay speed={1000} centerMode={true} arrows={false} centerPadding="60px" 
                        responsive={[
                            {
                              breakpoint: 1024,
                              settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1,
                                infinite: true,
                                dots: true
                              }
                            },
                            {
                              breakpoint: 600,
                              settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1,
                                infinite: true,
                                dots: true,
                                centerMode: false
                              }
                            },
                            {
                              breakpoint: 480,
                              settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                infinite: true,
                                dots: true,
                                centerMode: false
                              }
                            }
                          ]}

                          dots={true}

                          appendDots={(dots:any) => <ul> {dots} </ul>}
                        > 
                           {customImages.map((item,index) => {
                            return (<div
                                key={index}
                                className="px-3 relative"
                            >
                                <img
                                    src={item.img}
                                    alt="Carousel Image"
                                    className="w-full object-cover custom-border backdrop:blur-xl "
                                />

                                <div className="absolute bottom-0 left-0 right-0 mx-3 px-10 bg-gradient-to-b from-transparent to-black">
                                    <div className="mb-2 lg:mb-10">
                                        <p className="text-left font-bold text-xs lg:text-2xl">Growth and Development</p>

                                        <p className="text-left text-xs lg:text-lg leading-tight">We invest in your growth through mentorship programs, skill-building workshops, and opportunities to work with industry-leading experts.</p>
                                    </div>

                                </div>
                            </div>
                            )
                           })}
                        </Slider>
                    </div>
                </div>
            </main>

            <div className="bg-[#0E0E0E] flex flex-col items-center  py-4 
            
            xl:px-[8rem] lg:px-[4rem] md:px-[3rem] px-[1rem]
            
            ">
                {/* Center Text */}
                <p className="xl:text-[4rem] lg:text-[4rem] md:text-[3rem] text-[1.7rem] my-[2.5rem] font-[500] text-white mb-[5rem] mt-20">
                    What We Do
                </p>

                {/* Cards Grid */}
                <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-x-10 md:gap-y-20 gap-24 w-full mb-[3rem]">
                    {/* Card 1 */}
                    <div className="bg-[#202020] text-white text-center relative p-6 rounded-lg shadow-md border border-[#4F4F4F]">
                        <img
                            src={four}
                            alt="Card Image"
                            className="absolute top-[-65px] left-1/2 transform -translate-x-1/2 xl:w-[8rem] xl:h-[8.5rem] lg:w-[8rem] lg:h-[8.5rem] md:w-[8rem] md:h-[8.5rem] w-[6.5rem] h-[7rem]"
                        />
                        <h2 className="xl:text-2xl lg:text-2xl md:text-xl text-base font-semibold mb-4 xl:mt-12 lg:mt-12 md:mt-12 mt-5">
                            Software Development
                        </h2>
                        <p className="font-normal text-gray-300 text-left xl:text-base lg:text-base md:text-base text-lg">
                            Create decentralized platforms, tokens, and smart contracts for innovative Web3 solutions.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#202020] text-white text-center relative p-6 rounded-lg shadow-md border border-[#4F4F4F]">
                        <img
                            src={three}
                            alt="Card Image"
                            className="absolute top-[-65px] left-1/2 transform -translate-x-1/2 xl:w-[8rem] xl:h-[8.5rem] lg:w-[8rem] lg:h-[8.5rem] md:w-[8rem] md:h-[8.5rem] w-[6.5rem] h-[7rem]"
                        />
                        <h2 className="xl:text-2xl lg:text-2xl md:text-xl text-base font-semibold mb-4 xl:mt-12 lg:mt-12 md:mt-12 mt-5">
                            Blockchain <br /> Solutions
                        </h2>
                        <p className="font-light text-gray-300 text-left xl:text-base lg:text-base md:text-base text-sm">
                            Develop blockchain applications, smart contracts, and DApps tailored to your web3 business needs.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#202020] text-white text-center relative p-6 rounded-lg shadow-md border border-[#4F4F4F]">
                        <img
                            src={two}
                            alt="Card Image"
                            className="absolute top-[-65px] left-1/2 transform -translate-x-1/2 xl:w-[8rem] xl:h-[8.5rem] lg:w-[8rem] lg:h-[8.5rem] md:w-[8rem] md:h-[8.5rem] w-[6.5rem] h-[7rem]"
                        />
                        <h2 className="xl:text-2xl lg:text-2xl md:text-xl text-base font-semibold mb-4 xl:mt-12 lg:mt-12 md:mt-12 mt-5">
                            Whitelabel <br /> Products
                        </h2>
                        <p className="font-light text-gray-300 text-left xl:text-base lg:text-base md:text-base text-sm">
                            Launch quickly with customizable Web3 solutions like NFT marketplaces and token launchpads tailored to your brand.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-[#202020] text-white text-center relative p-6 rounded-lg shadow-md border border-[#4F4F4F]">
                        <img
                            src={one}
                            alt="Card Image"
                            className="absolute top-[-65px] left-1/2 transform -translate-x-1/2 xl:w-[8rem] xl:h-[8.5rem] lg:w-[8rem] lg:h-[8.5rem] md:w-[8rem] md:h-[8.5rem] w-[6.5rem] h-[7rem]"
                        />
                        <h2 className="xl:text-2xl lg:text-2xl md:text-xl text-base font-semibold mb-4 xl:mt-12 lg:mt-12 md:mt-12 mt-5">
                            Telegram <br /> Automation
                        </h2>
                        <p className="font-light text-gray-300 text-left xl:text-base lg:text-base md:text-base text-sm">
                            Automate engagement, support, and notifications with advanced Telegram bots for seamless communication.
                        </p>
                    </div>
                </div>
            </div>

            <div className=" flex justify-center items-center bg-[#0E0E0E] bg-no-repeat bg-cover relative">
                <img src={whos_behind_left_bg} className="absolute h-[70%] top-0 left-0 " />
                <div className="bg-transparent z-10">
                    <p className="z-10 xl:text-[4rem] lg:text-[4rem] md:text-[3rem] text-[1.7rem] my-[2.5rem] font-[500] text-white mb-[5rem]">
                        Who’s Behind KingITLab
                    </p>
                    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-2 xl:gap-[2.8rem] lg:gap-[2.8rem] md:gap-[2.8rem] gap-[1rem] mb-[7rem]">
                        <div className="xl:w-[17.3rem] xl:h-[22.2rem] lg:w-[17.3rem] lg:h-[22.2rem] md:w-[17.3rem] md:h-[22.2rem] w-[9rem] h-[13rem] rounded-[0.5rem]">
                            <img src={image0} />
                        </div>
                        <div className="xl:w-[17.3rem] xl:h-[22.2rem] lg:w-[17.3rem] lg:h-[22.2rem] md:w-[17.3rem] md:h-[22.2rem] w-[9rem] h-[13rem] rounded-[0.5rem]">
                            <img src={image1} />
                        </div>
                        <div className="xl:w-[17.3rem] xl:h-[22.2rem] lg:w-[17.3rem] lg:h-[22.2rem] md:w-[17.3rem] md:h-[22.2rem] w-[8rem] h-[13rem] rounded-[0.5rem]">
                            <img src={image2} />
                        </div>
                        <div className="xl:w-[17.3rem] xl:h-[22.2rem] lg:w-[17.3rem] lg:h-[22.2rem] md:w-[17.3rem] md:h-[22.2rem] w-[8rem] h-[13rem] rounded-[0.5rem]">
                            <img src={image3} />
                        </div>
                        <div className="xl:w-[17.3rem] xl:h-[22.2rem] lg:w-[17.3rem] lg:h-[22.2rem] md:w-[17.3rem] md:h-[22.2rem] w-[8rem] h-[13rem] rounded-[0.5rem]">
                            <img src={image4} />
                        </div>
                        <div className="xl:w-[17.3rem] xl:h-[22.2rem] lg:w-[17.3rem] lg:h-[22.2rem] md:w-[17.3rem] md:h-[22.2rem] w-[8rem] h-[13rem] rounded-[0.5rem]">
                            <img src={image5} />
                        </div>
                        <div className="xl:w-[17.3rem] xl:h-[22.2rem] lg:w-[17.3rem] lg:h-[22.2rem] md:w-[17.3rem] md:h-[22.2rem] w-[8rem] h-[13rem] rounded-[0.5rem]">
                            <img src={image6} />
                        </div>
                        <div className="xl:w-[17.3rem] xl:h-[22.2rem] lg:w-[17.3rem] lg:h-[22.2rem] md:w-[17.3rem] md:h-[22.2rem] w-[8rem] h-[13rem] rounded-[0.5rem]">
                            <img src={image7} />
                        </div>
                    </div>
                </div>
                <img src={whos_behind_right_bg} className="absolute h-[70%] bottom-0 right-0 " />
            </div>

            <div className="bg-[#0E0E0E] flex flex-col items-center">
                <p className="xl:text-[4rem] lg:text-[4rem] md:text-[3rem] text-[1.7rem] font-[500] text-white mb-[1rem]">Join King IT Labs</p>

                <p className="text-white text-lg font-light leading-[1.5rem] mb-[1rem]  sm:px-8 md:px-12 text-center hidden md:block">
                    We’re dedicated to crafting exceptional software solutions and nurturing talent. <br /> If you’re passionate about technology and
                    eager to make an impact, come grow with us <br /> and help shape the future of digital innovation!
                </p>

                {/* Cards Section */}
                <div className="w-full flex justify-center py-6 px-6">
                    <div className="w-auto grid xl:grid-cols-2 lg:grid-cols-2 md:lg:grid-cols-1 grid-cols-1 gap-4">
                        <Card
                            title="Teach Lead"
                            buttons={["Contract", "Remote", "Senior Level"]}
                            content="We’re looking for talented professionals to join KingIT Lab! Explore our open positions and work remotely on cutting-edge Web3 and fintech projects."
                        />
                        <Card
                            title="Senior Software Engineer"
                            buttons={["Contract", "Remote", "Senior Level"]}
                            content="We’re looking for talented professionals to join KingIT Lab! Explore our open positions and work remotely on cutting-edge Web3 and fintech projects."
                        />
                        <Card
                            title="Blockchain Developer"
                            buttons={["Contract", "Remote", "Senior Level"]}
                            content="We’re looking for talented professionals to join KingIT Lab! Explore our open positions and work remotely on cutting-edge Web3 and fintech projects."
                        />
                        <Card
                            title="Product Manager"
                            buttons={["Contract", "Remote", "Senior Level"]}
                            content="We’re looking for talented professionals to join KingIT Lab! Explore our open positions and work remotely on cutting-edge Web3 and fintech projects."
                        />
                    </div>
                </div>
                <button className="min-w-min h-[2.8rem] bg-white px-[1.5rem] text-[1.1rem] rounded-lg mb-[4.5rem] mt-[1.5rem]">Find Your Role</button>
            </div>

            {/* FAQ  */}
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

            <Footer />
        </div>
    );
};

export default Home;
