// IMAGES
import image0 from "../../assets/images/image (0).png";
import image1 from "../../assets/images/image (1).png";
import image2 from "../../assets/images/image (2).png";
import image3 from "../../assets/images/image (3).png";
import image4 from "../../assets/images/image (4).png";
import image5 from "../../assets/images/image (5).png";
import image6 from "../../assets/images/image (6).png";
import image7 from "../../assets/images/image (7).png";
import whos_behind_left_bg from "../../assets/images/whos_behind_left_bg.png";
import whos_behind_right_bg from "../../assets/images/whos_behind_right_bg.png";

// COMPONENTS
import MainHeading from "../MainHeading";

const WhosBehindKingItLab = () => {
    // MOCK DATA
    const whosBehindKingItLabData: TWhosBehindKingItLabData = [
        {
            id: 1,
            image: image0,
        },
        {
            id: 2,
            image: image1,
        },
        {
            id: 3,
            image: image2,
        },
        {
            id: 4,
            image: image3,
        },
        {
            id: 5,
            image: image4,
        },
        {
            id: 6,
            image: image5,
        },
        {
            id: 7,
            image: image6,
        },
        {
            id: 8,
            image: image7,
        },
    ];

    return (
        <div className=" flex justify-center items-center bg-[#0E0E0E] bg-no-repeat bg-cover relative">
            <img src={whos_behind_left_bg} className="absolute h-[70%] top-0 left-0 " />
            <div className="bg-transparent z-10">
                <MainHeading className="text-center mb-[5rem]" text="Who’s Behind KingITLab" />
                <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-2 xl:gap-[2.8rem] lg:gap-[2.8rem] md:gap-[2.8rem] gap-[1rem] mb-[7rem]">
                    {whosBehindKingItLabData.map(({ id, image }) => {
                        return (
                            <div
                                key={id}
                                className="xl:w-[17.3rem] xl:h-[22.2rem] lg:w-[17.3rem] lg:h-[22.2rem] md:w-[17.3rem] md:h-[22.2rem] w-[9rem] h-[13rem] rounded-[0.5rem]"
                            >
                                <img src={image} />
                            </div>
                        );
                    })}
                </div>
            </div>
            <img src={whos_behind_right_bg} className="absolute h-[70%] bottom-0 right-0 " />
        </div>
    );
};

export default WhosBehindKingItLab;

// TYPES
type TWhosBehindKingItLabData = Array<{
    id: number;
    image: string;
}>;
