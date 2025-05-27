import { useNavigate } from "react-router-dom";
import ROUTES from "../../navigation/routes";

// IMAGES
import avatar from "../../assets/images/blog_card_avatar.png";
import cardImg from "../../assets/images/blog_card_img.png";

// COMPONENTS
import Card from "./Card";

const SimilarArticles = () => {
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
        <div className="mb-[4rem]">
            <p className="text-white text-[1.75rem] font-medium mb-[1.5rem]">You May Also Like</p>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 xl:gap-0 lg:gap-[1.5rem] md:gap-[1.5rem] gap-[1.5rem]">
                {blogData.slice(0, 4).map((item) => {
                    return <Card key={item.id} card={item} onClickReadArticle={reacdArticleHandler} />;
                })}
            </div>
        </div>
    );
};

export default SimilarArticles;

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
