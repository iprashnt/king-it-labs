// IMAGES
import StackUsedImage from "../../../assets/images/stack_used.png";
import StackUsedImageSmall from "../../../assets/images/stack_used_small.png";

// COMPONENTS
import WrapperLayout from "../../WrapperLayout";

const StackUsed = () => {
    return (
        <WrapperLayout className="mt-[8rem]">
            <p className="text-center text-white text-[2.5rem]">Stack Used</p>
            <div className="flex justify-center mt-[2rem]">
                <img src={StackUsedImage} className="w-full xl:block lg:block md:block hidden" />
                <img src={StackUsedImageSmall} className="w-full xl:hidden lg:hidden md:hidden block" />
            </div>
        </WrapperLayout>
    );
};

export default StackUsed;
