// IMAGES
import cardImg from "../../assets/images/blog_card_img.png";
import avatar from "../../assets/images/blog_card_avatar.png";

// ICONS
import { GoShareAndroid } from "react-icons/go";

// COMPONENTS
import MainHeading from "../MainHeading";

const OurBlogs = () => {
    // MOCK DATA
    const blogData: Array<TBlogData> = [
        {
            id: 1,
            title: "Integer Maecenas Eget Viverra",
            timeToRead: "3 minutes read",
            cardImg: cardImg,
            totalShare: "1K",
            description:
                "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
            user: {
                name: "Joanna Wellick",
                avatar: avatar,
                date: "June 28, 2018",
            },
        },
        {
            id: 2,
            title: "Integer Maecenas Eget Viverra",
            timeToRead: "3 minutes read",
            cardImg: cardImg,
            totalShare: "1K",
            description:
                "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
            user: {
                name: "Joanna Wellick",
                avatar: avatar,
                date: "June 28, 2018",
            },
        },
        {
            id: 3,
            title: "Integer Maecenas Eget Viverra",
            timeToRead: "3 minutes read",
            cardImg: cardImg,
            totalShare: "1K",
            description:
                "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
            user: {
                name: "Joanna Wellick",
                avatar: avatar,
                date: "June 28, 2018",
            },
        },
        {
            id: 4,
            title: "Integer Maecenas Eget Viverra",
            timeToRead: "3 minutes read",
            cardImg: cardImg,
            totalShare: "1K",
            description:
                "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
            user: {
                name: "Joanna Wellick",
                avatar: avatar,
                date: "June 28, 2018",
            },
        },
        {
            id: 5,
            title: "Integer Maecenas Eget Viverra",
            timeToRead: "3 minutes read",
            cardImg: cardImg,
            totalShare: "1K",
            description:
                "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
            user: {
                name: "Joanna Wellick",
                avatar: avatar,
                date: "June 28, 2018",
            },
        },
        {
            id: 6,
            title: "Integer Maecenas Eget Viverra",
            timeToRead: "3 minutes read",
            cardImg: cardImg,
            totalShare: "1K",
            description:
                "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
            user: {
                name: "Joanna Wellick",
                avatar: avatar,
                date: "June 28, 2018",
            },
        },
    ];

    return (
        <>
            <MainHeading text="Our Blogs" />
            <div className="w-full flex justify-center py-6 px-6">
                <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-x-[1.5rem] gap-y-[4rem]">
                    {blogData.map((item) => {
                        return (
                            <div
                                key={item.id}
                                className="flex flex-col border border-[#434444] overflow-hidden bg-[#15171A] rounded-lg xl:w-[24.5rem] lg:w-[24.5rem] md:w-[22rem] xl:h-auto lg:h-auto md:h-auto h-auto"
                            >
                                <div className="w-full h-[18.3rem] overflow-hidden">
                                    <img src={item.cardImg} className="w-full h-full" />
                                </div>
                                <div className="p-[1.5rem]">
                                    <div className="text-left flex flex-col gap-[1.313rem]">
                                        <div>
                                            <p className="xl:text-[1.1rem] lg:text-[1.1rem] md:text-[1rem] text-[1rem] text-white font-bold truncate">
                                                {item.title}
                                            </p>
                                            <p className="xl:text-[0.875rem] lg:text-[0.875rem] md:text-[0.875rem] text-[#F0F0F0] text-[0.75rem] font-extralight truncate">
                                                {item.timeToRead}
                                            </p>
                                        </div>

                                        <div className="flex flex-col gap-[1.094rem]">
                                            <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col xl:justify-between lg:justify-between md:justify-between justify-start items-center xl:gap-0 lg:gap-0 md:gap-0 gap-[0.563rem]">
                                                <div className="xl:w-auto lg:w-auto md:w-auto w-full flex items-center gap-[0.5rem]">
                                                    <img src={avatar} className="rounded-full xl:w-[1.75rem] xl:h-[1.75rem]" />
                                                    <span className="text-[0.75rem] font-[400] text-[#F0F0F0]">{item.user.name}</span>
                                                    <p className="border-t-2 border-[#F0F0F0] xl:w-[1.5rem] lg:w-[1.5rem] md:w-[1rem] w-[0.75rem]"></p>
                                                    <span className="text-[#F0F0F0] text-[0.625rem] font-[400]">{item.user.date}</span>
                                                </div>
                                                <div className="xl:w-auto lg:w-auto md:w-auto w-full flex items-center gap-[0.5rem]">
                                                    <GoShareAndroid size={16} color="white" />
                                                    <span className="text-[#F0F0F0] text-[0.625rem] font-[400]">{item.totalShare} shares</span>
                                                </div>
                                            </div>
                                            <p className="text-[#F0F0F0] text-[0.875rem] font-[400] leading-[1rem] line-clamp-3 break-all">
                                                {item.description}
                                            </p>
                                            <p className="w-fit cursor-pointer text-[#FFFFFF]  text-[1rem] font-[600]">Read Article</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <button className="text-white my-[4rem] self-center w-fit text-[1.125rem] font-medium py-[0.625rem] px-[1rem] border-2 border-white rounded-2xl">
                Load More
            </button>
        </>
    );
};

export default OurBlogs;

// TYPES
type TBlogData = {
    id: number;
    title: string;
    timeToRead: string;
    cardImg: string;
    totalShare: string;
    description: string;
    user: {
        name: string;
        avatar: string;
        date: string;
    };
};
