import { useNavigate } from "react-router-dom";

// IMAGES
import cardImg from "../../assets/images/blog_card_img.png";
import avatar from "../../assets/images/blog_card_avatar.png";

// COMPONENTS
import MainHeading from "../MainHeading";
import ROUTES from "../../navigation/routes";
import BlogArticleCard from "./BlogArticleCard";

const OurBlogs = () => {
    const navigate = useNavigate();

    // MOCK DATA
    const blogData: Array<TBlogData> = [
        {
            id: 1,
            title: "Integer Maecenas Eget Viverra",
            timeToRead: "3 minutes read",
            cardImage: cardImg,
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
            cardImage: cardImg,
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
            cardImage: cardImg,
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
            cardImage: cardImg,
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
            cardImage: cardImg,
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
            cardImage: cardImg,
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

    // FUNCTIONS
    const reacdArticleHandler = (id: number) => {
        navigate(`${ROUTES.BLOG.PATH}/${id}`);
    };

    return (
        <>
            <MainHeading text="Our Blogs" />
            <div className="w-full flex justify-center py-6 px-6">
                <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-x-[1.5rem] gap-y-[4rem]">
                    {blogData.map((item) => {
                        return <BlogArticleCard key={item.id} card={item} onClickReadArticle={reacdArticleHandler} />;
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
    cardImage: string;
    totalShare: string;
    description: string;
    user: {
        name: string;
        avatar: string;
        date: string;
    };
};
