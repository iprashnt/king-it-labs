import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// IMAGES
import WhatTheySayBg from "../../assets/images/what_they_say_bg.png";
import WhatTheySayUser1 from "../../assets/images/what_they_say_user1.png";
import WhatTheySayUser2 from "../../assets/images/what_they_say_user2.png";
import WhatTheySayUser3 from "../../assets/images/what_they_say_user3.png";

// COMPONENTS
import WrapperLayout from "../WrapperLayout";

const WhatTheySay = () => {
    // MOCK DATA
    const customImages = [
        {
            img: WhatTheySayUser1,
            name: "Robert Garcia",
            profession: "Cybersecurity Analyst",
            description:
                "KingITLabs innovative abilities and problem-solving skills in design projects are exceptional and providing efficient and practical design solutions. ",
        },
        {
            img: WhatTheySayUser2,
            name: "Isabelle Fletcher",
            profession: "Robotics Engineer",
            description:
                "KingITLabs ability in time management and project execution is equally admirable. Even under tight deadlines, you can complete tasks efficiently.",
        },
    ];

    // SLIDER CONFIG
    const sliderSettings = {
        slidesToShow: 2,
        autoplay: true,
        speed: 1000,
        centerMode: true,
        arrows: false,
        centerPadding: "60px",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    centerMode: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    centerMode: false,
                },
            },
        ],
        dots: true,
        appendDots: (dots: any) => <ul> {dots} </ul>,
    };

    return (
        <div className="relative xl:h-[40rem] lg:h-[40rem] md:h-[40rem] h-auto overflow-hidden">
            <img src={WhatTheySayBg} className="absolute w-full xl:block lg:block md:block hidden" />
            <WrapperLayout>
                <p className="xl:text-[4rem] lg:text-[4rem] md:text-[3rem] text-[3rem] text-white text-center mb-[3rem]">Hear What They Say</p>
            </WrapperLayout>
            <div className="relative">
                <Slider {...sliderSettings}>
                    {customImages.map((item, index) => {
                        return (
                            <div key={index} className="px-3 relative">
                                <div className="flex xl:gap-10 lg:gap-10 md:gap-5 gap-5 xl:flex-row lg:flex-row md:flex-row flex-col w-full p-[1rem] xl:h-[20rem] lg:h-auto md:h-auto h-auto bg-[#202020] rounded-lg shadow-md border border-[#4F4F4F]">
                                    <div className="xl:w-[40%] lg:w-[40%] md:w-[50%] w-full">
                                        <div className="xl:h-[13rem] lg:h-[8rem] md:h-auto h-auto overflow-hidden rounded-xl">
                                            <img src={item.img} className="w-full h-full" />
                                            {/* <img src={WhatTheySayUser3} className="xl:hidden lg:hidden md:hidden block  rounded-xl" /> */}
                                        </div>
                                        <div className="flex flex-col justify-center items-center xl:mt-[1.5rem] lg:mt-[1.5rem] md:mt-0 mt-[1rem] gap-[0.2rem]">
                                            <p className="line-clamp-1 text-center xl:text-lg lg:text-lg md:text-[0.8rem] text-2xl font-bold text-[#4AB4FF]">
                                                {item.name}
                                            </p>
                                            <p className="line-clamp-1 text-center text-[#B0B0B0] xl:text-sm lg:text-sm md:text-[0.6rem] text-xl font-extralight">
                                                {item.profession}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="xl:w-[60%] lg:w-[60%] md:w-[50%] w-full">
                                        <p className="text-white xl:text-[1.5rem] lg:text-[1rem] md:text-[0.8rem] font-extralight">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            // <div key={index} className="px-3 relative">
                            //     <img src={item.img} alt="Carousel Image" className="w-full object-cover custom-border backdrop:blur-xl " />

                            //     <div className="absolute bottom-0 left-0 right-0 mx-3 px-10 bg-gradient-to-b from-transparent to-black">
                            //         <div className="mb-2 lg:mb-10">
                            //             <p className="text-left font-bold text-xs lg:text-2xl">Growth and Development</p>

                            //             <p className="text-left text-xs lg:text-lg leading-tight">
                            //                 We invest in your growth through mentorship programs, skill-building workshops, and opportunities to
                            //                 work with industry-leading experts.
                            //             </p>
                            //         </div>
                            //     </div>
                            // </div>
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
};

export default WhatTheySay;
